import '../styles/components/DropDown.scss';

const DropDown = ({ title, content }) => {


    return (
        <details>
            <summary>{title}</summary>
            <div>
                <p>
                {Array.isArray(content) ? content.map((item, index) => <span key={index}>{item}</span>) : <span>{content}</span>}
                </p>
            </div>
        </details>
    )
}

export default DropDown;