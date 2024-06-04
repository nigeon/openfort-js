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
 * @interface SIWEInitResponse
 */
export interface SIWEInitResponse {
    /**
     * The address of the player.
     * @type {string}
     * @memberof SIWEInitResponse
     */
    'address': string;
    /**
     * 
     * @type {string}
     * @memberof SIWEInitResponse
     */
    'nonce': string;
    /**
     * 
     * @type {number}
     * @memberof SIWEInitResponse
     */
    'expiresAt': number;
}
