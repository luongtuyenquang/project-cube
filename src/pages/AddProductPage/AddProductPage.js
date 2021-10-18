import { useState } from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
const axios = require('axios');

export default function AddProductPage() {
   const [value, setValue] = useState({
    id: '',
    txtName: '',
    txtPrice: '',
    chkbStatus:''
   })

    function handleChange(e){
        const name = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setValue(preState => ({
            ...preState,
            [name]: value
        }))
    }
    
    const { txtName, txtPrice, chkbStatus } = value
    const history = useHistory()

    function handleSubmitForm(e){
        e.preventDefault()
        
        axios.post('https://616d1e8637f997001745d866.mockapi.io/api/products', {
            name: txtName, //name: là name trong bảng DB
            price: txtPrice, //price: là price trong bảng DB
            status: chkbStatus //status: là status trong bảng DB
          })
          .then(function (response) {
              history.goBack()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    
   return (
        <div className='container'>
            <form onSubmit={handleSubmitForm}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        name='txtName'
                        value={txtName}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Giá</label>
                    <input type="text" 
                        className="form-control" 
                        id="exampleInputEmail1"
                        name='txtPrice'
                        value={txtPrice}
                        onChange={handleChange}
                    >
                    </input>
                </div>
                <div className="checkbox">
                    <label>
                        <input 
                            type="checkbox" 
                            name='chkbStatus' 
                            value={chkbStatus} 
                            onChange={handleChange}
                        >
                        </input>
                        Còn hàng
                    </label>
                </div>
                <NavLink to='/product' className="btn btn-danger mr-10">Trở lại</NavLink>
                <button type="submit" className="btn btn-success">Lưu lại</button>
            </form>
        </div>
    );
}

