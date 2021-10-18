import './ProductItem.css';

export default function ProductItem() {
   
    return (
        <tr>
            <th scope="row">1</th>
            <td>1</td>
            <td>iPhone XS Max</td>
            <td>1000</td>
            <td>
                <span className="label label-success">Còn hàng</span>
                {/* <span className="label label-default">Hết hàng</span> */}
            </td>
            <td>
                <button type="button" className="btn btn-success mr-10 btn-pd">Sửa</button>
                <button type="button" className="btn btn-danger btn-pd">Xóa</button>
            </td>
        </tr>
    );
}

