import './ProductItem.css';

export default function ProductItem(props) {
    const product = props.product

    return (
        <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                <span className={product.status ? 'label label-success' : 'label label-default'}>
                    {product.status ? 'Còn hàng' : 'Hết hàng'}
                </span>
            </td>
            <td>
                <button type="button" className="btn btn-success mr-10 btn-pd">Sửa</button>
                <button type="button" className="btn btn-danger btn-pd">Xóa</button>
            </td>
        </tr>
    );
}
