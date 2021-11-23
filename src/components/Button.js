import './Button.css';

const Button = ({ location, handleClick, storeId }) => {
    const displayLocation = location ? location : 'Sector-49';
    const storeTestId = storeId || 3;
    const updateStore = () => {
        handleClick(storeId);
    };
    return (
        <button
            data-testid={`button-element-${storeTestId}`}
            className="location-button"
            onClick={updateStore} >
            {displayLocation}
        </button>
    );
}
 
export default Button;