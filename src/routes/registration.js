import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('registration'); 
});

export default router;
