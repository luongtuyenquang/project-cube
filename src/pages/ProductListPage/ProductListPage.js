import { Link } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductListPage() {
   
    return (
        <div className='container'>
            <Link to='/product/add' className="btn btn btn-info mb-15">Thêm sản phẩm</Link>
            <ProductList />
        </div>
    );
}

