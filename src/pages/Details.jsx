import {useParams} from "react-router-dom";

const Details = () => {
    const {lodgingId} = useParams()
    console.log(lodgingId)
    return (
        <div>
        <h1>Details for {lodgingId}
        </h1>
        </div>
    );
}

export default Details;