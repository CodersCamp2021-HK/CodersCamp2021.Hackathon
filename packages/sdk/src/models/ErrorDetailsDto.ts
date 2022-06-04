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
 * @interface ErrorDetailsDto
 */
export interface ErrorDetailsDto {
  /**
   *
   * @type {string}
   * @memberof ErrorDetailsDto
   */
  path: string;
  /**
   *
   * @type {string}
   * @memberof ErrorDetailsDto
   */
  message: string;
  /**
   *
   * @type {string}
   * @memberof ErrorDetailsDto
   */
  errorCode: string;
}

export function ErrorDetailsDtoFromJSON(json: any): ErrorDetailsDto {
  return ErrorDetailsDtoFromJSONTyped(json, false);
}

export function ErrorDetailsDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetailsDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    path: json['path'],
    message: json['message'],
    errorCode: json['errorCode'],
  };
}

export function ErrorDetailsDtoToJSON(value?: ErrorDetailsDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    path: value.path,
    message: value.message,
    errorCode: value.errorCode,
  };
}
