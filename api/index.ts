import express from 'express';
import transactionRoutes from './transactions';
import customerRoutes from './customers';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello TypeScript + NodeJS + ExpressJS');
});

router.use('/transactions', transactionRoutes);
router.use('/customers', customerRoutes);

export default router;
