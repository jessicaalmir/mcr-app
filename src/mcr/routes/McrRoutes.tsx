import { Navigate, Route, Routes } from "react-router-dom";
import { McrPage } from "../layout/McrPage";
import { Home, Manage, Report } from "../views";

export const McrRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<McrPage />}>
          <Route index element={<Home />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/report" element={<Report />} />
        </Route>
        <Route path="/*" element={<Navigate to={"/"} />}></Route>
        
    </Routes>
  )
}
