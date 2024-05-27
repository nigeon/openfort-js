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
import { ApiKeyResponse } from './api-key-response';
// May contain unused imports in some cases
// @ts-ignore
import { EntityTypePROJECT } from './entity-type-project';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookResponse } from './webhook-response';

/**
 * 
 * @export
 * @interface ProjectResponse
 */
export interface ProjectResponse {
    /**
     * 
     * @type {string}
     * @memberof ProjectResponse
     */
    'id': string;
    /**
     * 
     * @type {EntityTypePROJECT}
     * @memberof ProjectResponse
     */
    'object': EntityTypePROJECT;
    /**
     * 
     * @type {number}
     * @memberof ProjectResponse
     */
    'createdAt': number;
    /**
     * 
     * @type {number}
     * @memberof ProjectResponse
     */
    'updatedAt': number;
    /**
     * 
     * @type {string}
     * @memberof ProjectResponse
     */
    'name': string;
    /**
     * 
     * @type {Array<ApiKeyResponse>}
     * @memberof ProjectResponse
     */
    'apikeys'?: Array<ApiKeyResponse>;
    /**
     * 
     * @type {Array<WebhookResponse>}
     * @memberof ProjectResponse
     */
    'webhook'?: Array<WebhookResponse>;
}



