import { useMutation } from 'react-query';
import { login, register } from './auth.service';

export const useLogin = () => {
  return useMutation(login);
};

export const useRegister = () => {
  return useMutation(register);
};
