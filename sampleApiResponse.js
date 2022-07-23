const res = {
  //   success is absolutly NECESSARY for frontend to know when store data, show error or do specific operation!
  success: true || false,

  //  message is optional can be usefull when we want to show a message or a notif to the user like: welcome or success state!
  message:
    'not necessary!! it will be used for messages to the user, like welcome message, or a notif for success state',

  // the main response of api must be in the same level with success or message(optional), so that the state of api and result of the api be available at all time,
  // for better developer experience it's recommended to send data relativly to the api name  coins;
  // for instance if the api is responsible for returning an array of coins, frontend must recive an array, named coins => coins=['bitcoin', ...]
  // for instance if the api is responsible for returning an array of buildings, frontend must recive an array, named buildings => coins=['Bamland', ...]
  // for instance if the api is responsible for returning token, frontend must recive a string, named token => token= 'asdasfkjgs23l4k2309tjfg'
  buildings: ['array of buildings'],
  token: 'token string',

  /* -------------------------------------------------------------------------- */
  /*                               error handeling                              */
  /* -------------------------------------------------------------------------- */

  /*                                status codes                                */

  //   error handeling has two ways, mostly the combinaition of both is being used by developers
  //   default browser error handeling, like 404, 5-- error messages which is handeld by the browser
  //   401 => unuthorized: when users token is expired, user credentials is not correct
  //   403 => access denied: when normal user tries to access a resource which needs higher rol, in this case user does not have the access to that resource
  //   400 => bad request: when frontend application send an incomplete or unacceptable request to backend server;
  //   400 example => for login we need username and password, if one of these data is incomplete therefore backend server must response with 400 status code
  //   400 example => for login we need password to be more than 6 chars, if not, data is unacceptable therefore backend server must response with 400 status code

  /* -------------------------------------------------------------------------- */
  /*                           custom error handeling                           */
  /* -------------------------------------------------------------------------- */

  // in case of error forntend will recive an object like:
  error: {
    errorCode: '',
    // errorCode can be a customized code between frontend and backend FOR SPECIAL SITUATIONS!! not all the time, the main focus for validity check and error handeling are success state and errorMessage
    errorMessage: '',
    // custom error message, it is much better to send a persian error message
  },
  // IMPORTANT: please note that error object will be used only and only if the SUCCESS is set to FALSE, null or undefined, otherwise the state of request will be considerd success!
}

/* -------------------------------------------------------------------------- */
/*                                 FINAL NOTE                                 */
/* -------------------------------------------------------------------------- */

// the main purpose of using such api responses is to have a fixed and complete convention, so we can build basic and important features of out app clean and easy to develop, debug and maintain
// and the way to do that is for all developers use the given structures in all the services and apies!
// good luck