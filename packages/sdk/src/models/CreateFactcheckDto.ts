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
  FactcheckStatusEnum,
  FactcheckStatusEnumFromJSON,
  FactcheckStatusEnumFromJSONTyped,
  FactcheckStatusEnumToJSON,
} from './FactcheckStatusEnum';

/**
 *
 * @export
 * @interface CreateFactcheckDto
 */
export interface CreateFactcheckDto {
  /**
   *
   * @type {string}
   * @memberof CreateFactcheckDto
   */
  url: string;
  /**
   *
   * @type {FactcheckStatusEnum}
   * @memberof CreateFactcheckDto
   */
  status: FactcheckStatusEnum;
  /**
   *
   * @type {string}
   * @memberof CreateFactcheckDto
   */
  verifiedBy: string;
  /**
   *
   * @type {string}
   * @memberof CreateFactcheckDto
   */
  verificationSrc: string;
  /**
   *
   * @type {string}
   * @memberof CreateFactcheckDto
   */
  description: string;
}

export function CreateFactcheckDtoFromJSON(json: any): CreateFactcheckDto {
  return CreateFactcheckDtoFromJSONTyped(json, false);
}

export function CreateFactcheckDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFactcheckDto {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    url: json['url'],
    status: FactcheckStatusEnumFromJSON(json['status']),
    verifiedBy: json['verifiedBy'],
    verificationSrc: json['verificationSrc'],
    description: json['description'],
  };
}

export function CreateFactcheckDtoToJSON(value?: CreateFactcheckDto | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    url: value.url,
    status: FactcheckStatusEnumToJSON(value.status),
    verifiedBy: value.verifiedBy,
    verificationSrc: value.verificationSrc,
    description: value.description,
  };
}
