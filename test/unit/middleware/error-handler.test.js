import { errorHandler } from '../../../src/middlewares';
import httpMocks from 'node-mocks-http';

describe('error-handler test', () => {
  let req, res, next;

  beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();

    jest.clearAllMocks();
  });

  it('should return 500 error if doesnt receive status', () => {
    errorHandler(new Error(), req, res, next);
    expect(res.statusCode).toBe(500);
  });

  it('should return error if receive status', () => {
    const error = new Error();
    error.status = 400;

    errorHandler(error, req, res, next);
    expect(res.statusCode).toBe(400);
  });

  it('should return error message if receive message argument', () => {
    const error = new Error('Error');

    errorHandler(error, req, res, next);
    expect(res._getJSONData()).toBe('Error');
  });

  it('should return default error message if doesnt receive message argument', () => {
    const error = new Error();

    errorHandler(error, req, res, next);
    expect(res._getJSONData()).toBe('Something went wrong');
  });
});
