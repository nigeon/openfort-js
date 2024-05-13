import {SignerType} from './signer/signer';
import {
  AuthTokenStorageKey,
  DeviceIDStorageKey,
  IStorage,
  JWKStorageKey,
  PlayerIDStorageKey,
  PublishableKeyStorageKey,
  RefreshTokenStorageKey,
  SessionKeyStorageKey,
  SignerTypeStorageKey,
  ThirdPartyProviderStorageKey,
  ThirdPartyProviderTokenTypeStorageKey,
} from './storage/storage';
import {JWK, OpenfortAuth} from './openfortAuth';

export type AccessToken = {
  token: string;
  thirdPartyProvider: string | null;
  thirdPartyTokenType: string | null;
};

export class InstanceManager {
  private _publishableKey: string | null = null;
  private _authToken: AccessToken | null = null;
  private _refreshToken: string | null = null;
  private _signerType: SignerType | null = null;
  private _jwk: JWK | null = null;
  private _sessionKey: string | null = null;
  private _deviceID: string | null = null;
  private readonly _temporalStorage: IStorage;
  private readonly _persistentStorage: IStorage;
  private readonly _secureStorage: IStorage;
  private playerId: string | null = null;

  constructor(
    temporalStorage: IStorage,
    persistentStorage: IStorage,
    secureStorage: IStorage
  ) {
    this._temporalStorage = temporalStorage;
    this._persistentStorage = persistentStorage;
    this._secureStorage = secureStorage;
  }

  public setPublishableKey(publishableKey: string): void {
    this._publishableKey = publishableKey;
    this._temporalStorage.save(PublishableKeyStorageKey, publishableKey);
  }

  public getPublishableKey(): string | null {
    if (!this._publishableKey) {
      this._publishableKey = this._temporalStorage.get(
        PublishableKeyStorageKey
      );
    }
    return this._publishableKey;
  }

  public removePublishableKey(): void {
    this._publishableKey = null;
    this._temporalStorage.remove(PublishableKeyStorageKey);
  }

  public getAccessToken(): AccessToken | null {
    if (!this._authToken) {
      const token = this._secureStorage.get(AuthTokenStorageKey);
      if (token === null) return null; // Early exit if no token is found
      this._authToken = {
        token,
        thirdPartyProvider: this._secureStorage.get(
          ThirdPartyProviderStorageKey
        ),
        thirdPartyTokenType: this._secureStorage.get(
          ThirdPartyProviderTokenTypeStorageKey
        ),
      };
    }
    return this._authToken;
  }

  public setAccessToken(accessToken: AccessToken): void {
    this._authToken = accessToken;
    this._secureStorage.save(AuthTokenStorageKey, accessToken.token);
    if (accessToken.thirdPartyProvider) {
      this._secureStorage.save(
        ThirdPartyProviderStorageKey,
        accessToken.thirdPartyProvider
      );
    }
    if (accessToken.thirdPartyTokenType) {
      this._secureStorage.save(
        ThirdPartyProviderTokenTypeStorageKey,
        accessToken.thirdPartyTokenType
      );
    }
  }

  public removeAccessToken(): void {
    this._authToken = null;
    this._secureStorage.remove(AuthTokenStorageKey);
    this._secureStorage.remove(ThirdPartyProviderStorageKey);
    this._secureStorage.remove(ThirdPartyProviderTokenTypeStorageKey);
  }

  public getRefreshToken(): string | null {
    if (!this._refreshToken) {
      this._refreshToken = this._secureStorage.get(RefreshTokenStorageKey);
    }
    return this._refreshToken;
  }

  public setRefreshToken(refreshToken: string): void {
    this._refreshToken = refreshToken;
    this._secureStorage.save(RefreshTokenStorageKey, refreshToken);
  }

  public removeRefreshToken(): void {
    this._refreshToken = null;
    this._secureStorage.remove(RefreshTokenStorageKey);
  }

  public setPlayerID(playerID: string): void {
    this.playerId = playerID;
    this._persistentStorage.save(PlayerIDStorageKey, playerID);
  }

  public getPlayerID(): string | null {
    if (this.playerId === null) {
      this.playerId = this._persistentStorage.get(PlayerIDStorageKey);
    }
    return this.playerId;
  }

  public removePlayerID(): void {
    this.playerId = null;
    this._persistentStorage.remove(PlayerIDStorageKey);
  }

  public setSignerType(signerType: SignerType): void {
    this._signerType = signerType;
    this._temporalStorage.save(SignerTypeStorageKey, signerType);
  }

  public getSignerType(): SignerType | null {
    if (!this._signerType) {
      this._signerType = this._temporalStorage.get(
        SignerTypeStorageKey
      ) as SignerType | null;
    }

    if (!this._signerType) {
      if (this.getSessionKey()) {
        this._signerType = SignerType.SESSION;
      } else if (this.getDeviceID()) {
        this._signerType = SignerType.EMBEDDED;
      }
    }

    return this._signerType;
  }

  public removeSignerType(): void {
    this._signerType = null;
    this._temporalStorage.remove(SignerTypeStorageKey);
  }

  public setJWK(jwk: JWK): void {
    this._jwk = jwk;
    this._temporalStorage.save(JWKStorageKey, this.jwkToString(jwk));
  }

  private jwkToString(jwk: JWK): string {
    return JSON.stringify({
      kty: jwk.kty,
      crv: jwk.crv,
      x: jwk.x,
      y: jwk.y,
      alg: jwk.alg,
    });
  }

  private stringToJWK(jwkString: string): JWK {
    const json = JSON.parse(jwkString);
    return {
      kty: json.kty,
      crv: json.crv,
      x: json.x,
      y: json.y,
      alg: json.alg,
    };
  }

  public async getJWK(): Promise<JWK | null> {
    if (!this._jwk) {
      const jwkString = this._temporalStorage.get(JWKStorageKey);
      if (jwkString) {
        this._jwk = this.stringToJWK(jwkString);
      }
    }

    if (!this._jwk) {
      const publishableKey = await this.getPublishableKey();
      if (publishableKey) {
        this._jwk = await OpenfortAuth.GetJWK(publishableKey);
      }
    }

    return this._jwk;
  }

  public removeJWK(): void {
    this._jwk = null;
    this._temporalStorage.remove(JWKStorageKey);
  }

  public getSessionKey(): string | null {
    if (!this._sessionKey) {
      this._sessionKey = this._persistentStorage.get(SessionKeyStorageKey);
    }
    return this._sessionKey;
  }

  public setSessionKey(sessionKey: string): void {
    this._sessionKey = sessionKey;
    this._persistentStorage.save(SessionKeyStorageKey, sessionKey);
  }

  public removeSessionKey(): void {
    this._sessionKey = null;
    this._persistentStorage.remove(SessionKeyStorageKey);
  }

  public setDeviceID(deviceID: string): void {
    this._deviceID = deviceID;
    this._persistentStorage.save(DeviceIDStorageKey, deviceID);
  }

  public getDeviceID(): string | null {
    if (!this._deviceID) {
      this._deviceID = this._persistentStorage.get(DeviceIDStorageKey);
    }
    return this._deviceID;
  }

  public removeDeviceID(): void {
    this._deviceID = null;
    this._persistentStorage.remove(DeviceIDStorageKey);
  }
}
