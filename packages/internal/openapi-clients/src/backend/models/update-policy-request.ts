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
import { PolicyStrategyRequest } from './policy-strategy-request';

/**
 * 
 * @export
 * @interface UpdatePolicyRequest
 */
export interface UpdatePolicyRequest {
    /**
     * Specifies the name of the policy.
     * @type {string}
     * @memberof UpdatePolicyRequest
     */
    'name'?: string;
    /**
     * The chain ID. Must be a [supported chain](/chains).
     * @type {number}
     * @memberof UpdatePolicyRequest
     */
    'chainId'?: number;
    /**
     * 
     * @type {PolicyStrategyRequest}
     * @memberof UpdatePolicyRequest
     */
    'strategy'?: PolicyStrategyRequest;
    /**
     * The ID of the paymaster.
     * @type {string}
     * @memberof UpdatePolicyRequest
     */
    'paymaster'?: string;
    /**
     * Specifies whether to delete the policy.
     * @type {boolean}
     * @memberof UpdatePolicyRequest
     */
    'deleted'?: boolean;
}

