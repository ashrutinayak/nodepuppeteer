import httpStatusConstant from '../constants/httpStatus.constant'

/**
 * brinks error handler function
 *
 * @function errorBrinksService
 * @param {any} error
 */
const brinksErrorHandler = (error: any): object => {
  if (error.response.status === httpStatusConstant.UNAUTHORIZED) {
    return {
      status: error.response.status,
      message: error.response.data.error_description
    }
  }
  if (error.response.status === httpStatusConstant.BAD_REQUEST) {
    return {
      status: error.response.status,
      message: error.response.data.error_description
    }
  }
  return {
    status: httpStatusConstant.INTERNAL_SERVER_ERROR,
    message: error.response.data.error_description
  }
}

/**
 * brinks success handler function
 */
const brinksSuccessHandler = (error: any): object => {
  if (error.response.status === httpStatusConstant.UNAUTHORIZED) {
    return {
      status: error.response.status,
      message: error.response.data.error_description
    }
  }
  if (error.response.status === httpStatusConstant.BAD_REQUEST) {
    return {
      status: error.response.status,
      message: error.response.data.error_description
    }
  }
  return {
    status: httpStatusConstant.INTERNAL_SERVER_ERROR,
    message: error.response.data.error_description
  }
}

/**
 * pos error handler function
 *
 * @function errorPOsService
 * @param {any} error
 */
const posErrorHandler = (error: any): object => {
  if (
    error.response.status === httpStatusConstant.UNAUTHORIZED ||
    error.response.status === httpStatusConstant.BAD_REQUEST
  ) {
    return {
      status: error.response.status,
      message: error?.response?.data?.message
    }
  }
  return {
    status: httpStatusConstant.INTERNAL_SERVER_ERROR,
    message: error?.response?.data?.message
  }
}

export default {
  brinksErrorHandler,
  posErrorHandler,
  brinksSuccessHandler
}
