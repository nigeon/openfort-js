/* tslint:disable */
/* eslint-disable */
/**
 * Openfort API
 * Complete Openfort API references and guides can be found at: https://openfort.xyz/docs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: founders@openfort.xyz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OAuthProviderOIDC } from './oauth-provider-oidc';

/**
 * 
 * @export
 * @interface OIDCAuthConfig
 */
export interface OIDCAuthConfig {
    /**
     * Enable OAuth provider.
     * @type {boolean}
     * @memberof OIDCAuthConfig
     */
    'enabled': boolean;
    /**
     * 
     * @type {OAuthProviderOIDC}
     * @memberof OIDCAuthConfig
     */
    'provider': OAuthProviderOIDC;
    /**
     * PEM encoded public key to verify the JWT token
     * @type {string}
     * @memberof OIDCAuthConfig
     */
    'publicVerificationKey'?: string;
    /**
     * Audience of the JWT token
     * @type {string}
     * @memberof OIDCAuthConfig
     */
    'aud': string;
    /**
     * JWKS URL to fetch the public key
     * @type {string}
     * @memberof OIDCAuthConfig
     */
    'jwksUrl'?: string;
}



