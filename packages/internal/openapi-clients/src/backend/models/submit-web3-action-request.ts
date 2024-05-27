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
 * @interface SubmitWeb3ActionRequest
 */
export interface SubmitWeb3ActionRequest {
    /**
     * True to approve the action, false to reject it.
     * @type {boolean}
     * @memberof SubmitWeb3ActionRequest
     */
    'approve': boolean;
    /**
     * ID of the Policy that defines the gas sponsorship strategy (starts with `pol_`). If no Policy is provided, the own Account native token funds will be used to pay for gas.
     * @type {string}
     * @memberof SubmitWeb3ActionRequest
     */
    'policy'?: string;
    /**
     * signed data by the owner
     * @type {string}
     * @memberof SubmitWeb3ActionRequest
     */
    'signature'?: string;
}

