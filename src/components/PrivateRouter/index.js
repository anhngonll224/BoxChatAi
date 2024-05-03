import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import STORAGE, { getStorage } from "../../lib/storage";
import ROUTER from "../../router";

function PrivateRoutes() {
    const isLogin = getStorage(STORAGE.TOKEN);

    return (
        <Outlet />
    )
    //     : (
    //     <Navigate to={ROUTER.LOGIN} />
    // );
}

export default PrivateRoutes;
