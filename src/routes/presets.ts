import { Router } from 'express';
import { is } from 'typescript-is';
import { getApi, DyteAPI } from '../util/DyteAPI';

const router = Router();
// Get Preset created on Dyte Dashboard
// You can also create prest using our api
// https://docs.dyte.io/api/#/operations/add_preset
router.get('/', async (req, res) => {
    try {
        if (!is<DyteAPI.RequestTypes.GetPresetOptions>(req.body)) {
            return res.status(400).json({
                success: false,
            });
        }

        const apiRes = await getApi().getPresets(req.body);

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
