import CreateUser from "./components/CreateUser";
import ListUsers from "./components/ListUsers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewuser from "./components/Viewuser";
import Edituser from "./components/Edituser";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<ListUsers />} />
          <Route path="create/" element={<CreateUser />} />
          <Route path = "view/:id" element={<Viewuser />} />
          <Route path="edit/:id" element={<Edituser />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
