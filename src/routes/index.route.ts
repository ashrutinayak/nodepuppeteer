import { Request, Response, Router } from 'express'
import webhook from './webhook.route'
import v1 from './v1/index.route'

const router = Router()

// api health
router.get('/', (_req: Request, res: Response) => res.send('API Working'))

// v1 routes
router.use('/v1', v1)

// webhook routes
router.use('/webhook', webhook)

export default router
