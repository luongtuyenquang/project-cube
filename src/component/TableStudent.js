
function TableStudent(props) {
    const { lists } = props
    const render = lists.map(list => {
        return (
            <table className="table table-bordered" key={list.ID}>
                <thead>
                    <tr className="success">
                        <th scope="col">ID</th>
                        <th scope="col">Student Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone1</th>
                        <th scope="col">Phone2</th>
                        <th scope="col">Email</th>
                        <th scope="col">Image</th>
                        <th scope="col">Address</th>
                        <th scope="col">ProvinceID</th>
                        <th scope="col">WardID</th>
                        <th scope="col">DistrictID</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Note</th>
                        <th scope="col">CreateBy</th>
                        <th scope="col">CreateDate</th>
                        <th scope="col">IsDelete</th>
                        <th scope="col">Search</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{list.ID}</td>
                        <td>{list.StudentCode}</td>
                        <td>{list.Name}</td>
                        <td>{list.Gender}</td>
                        <td>{list.Phone1}</td>
                        <td>{list.Phone2}</td>
                        <td>{list.Email}</td>
                        <td>{list.Image}</td>
                        <td>{list.Address}</td>
                        <td>{list.ProvinceID}</td>
                        <td>{list.WardID}</td>
                        <td>{list.DistrictID}</td>
                        <td>{list.Birthday}</td>
                        <td>{list.Note}</td>
                        <td>{list.CreateBy}</td>
                        <td>{list.CreateDate}</td>
                        <td>{list.IsDelete}</td>
                        <td>{list.Search}</td>
                        <td>
                        <button type="button" className="btn btn-success">Sửa</button>
                        <button type="button" className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    })
    return (
        render
    );
}

export default TableStudent;
