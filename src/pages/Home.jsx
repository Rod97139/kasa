import { Link } from "react-router-dom";
// import {useFetch} from "../utils/hooks.js";
// import {useEffect, useState} from "react";
// import axios from "axios";

const Home = (data) => {


    data.data.data && console.log(2, data.data.data)


    return (
        <div>
            <h1>Home</h1>
            <Link to='/about'>About</Link>
            <div>
                {data.data.data && (data.data.data).map((logement, index) => {
                    return (
                        <div key={index}>
                           <h2>{logement.title}</h2>
                            <p>{logement.description}</p>
                            <p>{logement.price}</p>
                        </div>
                    )
                })}
            </div>
            <p>Welcome to the Home page</p>
        </div>
    )
}

export default Home;