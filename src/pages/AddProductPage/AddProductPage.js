
export default function AddProductPage() {
   
    return (
        <div className='container'>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Giá</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" ></input>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox"></input>
                        Còn hàng
                    </label>
                </div>
                <button type="submit" className="btn btn-success">Lưu lại</button>
            </form>
        </div>
    );
}

