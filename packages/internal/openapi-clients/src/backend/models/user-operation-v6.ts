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



/**
 * 
 * @export
 * @interface UserOperationV6
 */
export interface UserOperationV6 {
    /**
     * The data to pass to the `sender` during the main execution call.
     * @type {string}
     * @memberof UserOperationV6
     */
    'callData': string;
    /**
     * The amount of gas to allocate the main execution call
     * @type {string}
     * @memberof UserOperationV6
     */
    'callGasLimit': string;
    /**
     * Account init code. Only for new accounts.
     * @type {string}
     * @memberof UserOperationV6
     */
    'initCode'?: string;
    /**
     * Maximum fee per gas.
     * @type {string}
     * @memberof UserOperationV6
     */
    'maxFeePerGas': string;
    /**
     * Maximum priority fee per gas.
     * @type {string}
     * @memberof UserOperationV6
     */
    'maxPriorityFeePerGas': string;
    /**
     * Anti-replay parameter.
     * @type {string}
     * @memberof UserOperationV6
     */
    'nonce': string;
    /**
     * Paymaster address with calldata.
     * @type {string}
     * @memberof UserOperationV6
     */
    'paymasterAndData'?: string;
    /**
     * Extra gas to pay the bundler.
     * @type {string}
     * @memberof UserOperationV6
     */
    'preVerificationGas': string;
    /**
     * The account making the operation.
     * @type {string}
     * @memberof UserOperationV6
     */
    'sender': string;
    /**
     * Data passed into the account to verify authorization.
     * @type {string}
     * @memberof UserOperationV6
     */
    'signature': string;
    /**
     * The amount of gas to allocate for the verification step.
     * @type {string}
     * @memberof UserOperationV6
     */
    'verificationGasLimit': string;
}
