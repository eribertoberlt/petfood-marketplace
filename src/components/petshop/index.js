import { useDispatch, useSelector } from 'react-redux';
import { setShopMapSelected, setMapCenter } from '../../store/modules/shop/actions';
import './styles.css';

const Petshop = ({ petshop }) => {
    const dispatch = useDispatch();
    const { petshopMapSelected } = useSelector((state) => state.shop);

    const setSelectedPetshop = () => {
        // setar a petshop selecionada
        // setar o centro do mapa
        dispatch(setShopMapSelected(petshop._id));
        dispatch(setMapCenter(petshop.location));
    }
    
    return(
        <li 
            className={`petshop d-inline-block ${petshopMapSelected === petshop._id ? 'active': ''}`}
            onClick={() => setSelectedPetshop()}    
        >
            <div className="d-inline-block">
                <img 
                    src={petshop.logo}
                    className="img-fluid"
                    alt={`Imagem de ${petshop.nome}`}
                />
            </div>
            <div className="d-inline-block ps-3 align-top">
                <b>{petshop.nome}</b>
                <div className="petshop-infos">
                    <span className="mdi mdi-star"></span>
                    <text>
                        <b>2,8</b>
                    </text>
                    <span className="mdi mdi-cash-usd-outline"></span>
                    <text>
                        {petshop.categoria}
                    </text>
                    <span className="mdi mdi-crosshairs-gps"></span>
                    <text>
                        2,9km
                    </text>
                </div>
                <label className="badge bg-primary">Frete Grátis</label>
            </div>
        </li>
    );
}
export default Petshop;