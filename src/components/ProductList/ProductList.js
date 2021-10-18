import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux"
import { useEffect, useState } from 'react';
const axios = require('axios');


function ProductList(props) {
    const [products, setProduct] = useState([])
    
     useEffect(() => {
        async function fetchAPI(){
            const url = 'https://616d1e8637f997001745d866.mockapi.io/api/products'
            const res = await axios.get(url)
            setProduct(res.data)
        }
        fetchAPI()
    }, [])
    
    const renderProduct = products.map((product, index) => {
        return <ProductItem product={product} key={index}/>
    })


    return (
        <div className="panel panel-success">
            <div className="panel-heading heading-color">Danh sách sản phẩm</div>
            <div className="panel-body">
            <table className="table table-bordered">
                <thead>
                    <tr className="info">
                    <th scope="col">STT</th>
                    <th scope="col">Mã SP</th>
                    <th scope="col">Tên SP</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProduct}
                </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductList)