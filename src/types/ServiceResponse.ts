export type ServiceResponseFailureType = 'NOT_FOUND' | 'UNAUTHORIZED';

type ServiceResponseSuccessType = 'SUCCESS' | 'CREATED';

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccessType, data: T,
};

export type ServiceResponseFailure = {
  status: ServiceResponseFailureType,
  data: { message: string }
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseFailure;