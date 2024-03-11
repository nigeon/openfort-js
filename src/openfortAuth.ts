import {Configuration, OAuthProvider, AuthenticationApi} from "./generated";
import {errors, importJWK, jwtVerify, KeyLike} from "jose";

export type Auth = {
    player: string;
    accessToken: string;
    refreshToken: string;
};

export class OpenfortAuth {
    private readonly _configuration: Configuration;
    private _oauthApi?: AuthenticationApi;
    private readonly _publishableKey: string;
    private _jwks: KeyLike | Uint8Array;

    constructor(publishableKey: string, basePath?: string) {
        this._configuration = new Configuration({accessToken: publishableKey, basePath});
        this._oauthApi = new AuthenticationApi(this._configuration);
        this._publishableKey = publishableKey;

        this.getJwks().then((jwtks) => {
            this._jwks = jwtks;
        });
    }

    public get jwks(): KeyLike | Uint8Array {
        return this._jwks;
    }

    public async authorizeWithOAuthToken(provider: OAuthProvider, token: string): Promise<Auth> {
        const result = await this._oauthApi.authenticateOAuth({provider, token});
        return {
            player: result.data.player.id,
            accessToken: result.data.token,
            refreshToken: result.data.refreshToken,
        };
    }

    public async authorizeWithEmailPassword(email: string, password: string): Promise<Auth> {
        const result = await this._oauthApi.loginEmailPassword({email, password});
        return {
            player: result.data.player.id,
            accessToken: result.data.token,
            refreshToken: result.data.refreshToken,
        };
    }

    public async signUp(email: string, password: string): Promise<Auth> {
        const result = await this._oauthApi.signupEmailPassword({name: "", email, password});
        return {
            player: result.data.player.id,
            accessToken: result.data.token,
            refreshToken: result.data.refreshToken,
        };
    }

    public async getJwks(): Promise<KeyLike | Uint8Array> {
        const jwtks = await this._oauthApi.getJwks(this._publishableKey);
        if (jwtks.data.keys.length === 0) {
            throw new Error("No keys found");
        }

        const jwtKey = jwtks.data.keys[0];
        return await importJWK(
            {
                kty: jwtKey.kty,
                crv: jwtKey.crv,
                x: jwtKey.x,
                y: jwtKey.y,
            },
            jwtKey.alg,
        );
    }

    public async verifyAndRefreshToken(token: string, refreshToken: string): Promise<Auth> {
        try {
            const verification = await jwtVerify(token, this._jwks);
            return {
                player: verification.payload.sub,
                accessToken: token,
                refreshToken,
            };
        } catch (error) {
            if (error instanceof errors.JWTExpired) {
                const newToken = await this._oauthApi.refresh({refreshToken});
                return {
                    player: newToken.data.player.id,
                    accessToken: newToken.data.token,
                    refreshToken: newToken.data.refreshToken,
                };
            } else {
                throw error;
            }
        }
    }
}
