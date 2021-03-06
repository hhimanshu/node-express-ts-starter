import express from 'express';
import { Customer } from '../declaration';

const router = express.Router();

router.get('/newest', (req, res) => {
  const c1: Customer = { first: 'Tony', last: 'Stark' };
  const c2: Customer = { first: 'Joy', last: 'Pinilla' };
  res.send([c1, c2]);
});

export default router;
