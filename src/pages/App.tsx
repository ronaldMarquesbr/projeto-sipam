import { ReactNode } from "react";
import { SideBar } from "../components/SideBar";
import  { Outlet } from "react-router-dom"

interface props {
  children?: ReactNode
}

function App({ children } : props) {
  return (
    <div className="app-container">
      <SideBar /> 
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;