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

/**
 *
 * @export
 * @enum {string}
 */
export enum FactcheckStatusEnum {
  Truth = 'Truth',
  Fake = 'Fake',
  Warning = 'Warning',
  Unverifable = 'Unverifable',
}

export function FactcheckStatusEnumFromJSON(json: any): FactcheckStatusEnum {
  return FactcheckStatusEnumFromJSONTyped(json, false);
}

export function FactcheckStatusEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): FactcheckStatusEnum {
  return json as FactcheckStatusEnum;
}

export function FactcheckStatusEnumToJSON(value?: FactcheckStatusEnum | null): any {
  return value as any;
}
