import express from 'express';
import transactionsRoutes from './api/transactions';
import customersRoutes from './api/customers';

const app = express()
const port = 3000

app.use('/transactions', transactionsRoutes)
app.use('/customers', customersRoutes)

app.get('/', (req, res) => {
    res.send('Hello TypeScript')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})