import "./App.css";
import { PageLayout } from "./components/infrastructure/PageLayout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PageLayout />
    </BrowserRouter>
  );
}

export default App;
