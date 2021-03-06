/**
 * Class representing an API Error
 *
 * @extends Error
 */
class ApiError extends Error {
  /**
   * Creates an API Error
   *
   * @param {Object} error - A manually created error object usually passed from a controller
   * @param {String} error.name - The name of the error
   * @param {String} error.message - The error message
   * @param {Number} error.statusCode - The error status code
   * @param {Array} error.errors - The errors to be returned in the JSON response
   */
  constructor({ name, message, statusCode, errors }) {
    super();

    Error.captureStackTrace(this, ApiError);

    this.name = name;
    this.message = message;
    this.statusCode = statusCode;
    this.jsonResponse = errors;
  }
}

export default ApiError;
