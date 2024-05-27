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
 * @interface StartRecoveryRequest
 */
export interface StartRecoveryRequest {
    /**
     * Address of the new owner
     * @type {string}
     * @memberof StartRecoveryRequest
     */
    'newOwnerAddress': string;
    /**
     * The policy ID (starts with pol_)
     * @type {string}
     * @memberof StartRecoveryRequest
     */
    'policy': string;
}

