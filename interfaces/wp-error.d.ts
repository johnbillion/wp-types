/**
 * WordPress Error class.
 *
 * Container for checking for WordPress errors and error messages. Many
 * core WordPress functions pass this class in the event of an error.
 */
export interface WP_Error {

  /**
   * Stores the list of errors.
   */
  errors: any;

  /**
   * Stores the list of data for error codes.
   */
  error_data: any;

}
