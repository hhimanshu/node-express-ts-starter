import express from 'express';
import {Transaction} from "../declaration";

const router = express.Router();

router.get('/count', ((req, res) => {
    res.json({'total': 42});
}));

router.get('/recent', ((req, res) => {
    const transaction: Transaction = {amount: 100.23, isDebit: false, when: new Date()};
    res.json({'total': 42});
}));

export default router;