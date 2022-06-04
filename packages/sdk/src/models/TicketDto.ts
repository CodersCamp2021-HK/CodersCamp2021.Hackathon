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

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface TicketDto
 */
export interface TicketDto {
  /**
   * RFC 3886 standard url format
   * @type {string}
   * @memberof TicketDto
   */
  url: string;
  /**
   *
   * @type {string}
   * @memberof TicketDto
   */
  name: string;
  /**
   * RFC 5322 standard email format
   * @type {string}
   * @memberof TicketDto
   */
  email: string;
  /**
   *
   * @type {string}
   * @memberof TicketDto
   */
  description: string;
}

export function TicketDtoFromJSON(json: any): TicketDto {
  return TicketDtoFromJSONTyped(json, false);
}

export function TicketDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    name: json['name'],
    email: json['email'],
    description: json['description'],
  };
}

export function TicketDtoToJSON(value?: TicketDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    name: value.name,
    email: value.email,
    description: value.description,
  };
}