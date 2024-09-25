import '../styles/components/DropDownV2.scss';

const DropDownV2 = ({ title, content }) => {


    return (
        <div className='dropdown-container'>
            <button className='dropdown-button'
            onClick={(e) => {
                const dropdownContainer = e.target.parentElement;
                dropdownContainer.classList.toggle('open');

            }}
            
            >{title}</button>
            <div className='dropdown-content'>
                <p className='dropdown-content-child'>
                {Array.isArray(content) ? content.map((item, index) => <span key={index}>{item}</span>) : <span>{content}</span>}
                </p>
            </div>
        </div>
    )
}

export default DropDownV2;