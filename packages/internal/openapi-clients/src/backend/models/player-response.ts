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
import { EntityTypePLAYER } from './entity-type-player';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerMetadataValue } from './player-metadata-value';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerResponseAccountsInner } from './player-response-accounts-inner';
// May contain unused imports in some cases
// @ts-ignore
import { PlayerResponseTransactionIntentsInner } from './player-response-transaction-intents-inner';

/**
 * 
 * @export
 * @interface PlayerResponse
 */
export interface PlayerResponse {
    /**
     * 
     * @type {string}
     * @memberof PlayerResponse
     */
    'id': string;
    /**
     * 
     * @type {EntityTypePLAYER}
     * @memberof PlayerResponse
     */
    'object': EntityTypePLAYER;
    /**
     * 
     * @type {number}
     * @memberof PlayerResponse
     */
    'createdAt': number;
    /**
     * 
     * @type {string}
     * @memberof PlayerResponse
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PlayerResponse
     */
    'description'?: string;
    /**
     * 
     * @type {{ [key: string]: PlayerMetadataValue; }}
     * @memberof PlayerResponse
     */
    'metadata'?: { [key: string]: PlayerMetadataValue; };
    /**
     * 
     * @type {Array<PlayerResponseTransactionIntentsInner>}
     * @memberof PlayerResponse
     */
    'transactionIntents'?: Array<PlayerResponseTransactionIntentsInner>;
    /**
     * 
     * @type {Array<PlayerResponseAccountsInner>}
     * @memberof PlayerResponse
     */
    'accounts'?: Array<PlayerResponseAccountsInner>;
}


