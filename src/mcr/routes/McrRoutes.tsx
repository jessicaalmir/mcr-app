import { Navigate, Route, Routes } from "react-router-dom";
import { McrPage } from "../pages/McrPage";
import { Home, Manage } from "../views";

export const McrRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<McrPage />}>
          <Route index element={<Home />} />
          <Route index element={<Manage />} />
        </Route>
        <Route path="/*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  )
}
