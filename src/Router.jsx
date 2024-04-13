import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Details from "./pages/Details.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';
import Loader from "./components/Loader.jsx";

const Router = ({fetchData}) => {
    const AppLayout = () => (
        <>
            <Header />
            { fetchData.isLoading ? (
                <Loader />
            ) : (
                <Outlet />
            )}
            <Footer />
        </>
    );


    const router = createBrowserRouter([
        {
        element: <AppLayout />,
        children: [

        {
            path: "/",
            element: <Home data={fetchData.data}/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/details/:lodgingId",
            element: <Details data={fetchData.data}/>,
        },
        {
            path: "*",
            element: <NotFound/>,
        },
        ]
    },
    ]);

    return (
        <RouterProvider router={router} />
    )
}

export default Router;

