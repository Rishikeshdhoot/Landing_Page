import { Method } from "./apiMethods";

const url = "https://fornaxbackend.onrender.com/api/v1/";
let header1 = {
  "Content-Type": "multipart/form-data",
  Accept: "application/json",
};

let header2 = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const applyServiceApi = (data) =>
  Method.POST(`/bookService`, data, header2);
export const applyContactUsApi = (data) =>
  Method.POST(`/contactUs`, data, header2);
// export const forgotPasswordApi = (data) =>
//   Method.POST("user/forgot", data, header2);
// export const loginApi = (data) => Method.POST("user/login", data, header2);

// //Settings APIs
// export const logoutApi = () => Method.POST(`user/logout`, header2);

//
// export const rideStartApi = (data) => Method.POST(`ride/start`, data, header2);
// export const rideDetailsApi = () => Method.GET(`ride/details`, header1);
// export const rideStopApi = (data) => Method.GET(`ride/stop/${data}`, header1);
// export const rideEndApi = (data) => Method.POST("ride/end", data, header2);
