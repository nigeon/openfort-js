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
import { APITriggerType } from './apitrigger-type';

/**
 * 
 * @export
 * @interface CreateTriggerRequest
 */
export interface CreateTriggerRequest {
    /**
     * Specifies the target of the trigger
     * @type {string}
     * @memberof CreateTriggerRequest
     */
    'target': string;
    /**
     * 
     * @type {APITriggerType}
     * @memberof CreateTriggerRequest
     */
    'type': APITriggerType;
    /**
     * Specifies the subscription ID
     * @type {string}
     * @memberof CreateTriggerRequest
     */
    'subscription'?: string;
}


