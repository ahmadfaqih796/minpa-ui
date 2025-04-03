import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../functions/auth.schema";
import { useLogin } from "../functions/auth.hook";
import { Button, TextField, Box } from "@mui/material";

export default function LoginForm() {
  const { mutate, isLoading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => console.log("Success:", res),
      onError: (err) => console.error("Error:", err),
    });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <TextField
        label="Email"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
      />
      <TextField
        label="Password"
        type="password"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </Button>
    </Box>
  );
}
