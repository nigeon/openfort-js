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
 * Type representing a token
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    'symbol'?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    'decimals': number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    'address': string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    'chainId': number;
}
