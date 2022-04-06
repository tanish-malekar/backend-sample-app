import { Router } from 'express';
import ParticipantRouter from './participants';
import PresetRouter from './presets';
import MeetingsRouter from './meetings';
import HealthRouter from './health';

const router = Router();

router.use('/health', HealthRouter);
router.use('/participants', ParticipantRouter);
router.use('/presets', PresetRouter);
router.use('/meetings', MeetingsRouter);

export default router;
