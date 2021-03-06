/* tslint:disable */
/* eslint-disable */
/**
 * Faktyczka API
 * Faktyczka API is an server side of Faktyczka extension.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import {
  CreateTicketDto,
  CreateTicketDtoFromJSON,
  CreateTicketDtoToJSON,
  DefaultResponseDto,
  DefaultResponseDtoFromJSON,
  DefaultResponseDtoToJSON,
  TicketCountDto,
  TicketCountDtoFromJSON,
  TicketCountDtoToJSON,
  TicketDto,
  TicketDtoFromJSON,
  TicketDtoToJSON,
  TicketListDto,
  TicketListDtoFromJSON,
  TicketListDtoToJSON,
  ValidationErrorDto,
  ValidationErrorDtoFromJSON,
  ValidationErrorDtoToJSON,
} from '../models';

export interface TicketsApiCountTicketsByUrlRequest {
  url: string;
}

export interface TicketsApiCreateRequest {
  createTicketDto: CreateTicketDto;
}

export interface TicketsApiFindByIdRequest {
  id: string;
}

export interface TicketsApiListTicketsByUrlRequest {
  url: string;
  page?: number;
  limit?: number;
}

/**
 *
 */
export class TicketsApi extends runtime.BaseAPI {
  /**
   * Retrive number of tickets for specific url
   */
  async countTicketsByUrlRaw(
    requestParameters: TicketsApiCountTicketsByUrlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TicketCountDto>> {
    if (requestParameters.url === null || requestParameters.url === undefined) {
      throw new runtime.RequiredError(
        'url',
        'Required parameter requestParameters.url was null or undefined when calling countTicketsByUrl.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/tickets/count/{url}`.replace(`{${'url'}}`, encodeURIComponent(String(requestParameters.url))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TicketCountDtoFromJSON(jsonValue));
  }

  /**
   * Retrive number of tickets for specific url
   */
  async countTicketsByUrl(
    requestParameters: TicketsApiCountTicketsByUrlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TicketCountDto> {
    const response = await this.countTicketsByUrlRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Create a new ticket.
   */
  async createRaw(
    requestParameters: TicketsApiCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.createTicketDto === null || requestParameters.createTicketDto === undefined) {
      throw new runtime.RequiredError(
        'createTicketDto',
        'Required parameter requestParameters.createTicketDto was null or undefined when calling create.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/api/tickets`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: CreateTicketDtoToJSON(requestParameters.createTicketDto),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Create a new ticket.
   */
  async create(
    requestParameters: TicketsApiCreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.createRaw(requestParameters, initOverrides);
  }

  /**
   * Retrieve a ticket by id.
   */
  async findByIdRaw(
    requestParameters: TicketsApiFindByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TicketDto>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling findById.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/tickets/{id}`.replace(`{${'id'}}`, encodeURIComponent(String(requestParameters.id))),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TicketDtoFromJSON(jsonValue));
  }

  /**
   * Retrieve a ticket by id.
   */
  async findById(
    requestParameters: TicketsApiFindByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TicketDto> {
    const response = await this.findByIdRaw(requestParameters, initOverrides);
    return await response.value();
  }

  /**
   * Retrieve a list of tickets.
   */
  async listTicketsByUrlRaw(
    requestParameters: TicketsApiListTicketsByUrlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TicketListDto>> {
    if (requestParameters.url === null || requestParameters.url === undefined) {
      throw new runtime.RequiredError(
        'url',
        'Required parameter requestParameters.url was null or undefined when calling listTicketsByUrl.',
      );
    }

    const queryParameters: any = {};

    if (requestParameters.url !== undefined) {
      queryParameters['url'] = requestParameters.url;
    }

    if (requestParameters.page !== undefined) {
      queryParameters['page'] = requestParameters.page;
    }

    if (requestParameters.limit !== undefined) {
      queryParameters['limit'] = requestParameters.limit;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/api/tickets`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TicketListDtoFromJSON(jsonValue));
  }

  /**
   * Retrieve a list of tickets.
   */
  async listTicketsByUrl(
    requestParameters: TicketsApiListTicketsByUrlRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TicketListDto> {
    const response = await this.listTicketsByUrlRaw(requestParameters, initOverrides);
    return await response.value();
  }
}
