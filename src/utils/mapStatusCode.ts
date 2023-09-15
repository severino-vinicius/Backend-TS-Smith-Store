type Code = 'SUCCESS' | 'NOT_FOUND' | 'CREATED' | 'UNAUTHORIZED';

const statusCodeMap: Record<Code, number> = {
  SUCCESS: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
};

const mapStatusCode = (code: Code): number => statusCodeMap[code] || 500;

export default mapStatusCode;