import express from 'express';
const router = express.Router();

router.get('/hello', (req, res) => res.json({data:'HELLO WORLD'}));

export default router;
