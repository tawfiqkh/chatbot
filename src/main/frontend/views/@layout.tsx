import {NavLink, Outlet} from "react-router-dom";

const Layout = ()=>(
    <div className="p-m">
        <nav>
            <NavLink className="btn btn-outline-info m-1" to={"/"}>Home</NavLink>
            <NavLink className="btn btn-outline-info m-1" to={"/chat"}>Chat</NavLink>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
)

export default Layout