import './styles/App.scss'
import {useFetch} from "./utils/hooks.js";
import Router from "./Router.jsx";

const App = () => (<Router fetchData={useFetch(`${window.location.origin}/data/logements.json`)}/>)

export default App
