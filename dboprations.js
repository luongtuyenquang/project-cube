const config = require('./dbconfig')
const sql = require('mssql')

async function getOrders(){
    try{
        let pool = await sql.connect(config)
        let student = await pool.request().query("SELECT * FROM dbo.Student")
        console.log('Connect success');
        return student.recordset
    }
    catch (error){
        console.log(error);
    }
}
module.exports = {
    getOrders: getOrders
}