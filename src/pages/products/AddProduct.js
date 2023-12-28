import {useDispatch} from "react-redux";
import {Field, Form, Formik} from "formik";
import {add} from "../../redux/services/productService";
import {useNavigate} from "react-router-dom";

function AddProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <h1>Add products</h1>
            <Formik initialValues={
                {
                    title: '',
                    price: '',
                    description: ''
                }
            }
                    onSubmit={(values) => {
                        dispatch(add(values)).then(() =>{
                            navigate('/products/home')
                        });
                    }}
            >
                <Form>
                    <Field name={"title"} placeholder={"Title"}/>
                    <Field name={"price"} placeholder={"Price"}/>
                    <Field name={"description"} placeholder={"Description"}/>
                    <button>Thêm</button>
                </Form>
            </Formik>
        </>
    )
}

export default AddProduct;