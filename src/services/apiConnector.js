import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const isAbsoluteUrl = url.startsWith("http://") || url.startsWith("https://");
  const finalUrl = isAbsoluteUrl ? url : `${baseUrl}${url.startsWith("/") ? url : "/" + url}`;

  return axiosInstance({
    method,
    url: finalUrl,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  });
};
