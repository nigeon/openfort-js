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



/**
 * 
 * @export
 * @interface RefreshTokenRequest
 */
export interface RefreshTokenRequest {
    /**
     * Specifies the session refresh token.
     * @type {string}
     * @memberof RefreshTokenRequest
     */
    'refreshToken': string;
    /**
     * Specifies whether to force refresh the session.
     * @type {boolean}
     * @memberof RefreshTokenRequest
     */
    'forceRefresh'?: boolean;
}

