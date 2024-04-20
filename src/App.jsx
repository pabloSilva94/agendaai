import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";
// import { AuthProvider } from "./context/AuthContext";
import { ScrollProvider } from "./context/scrollContext";

function App() {
  return (
    <BrowserRouter>
      <ScrollProvider>
        <MainRoutes />
      </ScrollProvider>
    </BrowserRouter>
  );
}

export default App;
