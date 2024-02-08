import axios from "axios";

export const api = axios.create({
  baseURL: "https://www.freetogame.com/api",
  timeout: 10000,
  headers: {
    accept: "application/json",
  },
});

// api.interceptors.request.use((request) => {
//   console.log("Starting Request", request);
//   return request;
// });

// api.interceptors.response.use(
//   (response) => {
//     console.log("Response:", response.data);
//     return response;
//   },
//   (error) => {
//     console.error("Error Response:", error);
//     return Promise.reject(error);
//   }
// );
