import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import { McrRoutes } from "../mcr/routes/McrRoutes"

export const AppRouter =() =>{
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />}/>
            <Route path="/*" element={<McrRoutes />}/>
        </Routes>
    )
}