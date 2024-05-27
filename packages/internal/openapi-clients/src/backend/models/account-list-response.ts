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
import { AccountResponse } from './account-response';
// May contain unused imports in some cases
// @ts-ignore
import { ResponseTypeLIST } from './response-type-list';

/**
 * 
 * @export
 * @interface AccountListResponse
 */
export interface AccountListResponse {
    /**
     * 
     * @type {ResponseTypeLIST}
     * @memberof AccountListResponse
     */
    'object': ResponseTypeLIST;
    /**
     * 
     * @type {string}
     * @memberof AccountListResponse
     */
    'url': string;
    /**
     * 
     * @type {Array<AccountResponse>}
     * @memberof AccountListResponse
     */
    'data': Array<AccountResponse>;
    /**
     * 
     * @type {number}
     * @memberof AccountListResponse
     */
    'start': number;
    /**
     * 
     * @type {number}
     * @memberof AccountListResponse
     */
    'end': number;
    /**
     * 
     * @type {number}
     * @memberof AccountListResponse
     */
    'total': number;
}



