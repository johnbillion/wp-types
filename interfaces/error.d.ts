/**
 * WordPress Error class.
 *
 * Container for checking for WordPress errors and error messages. Many
 * core WordPress functions pass this class in the event of an error.
 *
 * @see WP_Error_With_Error for the most common shape of an error object.
 */
export interface WP_Error {

  /**
   * Stores the list of errors.
   */
  errors: [] | WP_Error_Messages;

  /**
   * Stores the list of data for error codes.
   */
  error_data: [] | WP_Error_Data;

}

/**
 * WordPress Error class.
 *
 * Represents a WP_Error object that contains at least one error.
 */
export interface WP_Error_With_Error extends WP_Error {

  errors: WP_Error_Messages;

  error_data: WP_Error_Data;

}

/**
 * Empty WordPress Error class.
 *
 * Represents a WP_Error object that contains no errors.
 */
export interface WP_Error_Without_Error extends WP_Error {

  errors: [];

  error_data: [];

}

/**
 * The messages for the errors contained within the error object.
 *
 * Each error is represented by a property keyed by the error code, and containing an array of message strings for that
 * code. Any given error code usually contains only one message, but can contain more.
 */
export interface WP_Error_Messages {
  [code: string]: string[];
}

/**
 * The data for the errors contained within the error object.
 *
 * Each error is represented by a property keyed by the error code, and containing error data for that code. Any given
 * error code can contain only one piece of error data, but the data can be of any type.
 */
export interface WP_Error_Data {
  [code: string]: any;
}
