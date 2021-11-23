import { Router } from 'express';
import { is } from 'typescript-is';
import { getApi, DyteAPI } from '../util/DyteAPI';

const router = Router();

router.post('/create', async (req, res) => {
    if (!is<DyteAPI.RequestTypes.CreateMeetingOptions>(req.body)) {
        return res.status(400).json({
            success: false,
        });
    }

    const apiRes = await getApi().createMeeting(req.body);

    if (!apiRes.success) {
        return res.status(500).json({
            sucess: false,
        });
    }

    return res.json({
        success: true,
        data: apiRes.data,
    });
});

export default router;
