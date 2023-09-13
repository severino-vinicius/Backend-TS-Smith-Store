type Code = 'SUCCESS' | 'NOT_FOUND';

const statusCodeMap: Record<Code, number> = {
  SUCCESS: 201,
  NOT_FOUND: 404,
};

const mapStatusCode = (code: Code): number => statusCodeMap[code] || 500;

export default mapStatusCode;