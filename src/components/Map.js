import './Map.css';

const Map = ({imageName, location}) => {
    return (
        <div data-testid="map-element" className="map-container">
            <img src={imageName ? imageName : 'default-map.png'} alt={location} data-testid="map-image" ></img>
        </div>
    );
}
 
export default Map;