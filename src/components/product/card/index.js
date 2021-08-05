import { useDispatch, useSelector } from 'react-redux';
import { toggleCartProduct } from '../../../store/modules/shop/actions';

import './styles.css';

const Product = ({ product }) => {

    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.shop);
    const added = cart.findIndex((p) => p?._id === product._id) !== -1;

    return(
        <div className="product col-3">
            <img src={product.capa} 
                 className="img-fluid"
                 alt={product.nome}
            />
            <button onClick={() => dispatch(toggleCartProduct(product))} className={`btn bg-${added ? 'secondary' : 'primary'} rounded-circle`}>
                {added ? '-' : '+'}
            </button>
            <h4>
                <label className="badge bg-primary">R$ {product.preco.toFixed(2)}</label>
                <small>{product.nome}</small>
            </h4>
        </div>
    );
}

export default Product;