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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateSessionRequest } from '../models';
// @ts-ignore
import { RevokeSessionRequest } from '../models';
// @ts-ignore
import { SessionListResponse } from '../models';
// @ts-ignore
import { SessionResponse } from '../models';
// @ts-ignore
import { SessionResponseExpandable } from '../models';
// @ts-ignore
import { SignatureRequest } from '../models';
// @ts-ignore
import { SortOrder } from '../models';
/**
 * SessionsApi - axios parameter creator
 * @export
 */
export const SessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a Session.
         * @summary Create a session key.
         * @param {CreateSessionRequest} createSessionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession: async (createSessionRequest: CreateSessionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createSessionRequest' is not null or undefined
            assertParamExists('createSession', 'createSessionRequest', createSessionRequest)
            const localVarPath = `/v1/sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createSessionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
         * @summary List session keys of a player.
         * @param {string} player The player ID (starts with pla_)
         * @param {number} [limit] Specifies the maximum number of records to return.
         * @param {number} [skip] Specifies the offset for the first records to return.
         * @param {SortOrder} [order] Specifies the order in which to sort the results.
         * @param {Array<SessionResponseExpandable>} [expand] Specifies the fields to expand in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerSessions: async (player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<SessionResponseExpandable>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'player' is not null or undefined
            assertParamExists('getPlayerSessions', 'player', player)
            const localVarPath = `/v1/sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (skip !== undefined) {
                localVarQueryParameter['skip'] = skip;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (player !== undefined) {
                localVarQueryParameter['player'] = player;
            }

            if (expand) {
                localVarQueryParameter['expand'] = expand;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
         * @summary Returns a player session by session id
         * @param {string} id Specifies the unique session ID (starts with ses_).
         * @param {Array<SessionResponseExpandable>} [expand] Specifies the fields to expand.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSession: async (id: string, expand?: Array<SessionResponseExpandable>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSession', 'id', id)
            const localVarPath = `/v1/sessions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (expand) {
                localVarQueryParameter['expand'] = expand;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Revoke the session session key.
         * @param {RevokeSessionRequest} revokeSessionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeSession: async (revokeSessionRequest: RevokeSessionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'revokeSessionRequest' is not null or undefined
            assertParamExists('revokeSession', 'revokeSessionRequest', revokeSessionRequest)
            const localVarPath = `/v1/sessions/revoke`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(revokeSessionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Send signed userOperationHash to create session.
         * @param {string} id Specifies the unique session ID (starts with ses_).
         * @param {SignatureRequest} signatureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signatureSession: async (id: string, signatureRequest: SignatureRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('signatureSession', 'id', id)
            // verify required parameter 'signatureRequest' is not null or undefined
            assertParamExists('signatureSession', 'signatureRequest', signatureRequest)
            const localVarPath = `/v1/sessions/{id}/signature`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication pk required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(signatureRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SessionsApi - functional programming interface
 * @export
 */
export const SessionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SessionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a Session.
         * @summary Create a session key.
         * @param {CreateSessionRequest} createSessionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createSession(createSessionRequest: CreateSessionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createSession(createSessionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
         * @summary List session keys of a player.
         * @param {string} player The player ID (starts with pla_)
         * @param {number} [limit] Specifies the maximum number of records to return.
         * @param {number} [skip] Specifies the offset for the first records to return.
         * @param {SortOrder} [order] Specifies the order in which to sort the results.
         * @param {Array<SessionResponseExpandable>} [expand] Specifies the fields to expand in the response.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPlayerSessions(player: string, limit?: number, skip?: number, order?: SortOrder, expand?: Array<SessionResponseExpandable>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPlayerSessions(player, limit, skip, order, expand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
         * @summary Returns a player session by session id
         * @param {string} id Specifies the unique session ID (starts with ses_).
         * @param {Array<SessionResponseExpandable>} [expand] Specifies the fields to expand.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSession(id: string, expand?: Array<SessionResponseExpandable>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSession(id, expand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Revoke the session session key.
         * @param {RevokeSessionRequest} revokeSessionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokeSession(revokeSessionRequest: RevokeSessionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.revokeSession(revokeSessionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Send signed userOperationHash to create session.
         * @param {string} id Specifies the unique session ID (starts with ses_).
         * @param {SignatureRequest} signatureRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signatureSession(id: string, signatureRequest: SignatureRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signatureSession(id, signatureRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SessionsApi - factory interface
 * @export
 */
export const SessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SessionsApiFp(configuration)
    return {
        /**
         * Creates a Session.
         * @summary Create a session key.
         * @param {SessionsApiCreateSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createSession(requestParameters: SessionsApiCreateSessionRequest, options?: AxiosRequestConfig): AxiosPromise<SessionResponse> {
            return localVarFp.createSession(requestParameters.createSessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
         * @summary List session keys of a player.
         * @param {SessionsApiGetPlayerSessionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPlayerSessions(requestParameters: SessionsApiGetPlayerSessionsRequest, options?: AxiosRequestConfig): AxiosPromise<SessionListResponse> {
            return localVarFp.getPlayerSessions(requestParameters.player, requestParameters.limit, requestParameters.skip, requestParameters.order, requestParameters.expand, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
         * @summary Returns a player session by session id
         * @param {SessionsApiGetSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSession(requestParameters: SessionsApiGetSessionRequest, options?: AxiosRequestConfig): AxiosPromise<SessionResponse> {
            return localVarFp.getSession(requestParameters.id, requestParameters.expand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Revoke the session session key.
         * @param {SessionsApiRevokeSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeSession(requestParameters: SessionsApiRevokeSessionRequest, options?: AxiosRequestConfig): AxiosPromise<SessionResponse> {
            return localVarFp.revokeSession(requestParameters.revokeSessionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Send signed userOperationHash to create session.
         * @param {SessionsApiSignatureSessionRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signatureSession(requestParameters: SessionsApiSignatureSessionRequest, options?: AxiosRequestConfig): AxiosPromise<SessionResponse> {
            return localVarFp.signatureSession(requestParameters.id, requestParameters.signatureRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createSession operation in SessionsApi.
 * @export
 * @interface SessionsApiCreateSessionRequest
 */
export interface SessionsApiCreateSessionRequest {
    /**
     * 
     * @type {CreateSessionRequest}
     * @memberof SessionsApiCreateSession
     */
    readonly createSessionRequest: CreateSessionRequest
}

/**
 * Request parameters for getPlayerSessions operation in SessionsApi.
 * @export
 * @interface SessionsApiGetPlayerSessionsRequest
 */
export interface SessionsApiGetPlayerSessionsRequest {
    /**
     * The player ID (starts with pla_)
     * @type {string}
     * @memberof SessionsApiGetPlayerSessions
     */
    readonly player: string

    /**
     * Specifies the maximum number of records to return.
     * @type {number}
     * @memberof SessionsApiGetPlayerSessions
     */
    readonly limit?: number

    /**
     * Specifies the offset for the first records to return.
     * @type {number}
     * @memberof SessionsApiGetPlayerSessions
     */
    readonly skip?: number

    /**
     * Specifies the order in which to sort the results.
     * @type {SortOrder}
     * @memberof SessionsApiGetPlayerSessions
     */
    readonly order?: SortOrder

    /**
     * Specifies the fields to expand in the response.
     * @type {Array<SessionResponseExpandable>}
     * @memberof SessionsApiGetPlayerSessions
     */
    readonly expand?: Array<SessionResponseExpandable>
}

/**
 * Request parameters for getSession operation in SessionsApi.
 * @export
 * @interface SessionsApiGetSessionRequest
 */
export interface SessionsApiGetSessionRequest {
    /**
     * Specifies the unique session ID (starts with ses_).
     * @type {string}
     * @memberof SessionsApiGetSession
     */
    readonly id: string

    /**
     * Specifies the fields to expand.
     * @type {Array<SessionResponseExpandable>}
     * @memberof SessionsApiGetSession
     */
    readonly expand?: Array<SessionResponseExpandable>
}

/**
 * Request parameters for revokeSession operation in SessionsApi.
 * @export
 * @interface SessionsApiRevokeSessionRequest
 */
export interface SessionsApiRevokeSessionRequest {
    /**
     * 
     * @type {RevokeSessionRequest}
     * @memberof SessionsApiRevokeSession
     */
    readonly revokeSessionRequest: RevokeSessionRequest
}

/**
 * Request parameters for signatureSession operation in SessionsApi.
 * @export
 * @interface SessionsApiSignatureSessionRequest
 */
export interface SessionsApiSignatureSessionRequest {
    /**
     * Specifies the unique session ID (starts with ses_).
     * @type {string}
     * @memberof SessionsApiSignatureSession
     */
    readonly id: string

    /**
     * 
     * @type {SignatureRequest}
     * @memberof SessionsApiSignatureSession
     */
    readonly signatureRequest: SignatureRequest
}

/**
 * SessionsApi - object-oriented interface
 * @export
 * @class SessionsApi
 * @extends {BaseAPI}
 */
export class SessionsApi extends BaseAPI {
    /**
     * Creates a Session.
     * @summary Create a session key.
     * @param {SessionsApiCreateSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    public createSession(requestParameters: SessionsApiCreateSessionRequest, options?: AxiosRequestConfig) {
        return SessionsApiFp(this.configuration).createSession(requestParameters.createSessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of Sessions.  Returns the latest 10 transaction intents for each session.
     * @summary List session keys of a player.
     * @param {SessionsApiGetPlayerSessionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    public getPlayerSessions(requestParameters: SessionsApiGetPlayerSessionsRequest, options?: AxiosRequestConfig) {
        return SessionsApiFp(this.configuration).getPlayerSessions(requestParameters.player, requestParameters.limit, requestParameters.skip, requestParameters.order, requestParameters.expand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves the details of a Session that has previously been created.  Returns the latest 10 transaction intents that used this session.
     * @summary Returns a player session by session id
     * @param {SessionsApiGetSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    public getSession(requestParameters: SessionsApiGetSessionRequest, options?: AxiosRequestConfig) {
        return SessionsApiFp(this.configuration).getSession(requestParameters.id, requestParameters.expand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Revoke the session session key.
     * @param {SessionsApiRevokeSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    public revokeSession(requestParameters: SessionsApiRevokeSessionRequest, options?: AxiosRequestConfig) {
        return SessionsApiFp(this.configuration).revokeSession(requestParameters.revokeSessionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Send signed userOperationHash to create session.
     * @param {SessionsApiSignatureSessionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionsApi
     */
    public signatureSession(requestParameters: SessionsApiSignatureSessionRequest, options?: AxiosRequestConfig) {
        return SessionsApiFp(this.configuration).signatureSession(requestParameters.id, requestParameters.signatureRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

