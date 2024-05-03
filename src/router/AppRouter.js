import React from "react"
import { HashRouter, useRoutes } from "react-router-dom"
import ROUTER from "./index"
import PrivateRoutes from "../components/PrivateRouter"

const HomeChat = React.lazy(() => import("../Page/HomeChat"))
const BoxChat = React.lazy(() => import("../Page/BoxChat"))


const PublicRoutes = React.lazy(() => import("../components/PublicRouters"))

function LazyLoadingComponent({ children }) {
  return (
    <React.Suspense
      fallback={
        <div className="loading-center" style={{ height: "100vh" }}>
          {/* <Spin /> */}
        </div>
      }
    >
      {children}
    </React.Suspense>
  )
}

const routes = [

  //Đăng nhập
  {
    element: (
      <LazyLoadingComponent>
        <PrivateRoutes />
      </LazyLoadingComponent>
    ),
    children: [

    ],
  },
  //End đăng nhập

  // ADMIN
  {
    element: (
      <LazyLoadingComponent>
        <PublicRoutes />
      </LazyLoadingComponent>
    ),
    children: [
      {
        path: ROUTER.HOME,
        element: (
          <LazyLoadingComponent>
            <BoxChat />
          </LazyLoadingComponent>
        ),
      },



    ],
  },
  {
    path: "*",
    element: (
      <LazyLoadingComponent>
        <BoxChat />
      </LazyLoadingComponent>
    ),
  },

]
const AppRouter = () => {
  const renderRouter = useRoutes(routes)
  return renderRouter
}
export default AppRouter
