import axios from "axios";

export const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const pitch = async (reqFn: () => Promise<unknown>) => {
  return reqFn().catch((err) => {
    console.log("Error:", err?.response?.data?.message || err.message);
    return null;
  });
};
