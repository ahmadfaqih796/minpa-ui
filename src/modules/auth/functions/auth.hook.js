import { useMutation } from "react-query";
import AuthService from "./auth.service";

const service = new AuthService();

export const useLogin = () => {
  return useMutation(service.login);
};

// export const useRegister = () => {
//   return useMutation(register);
// };
