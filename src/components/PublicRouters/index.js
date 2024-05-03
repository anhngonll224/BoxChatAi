import { useEffect } from "react"
import { Outlet, useNavigate, Navigate } from "react-router-dom"
import ROUTER from "../../router"
import { PublicRoutesStyle } from "./styled"
import STORAGE, { clearStorage, getStorage } from '../../lib/storage';

function PublicRoutes() {
  const isLogin = getStorage(STORAGE.TOKEN)
  const navigate = useNavigate()
  useEffect(() => {
    getStorage(STORAGE.TOKEN)
  }, [])
  return (
    <PublicRoutesStyle>

      {/* {!!isLogin &&
        <AppHeader />
      } */}
      {/* {!!isLogin ?
        <Navigate to={ROUTER.OVERVIEW} />
        :
        <Outlet />

      } */}
      <Outlet />
    </PublicRoutesStyle >
  )
}

export default PublicRoutes
