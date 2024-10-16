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
import { ContractPolicyRuleResponseContract } from './contract-policy-rule-response-contract';
// May contain unused imports in some cases
// @ts-ignore
import { EntityTypePOLICYRULE } from './entity-type-policyrule';
// May contain unused imports in some cases
// @ts-ignore
import { PolicyRuleTypeCONTRACT } from './policy-rule-type-contract';

/**
 * 
 * @export
 * @interface ContractPolicyRuleResponse
 */
export interface ContractPolicyRuleResponse {
    /**
     * 
     * @type {string}
     * @memberof ContractPolicyRuleResponse
     */
    'id': string;
    /**
     * 
     * @type {EntityTypePOLICYRULE}
     * @memberof ContractPolicyRuleResponse
     */
    'object': EntityTypePOLICYRULE;
    /**
     * 
     * @type {number}
     * @memberof ContractPolicyRuleResponse
     */
    'createdAt': number;
    /**
     * 
     * @type {PolicyRuleTypeCONTRACT}
     * @memberof ContractPolicyRuleResponse
     */
    'type': PolicyRuleTypeCONTRACT;
    /**
     * 
     * @type {ContractPolicyRuleResponseContract}
     * @memberof ContractPolicyRuleResponse
     */
    'contract'?: ContractPolicyRuleResponseContract;
    /**
     * 
     * @type {string}
     * @memberof ContractPolicyRuleResponse
     */
    'functionName'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ContractPolicyRuleResponse
     */
    'wildcard': boolean;
}



