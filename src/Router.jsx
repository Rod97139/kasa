import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Details from "./pages/Details.jsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Router = ({ fetchData }) => {

    const AppLayout = () => (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );


    const router = createBrowserRouter([
        {
        element: <AppLayout />,
        children: [

        {
            path: "/",
            // eslint-disable-next-line react/prop-types
            element: <Home data={fetchData.data}/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/details/:lodgingId",
            element: <Details/>,
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

