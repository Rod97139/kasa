import '../styles/components/DropDown.scss';

const DropDown = ({ title, content }) => {


    return (
        <details>
            <summary>{title}</summary>
            <div>
                {Array.isArray(content) ? content.map((item, index) => <p key={index}>{item}</p>) : <p>{content}</p>}
            </div>
        </details>
    )
}

export default DropDown;