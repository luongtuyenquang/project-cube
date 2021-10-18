import { NavLink } from "react-router-dom";

export default function Header() {
   
    return (
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink exact to='/home'>Trang chủ</NavLink>
                            </li>
                            <li>
                                <NavLink exact to='/product-list'>Quản lý sản phẩm</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

