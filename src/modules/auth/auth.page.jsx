import LoginForm from './components/auth.form';
import { Container, Typography } from '@mui/material';

export default function AuthPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <LoginForm />
    </Container>
  );
}
