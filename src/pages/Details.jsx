import {useParams} from "react-router-dom";

const Details = (props) => {
    const {lodgingId} = useParams();
    const data = props.data.find(lodging => lodging.id === lodgingId);

    return (
        <div>
        <h1>Details for {data.title}
        </h1>
        </div>
    );
}

export default Details;