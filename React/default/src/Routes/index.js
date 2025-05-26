import React from 'react';
import { Routes, Route } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";

//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected } from './AuthProtected';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                {publicRoutes.map((route, idx) => (
                    <Route
                    key={idx}
                    path={route.path}
                    element={
                        <NonAuthLayout>
                        {route.component}
                        </NonAuthLayout>
                    }
                    />
                ))}

                {authProtectedRoutes.map((route, idx) => (
                    <Route
                    key={idx}
                    path={route.path}
                    element={
                        <AuthProtected>
                        <VerticalLayout>{route.component}</VerticalLayout>
                        </AuthProtected>
                    }
                    />
                ))}
                </Routes>

        </React.Fragment>
    );
};


export default Index;