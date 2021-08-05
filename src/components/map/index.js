import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import Marker from '../../components/marker';

const Map = ({ petshops }) => {

    const { mapCenter } = useSelector(state => state.shop);

    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBbZsgd-aNvASusi2rO0F71D1hiqbDGGio' }}
                center={mapCenter}
                defaultZoom={15}
            >
                {petshops.map((p) => ( 
                    <Marker petshop={p} lat={p.location.lat} lng={p.location.lng} />
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;