import './App.css';

function App() {
   
    return (
        <div className="App">
            <header>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><a href="#1">Trang chủ</a></li>
                                <li><a href="#1">Quản lý sản phẩm</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className='container'>
                <button type="button" className="btn btn-info mb-15">Thêm sản phẩm</button>
                <div className="panel panel-success">
                    <div className="panel-heading">Danh sách sản phẩm</div>
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
                                    <button type="button" className="btn btn-success mr-10">Sửa</button>
                                    <button type="button" className="btn btn-danger">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
