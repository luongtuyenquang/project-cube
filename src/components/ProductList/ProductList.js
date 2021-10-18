import './ProductList.css';
import ProductItem from "../ProductItem/ProductItem";
import { connect } from "react-redux"

 function ProductList(props) {
    const renderProduct = props.products.map((product, index) => {
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