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
import { PlayerResponseExpandable } from './player-response-expandable';
// May contain unused imports in some cases
// @ts-ignore
import { SortOrder } from './sort-order';

/**
 * 
 * @export
 * @interface PlayerListQueries
 */
export interface PlayerListQueries {
    /**
     * Specifies the maximum number of records to return.
     * @type {number}
     * @memberof PlayerListQueries
     */
    'limit'?: number;
    /**
     * Specifies the offset for the first records to return.
     * @type {number}
     * @memberof PlayerListQueries
     */
    'skip'?: number;
    /**
     * 
     * @type {SortOrder}
     * @memberof PlayerListQueries
     */
    'order'?: SortOrder;
    /**
     * Specifies the fields to expand in the response.
     * @type {Array<PlayerResponseExpandable>}
     * @memberof PlayerListQueries
     */
    'expand'?: Array<PlayerResponseExpandable>;
    /**
     * Filter by player name.
     * @type {string}
     * @memberof PlayerListQueries
     */
    'name'?: string;
}


