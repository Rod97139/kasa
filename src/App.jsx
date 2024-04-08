import './styles/App.scss'
import {useFetch} from "./utils/hooks.js";
import Router from "./Router.jsx";

const App = () => {

    const fetchData = useFetch('http://localhost:5173/data/logements.json')

  return (
          <Router fetchData={fetchData} />
  )
}

export default App
