type WarningDto = {
  readonly url: string;
  readonly status: 'Warning';
  readonly count: number;
};

function isWarning(value: any): value is WarningDto {
  return value && value.url && value.count && value.status === 'Warning';
}

export type { WarningDto };
export { isWarning };
