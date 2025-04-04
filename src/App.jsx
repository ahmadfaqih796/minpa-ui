import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import AppRoute from "./routes/appRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoute />
    </QueryClientProvider>
  );
}

export default App;
