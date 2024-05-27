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
import { ResponseTypeLIST } from './response-type-list';
// May contain unused imports in some cases
// @ts-ignore
import { Web3ConnectionResponse } from './web3-connection-response';

/**
 * 
 * @export
 * @interface Web3ConnectionListResponse
 */
export interface Web3ConnectionListResponse {
    /**
     * 
     * @type {ResponseTypeLIST}
     * @memberof Web3ConnectionListResponse
     */
    'object': ResponseTypeLIST;
    /**
     * 
     * @type {string}
     * @memberof Web3ConnectionListResponse
     */
    'url': string;
    /**
     * 
     * @type {Array<Web3ConnectionResponse>}
     * @memberof Web3ConnectionListResponse
     */
    'data': Array<Web3ConnectionResponse>;
    /**
     * 
     * @type {number}
     * @memberof Web3ConnectionListResponse
     */
    'start': number;
    /**
     * 
     * @type {number}
     * @memberof Web3ConnectionListResponse
     */
    'end': number;
    /**
     * 
     * @type {number}
     * @memberof Web3ConnectionListResponse
     */
    'total': number;
}



