import {useParams} from "react-router-dom";

const Details = (props) => {
    const {lodgingId} = useParams();
    const data = props.data && props.data.find(lodging => lodging.id === lodgingId)
    console.log(123, data)

    return (
        <div>
        <h1>Details for {data.title}
        </h1>
        </div>
    );
}

export default Details;