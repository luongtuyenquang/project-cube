import ButtonsHandle from "./ButtonsHandle"

function ModalHandle(props) {
    
    return (
       <div className='modall'>
           <div className='modal-form'>
                <h3 className='modal-title'>Thêm sinh viên</h3>
                <div className='form-group'>
                    <form>
                        <div className='group'>
                            <label>ID: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Student Code: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Name: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Gender: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Phone 1: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Phone 2: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Email: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Image: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Address: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>ProvinceID: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>WardID: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>DistrictID: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Birthday: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Note: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>CreateBy: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>CreateDate: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>IsDelete: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group'>
                            <label>Search: </label>
                            <input type='text'></input>
                        </div>
                        <div className='group center'>
                            <button type="button" className="btn btn-success none fz">Thêm</button>
                            <button type="button" className="btn btn-danger fz">Hủy</button>
                        </div>
                        
                    </form>
                </div>
           </div>
       </div>
    );
}

export default ModalHandle;
