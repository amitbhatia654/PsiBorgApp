import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import DashBoard from "./components/DashBoard";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Index />}>
          <Route index element={<DashBoard />}></Route>
          {/* <Route path="users" element={<UserDetails />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
