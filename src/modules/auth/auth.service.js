import instance from "../../api/httpClient";
export const login = (data) =>
  instance.post("/authentication", {
    ...data,
    strategy: "local",
  });
export const register = (data) => instance.post("/auth/register", data);
