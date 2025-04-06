import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../../application/layout/Layout";

import { HomeScreen } from "../../application/screens/home/HomeScreen";


export const AppNavigation = () => {
    return <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<HomeScreen />} />
        </Route>
    </Routes>
}