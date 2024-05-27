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
import { APITopicTRANSACTIONSUCCESSFUL } from './apitopic-transactionsuccessful';
// May contain unused imports in some cases
// @ts-ignore
import { EntityTypeEVENT } from './entity-type-event';

/**
 * 
 * @export
 * @interface TransactionConfirmedEventResponse
 */
export interface TransactionConfirmedEventResponse {
    /**
     * 
     * @type {string}
     * @memberof TransactionConfirmedEventResponse
     */
    'id': string;
    /**
     * 
     * @type {EntityTypeEVENT}
     * @memberof TransactionConfirmedEventResponse
     */
    'object': EntityTypeEVENT;
    /**
     * 
     * @type {number}
     * @memberof TransactionConfirmedEventResponse
     */
    'createdAt': number;
    /**
     * 
     * @type {APITopicTRANSACTIONSUCCESSFUL}
     * @memberof TransactionConfirmedEventResponse
     */
    'topic': APITopicTRANSACTIONSUCCESSFUL;
    /**
     * 
     * @type {number}
     * @memberof TransactionConfirmedEventResponse
     */
    'numberOfBlocks': number;
}



