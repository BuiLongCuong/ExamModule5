import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAll, remove} from "../../redux/services/productService";
import {Link} from "react-router-dom";

function ListProduct(){
    const dispatch = useDispatch();
    const listProduct = useSelector(({products}) => {
        return products.list;
    })

    useEffect(() => {
        dispatch(getAll())
    }, []);

    const kickOut = (id) => {
        let check = window.confirm("Bạn chắc chắn xóa chứ?");
        if(check) {
            dispatch(remove(id))
        }
    }
    return (
        <>
        <table border={1}>
            <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                listProduct.map((product) => {
                    return (
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <Link to={"/products/edit/" + product.id}><button>Sửa</button></Link>
                                <button onClick={() => kickOut(product.id)}>Xóa</button>
                                <Link to={"/products/productDetail/" + product.id}><button>Xem</button></Link>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        </>
    )
}

export default ListProduct;