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
import { PolicyResponseExpandable } from './policy-response-expandable';
// May contain unused imports in some cases
// @ts-ignore
import { SortOrder } from './sort-order';

/**
 * 
 * @export
 * @interface PolicyListQueries
 */
export interface PolicyListQueries {
    /**
     * Specifies the maximum number of records to return.
     * @type {number}
     * @memberof PolicyListQueries
     */
    'limit'?: number;
    /**
     * Specifies the offset for the first records to return.
     * @type {number}
     * @memberof PolicyListQueries
     */
    'skip'?: number;
    /**
     * 
     * @type {SortOrder}
     * @memberof PolicyListQueries
     */
    'order'?: SortOrder;
    /**
     * Specifies the fields to expand in the response.
     * @type {Array<PolicyResponseExpandable>}
     * @memberof PolicyListQueries
     */
    'expand'?: Array<PolicyResponseExpandable>;
    /**
     * Specifies the name of the policy.
     * @type {string}
     * @memberof PolicyListQueries
     */
    'name'?: string;
    /**
     * Specifies whether to include deleted policies.
     * @type {boolean}
     * @memberof PolicyListQueries
     */
    'deleted'?: boolean;
    /**
     * The chain ID of the policy.
     * @type {number}
     * @memberof PolicyListQueries
     */
    'chainId'?: number;
    /**
     * Specifies whether to include enabled policies.
     * @type {boolean}
     * @memberof PolicyListQueries
     */
    'enabled'?: boolean;
}



