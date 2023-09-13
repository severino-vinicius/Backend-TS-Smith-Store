export type ServiceResponseFailureType = 'NOT_FOUND';

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESS', data: T,
};

export type ServiceResponseFailure = {
  status: ServiceResponseFailureType,
  data: { message: string }
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseFailure;