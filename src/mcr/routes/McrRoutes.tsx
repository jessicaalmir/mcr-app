import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import React from "react"

export const McrRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  )
}
