import axios from "axios";

axios.defaults.baseURL = "https://fornaxbackend.onrender.com/api/v1/";

// Enable CORS with the appropriate headers
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Access-Control-Allow-Headers"] =
//   "Origin, X-Requested-With, Content-Type, Accept";

const StatusCodes = {
  Success: 1,
  Failure: 0,
  Unauthenticate: 2,
};

export const Method = {
  POST(url, body) {
    // console.log(url, " URL", header, " Header");
    console.log(body);
    // console.log("BODY");
    return axios
      .post(url, body)
      .then(async (data) => {
        if (data) {
          if (data.status >= 200 && data.status < 400) {
            return {
              status: StatusCodes.Success,
              result: data.data,
            };
          } else {
            return {
              result: { msg: data.data.message },
              status: StatusCodes.Failure,
            };
          }
        } else {
          return {
            result: { msg: "Something went wrong." },
            status: StatusCodes.Failure,
          };
        }
      })
      .catch(async (error) => {
        // console.log("ERROR");
        // console.log(JSON.stringify(error));
        // console.log("ERROR");
        if (
          error.response.status == 403 ||
          error.response.status == 401 ||
          error?.status === 401
        ) {
          return {
            result: { msg: error.response.data.message },
            status: StatusCodes.Unauthenticate,
          };
        } else if (!error.response) {
          return {
            result: { msg: "Timeout : server issue" },
            status: StatusCodes.Failure,
          };
        } else if (
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.message
        ) {
          return {
            result: { msg: error.response.data.error.message },
            status: StatusCodes.Failure,
          };
        } else {
          return {
            result: { msg: error.response.data.message },
            status: StatusCodes.Failure,
          };
        }
      });
  },
  // PUT(url, body, header) {
  //   return axios
  //     .put(url, body, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Accept: "application/json",
  //       },
  //     })
  //     .then(async (data) => {
  //       if (data) {
  //         if (data.status >= 200 && data.status < 400) {
  //           return {
  //             status: StatusCodes.Success,
  //             result: data.data,
  //           };
  //         } else {
  //           return {
  //             result: { msg: data.data.message },
  //             status: StatusCodes.Failure,
  //           };
  //         }
  //       } else {
  //         return {
  //           result: { msg: "Something went wrong." },
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     })
  //     .catch(async (error) => {
  //       if (error.response.status == 403 || error.response.status == 401) {
  //         return {
  //           result: { msg: error.response.data.message },
  //           status: StatusCodes.Unauthenticate,
  //         };
  //       } else if (!error.response) {
  //         return {
  //           result: { msg: "Timeout : server issue" },
  //           status: StatusCodes.Failure,
  //         };
  //       } else if (
  //         error.response.data &&
  //         error.response.data.error &&
  //         error.response.data.error.message
  //       ) {
  //         return {
  //           result: { msg: error.response.data.error.message }, // error.response.data.message
  //           status: StatusCodes.Failure,
  //         };
  //       } else {
  //         return {
  //           result: { msg: error.response.data.message }, // error.response.data.message
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     });
  // },
  // DELETE(url) {
  //   return axios
  //     .delete(url)
  //     .then(async (data) => {
  //       if (data) {
  //         if (data.status >= 200 && data.status < 400) {
  //           return {
  //             status: StatusCodes.Success,
  //             result: data.data,
  //           };
  //         } else {
  //           return {
  //             result: { msg: data.data.message },
  //             status: StatusCodes.Failure,
  //           };
  //         }
  //       } else {
  //         return {
  //           result: { msg: "Something went wrong." },
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     })
  //     .catch(async (error) => {
  //       if (error.response.status == 403 || error.response.status == 401) {
  //         return {
  //           result: { msg: error.response.data.message },
  //           status: StatusCodes.Unauthenticate,
  //         };
  //       } else if (!error.response) {
  //         return {
  //           result: { msg: "Timeout : server issue" },
  //           status: StatusCodes.Failure,
  //         };
  //       } else if (
  //         error.response.data &&
  //         error.response.data.error &&
  //         error.response.data.error.message
  //       ) {
  //         return {
  //           result: { msg: error.response.data.error.message }, // error.response.data.message
  //           status: StatusCodes.Failure,
  //         };
  //       } else {
  //         return {
  //           result: { msg: error.response.data.message }, // error.response.data.message
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     });
  // },
  // GET(url, header) {
  //   // console.log("::::: " + url + " ::::::");
  //   return axios
  //     .get(url, {
  //       headers: header,
  //     })
  //     .then(async (data) => {
  //       if (data.data == null) {
  //       }
  //       if (data) {
  //         if (data.status >= 200 && data.status < 400) {
  //           return {
  //             status: StatusCodes.Success,
  //             result: data.data,
  //           };
  //         } else {
  //           return {
  //             result: { msg: data.data.message },
  //             status: StatusCodes.Failure,
  //           };
  //         }
  //       } else {
  //         return {
  //           result: { msg: "Something went wrong." },
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     })
  //     .catch(async (error) => {
  //       if (error.response.status == 403 || error.response.status == 401) {
  //         return {
  //           result: { msg: error.response.data.message },
  //           status: StatusCodes.Unauthenticate,
  //         };
  //       } else if (!error.response) {
  //         return {
  //           result: { msg: "Timeout : server issue" },
  //           status: StatusCodes.Failure,
  //         };
  //       } else {
  //         return {
  //           result: { msg: error.response.data.message },
  //           status: StatusCodes.Failure,
  //         };
  //       }
  //     });
  // },
};
