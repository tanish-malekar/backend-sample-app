import { Router } from 'express';
import MeetingRouter from './meeting';
import ParticipantRouter from './participant';
import PresetRouter from './presets';

const router = Router();

router.use('/meeting', MeetingRouter);
router.use('/participant', ParticipantRouter);
router.use('/preset', PresetRouter);

export default router;
