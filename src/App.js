import CreateUser from "./components/CreateUser";
import ListUsers from "./components/ListUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ListUsers />} />
          <Route path="create/" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
