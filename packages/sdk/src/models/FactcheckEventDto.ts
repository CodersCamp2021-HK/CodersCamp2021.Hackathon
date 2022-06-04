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
import {
  FactcheckDataDto,
  FactcheckDataDtoFromJSON,
  FactcheckDataDtoFromJSONTyped,
  FactcheckDataDtoToJSON,
} from './FactcheckDataDto';

/**
 *
 * @export
 * @interface FactcheckEventDto
 */
export interface FactcheckEventDto {
  /**
   *
   * @type {FactcheckDataDto}
   * @memberof FactcheckEventDto
   */
  data: FactcheckDataDto;
  /**
   *
   * @type {string}
   * @memberof FactcheckEventDto
   */
  type: FactcheckEventDtoTypeEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum FactcheckEventDtoTypeEnum {
  Factcheck = 'factcheck',
}

export function FactcheckEventDtoFromJSON(json: any): FactcheckEventDto {
  return FactcheckEventDtoFromJSONTyped(json, false);
}

export function FactcheckEventDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FactcheckEventDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    data: FactcheckDataDtoFromJSON(json['data']),
    type: json['type'],
  };
}

export function FactcheckEventDtoToJSON(value?: FactcheckEventDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data: FactcheckDataDtoToJSON(value.data),
    type: value.type,
  };
}