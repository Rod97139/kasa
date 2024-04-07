import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import {useFetch} from "./utils/hooks.js";

const App = () => {

    const fetchedData = useFetch('http://localhost:5173/logements.json')
    fetchedData.data && console.log(1, fetchedData.data)

    // console.log(2, logements)
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home data={fetchedData}/>,
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "*",
            element: <NotFound/>,
        },
    ]);

  return (
      <RouterProvider router={router} />
  )
}

export default App
