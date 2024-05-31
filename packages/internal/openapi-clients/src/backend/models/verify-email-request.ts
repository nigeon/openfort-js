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
import { CodeChallengeVerify } from './code-challenge-verify';

/**
 * 
 * @export
 * @interface VerifyEmailRequest
 */
export interface VerifyEmailRequest {
    /**
     * The email address of the user.
     * @type {string}
     * @memberof VerifyEmailRequest
     */
    'email': string;
    /**
     * Unique value to identify the request. Obtained from the email.
     * @type {string}
     * @memberof VerifyEmailRequest
     */
    'token': string;
    /**
     * 
     * @type {CodeChallengeVerify}
     * @memberof VerifyEmailRequest
     */
    'challenge'?: CodeChallengeVerify;
}

