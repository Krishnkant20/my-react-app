import { Outlet } from "react-router-dom";
import TopHeader from "./components/TopHearder";
import TopMenu from "./components/TopMenu";
import Footer from "./pages/Footer";


const Layout=()=>{
    return(
        <>


<TopHeader />
<TopMenu />
<Outlet />
<Footer />



        </>
    )
}

export default Layout;