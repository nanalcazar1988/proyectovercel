import { Router } from 'express'
const router = Router();

router.get('/company', (req, res) => {
    res.render('general/company')
});

export default router;