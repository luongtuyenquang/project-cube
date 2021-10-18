import './ProductItem.css';

export default function ProductItem(props) {

    const product = props.product
    const index = props.index
    
    function handleDelete(id){
        props.delete(id)
    }
    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={product.status ? 'label label-success' : 'label label-default'}>
                    {product.status ? 'Còn hàng' : 'Hết hàng'}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-success mr-10 btn-pd">Sửa</button>
                <button type="button" className="btn btn-danger btn-pd" onClick={()=> handleDelete(product.id)}>Xóa</button>
            </td>
        </tr>
    );
}
