import Button from "../components/Button";
import Header from "../components/Header";
import Map from "../components/Map";
import { useState, useEffect } from 'react';
import axios from "axios";

const StoreLocator = () => {
    const [stores, setStores] = useState([])

    useEffect(() => {
        const getStoreData = async () => {
            try {
                const { data: { stores = [] } } = await axios.get('store.json');
                setStores(stores);
            } catch (getStoreError){
                // ToDo: log error to console etc
            }
        }
      getStoreData();
    }, [])

    const [state, setState] = useState({
        currentMap: 'default-map.png',
        location: 'All locations'
    });

    const changeInLocation = storeId => {
        const changedStore = stores.find(store => store.id === storeId);
        const update = Object.assign({
            currentMap: changedStore.imgName,
            location: changedStore.location
        })
        setState(update);
    };

    const storeButtons = stores.map((store, id) => {
        return (<Button location={store.location} key={id} storeId={store.id} handleClick={changeInLocation} />);
    });

    return (
        <div data-testid="store-locator-element" >
            <Header />
            <div>
               {storeButtons}
            </div>
            <Map imageName={state.currentMap} location={state.location} />
        </div>
    );
}
 
export default StoreLocator;