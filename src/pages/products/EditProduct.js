import {Field, Form, Formik} from "formik";
import {edit, getById} from "../../redux/services/productService";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";

function EditProduct() {
    const productEdit = useSelector(({products})  => {
        return products.productEdit
    })
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams()

    useEffect(() => {
        dispatch(getById(id))
    }, []);
    return(
        <>
            <h1>Edit products</h1>
            <Formik initialValues={
                   productEdit
            }
                    onSubmit={(values) => {
                        dispatch(edit(values)).then(() =>{
                            navigate('/products/home')
                        });
                    }}
                    enableReinitialize={true}
            >
                <Form>
                    <Field name={"title"} placeholder={"Title"}/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <button>Sửa</button>
                </Form>

            </Formik>
        </>
    )
}
export default EditProduct;