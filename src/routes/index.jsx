import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Admin from '../pages/admin';


function MainRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={< Home/>} /> */}
      <Route path="/" element={< Admin/>} />

    </Routes>
  )
}

export default MainRoutes;
