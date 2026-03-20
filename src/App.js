import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ApiUrlChecker from "./features/Api-url-checker";
import "./styles.css";


const queryClient = new QueryClient();
function App() {
  return (
  
  <QueryClientProvider client={queryClient}>
    <ApiUrlChecker/>
  </QueryClientProvider>
  );
}

export default App;
