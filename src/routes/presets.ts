import { Router } from 'express';

const router = Router();

router.post('/get', (req, res) => {
    res.json({
        success: true,
    });
});

export default router;
