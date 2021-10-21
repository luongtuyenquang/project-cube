import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux"
import { useEffect, useState } from 'react';
const axios = require('axios');


function ProductList(props) {
    const [products, setProduct] = useState([])
    const [page, setPage] = useState([])
    const [numberPage, setNumberPage] = useState(0)

    const pageSize = 5

     useEffect(() => {
        async function fetchAPI(){
            const url = 'https://616d1e8637f997001745d866.mockapi.io/api/products'
            const res = await axios.get(url)
            setProduct(res.data)
            setPage(res.data.slice(0, 5))
            setNumberPage(res.data.length / pageSize)
        }
        fetchAPI()
    }, [])

    const renderProduct = page.map((product, index) => {
        return <ProductItem product={product} key={index} index={index} delete={deleteProduct}/>
    })

    function deleteProduct(id){
        axios.delete(`https://616d1e8637f997001745d866.mockapi.io/api/products/${id}`)
        const newProductList = products.filter((product) => {
            return product.id !== id
        })
        setProduct(newProductList)
    }

    function numberPagination(number){
        const arr = []
        for(let i = 1; i <= number; i++){
            arr.push(i)
        }
        return arr.map((elm, index) => {
            return (
                <div key={index}>
                    <button onClick={() => handleSwitchPage(elm)}>{elm}</button>
                </div>
            )
        })
    }

    function handleSwitchPage(number){
        const end = pageSize * number
        setPage(products.slice(end - pageSize, end))
    }
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
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {numberPagination(Math.ceil(numberPage))}
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