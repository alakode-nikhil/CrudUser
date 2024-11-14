import CreateUser from "./components/CreateUser";
import ListUsers from "./components/ListUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewuser from "./components/Viewuser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ListUsers />} />
          <Route path="create/" element={<CreateUser />} />
          <Route path = "view/:id" element={<Viewuser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
