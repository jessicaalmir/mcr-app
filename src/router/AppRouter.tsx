import { Route, Routes } from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import { McrRoutes } from "../mcr/routes/McrRoutes"

export const AppRouter =() =>{
    return (
        <Routes>
            {/*Login and Auth*/}
            <Route path="/auth/*" element={<AuthRoutes />}/>
            {/*MCR App*/}
            <Route path="/*" element={<McrRoutes />}/>
            <Route/>
        </Routes>
    )
}