import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getById, getProductDetailById} from "../../redux/services/productService";
import {useNavigate, useParams} from "react-router-dom";

function ProductDetail() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    const productDetail = useSelector(({products}) => {
        return products.productDetail;
    })
    useEffect(() => {
        dispatch(getProductDetailById(id))
    }, []);

    const back = () => {
       navigate("/products/home")
    }

    return(
        <>
            <h1>Chi tiết sản phẩm</h1>
            <div className="card" style={{marginRight: productDetail  + 'em'}}>
                <div className="card-body">
                    <h5 className="card-title">Tên sản phẩm: {productDetail.title}</h5>
                    <p className="card-text">Mô tả: {productDetail.description}</p>
                    <p>Giá: {productDetail.price}</p>
                    <button onClick={back}>Trở lại</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;