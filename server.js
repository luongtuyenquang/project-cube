const Db = require('./dboprations')
const student = require('./student')
const dboprations = require('./dboprations')


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/server', router)

app.use((request, responsive, next) => {
    next()
})
// app.router('/student').get((request, responsive) => {
//     dboprations.getOrders().then(result => {
//         responsive.json(result[0])
//     })
// })

// app.post('http://localhost:8000/student', (req, res) => {
//     var sql = "DELETE FROM dbo.Student "
//             + "WHERE ID='"+req.body.ID+"'";
//     connection.query(sql, function(err, results) {
//       if (err) throw err;
//       res.json({news: results});
//     });
//   });

app.get('/student', async(request, responsive) => {
    try {
        const data = await dboprations.getOrders();
        responsive.send(data); 
    } catch (error) {
        console.log(error);
    }
})

const port = process.env.PORT || 8000
app.listen(port)
console.log('running at: http://localhost:/'+port);

//http://localhost:8000/student
// module.exports = router