import { Router } from 'express';
import { is } from 'typescript-is';
import { getApi, DyteAPI } from '../util/DyteAPI';

const router = Router();

router.post('/create', async (req, res) => {
    try {
        const { userDetails } = req.body;
        if (userDetails && !userDetails.name) {
            return res.status(400).json({
                success: false,
                message: 'Empty name not allowed',
            });
        }

        if (!is<DyteAPI.RequestTypes.AddParticipantOptions>(req.body)) {
            return res.status(400).json({
                success: false,
            });
        }

        const apiRes = await getApi().addParticipant(req.body);

        if (!apiRes.success) {
            return res.status(500).json({
                sucess: false,
            });
        }

        return res.json({
            success: true,
            data: apiRes.data,
        });
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            error: error.message,
        });
    }
});

export default router;
