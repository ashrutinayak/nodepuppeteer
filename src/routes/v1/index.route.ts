import { Router } from 'express'
import brinksAuthMiddleware from '../../middleware/brinksAuth.middleware'
// route files
import auth from './auth.route'
import depositRoute from './deposit.route'
import revenueRoute from './revenue.route'
import userRoute from './user.route'
import posRoute from './pos.route'
import paymentRoute from './payment.route'
import orderRoute from './order.route'
import apiServiceRoute from './apiService.route'

const router = Router()

// auth APIs
router.use('/auth', auth)

// brinks's APIs
router.use('/deposit', brinksAuthMiddleware, depositRoute)
router.use('/order', brinksAuthMiddleware, orderRoute)
router.use('/user', brinksAuthMiddleware, userRoute)

// POS APIs
router.use('/pos', posRoute)
router.use('/payment', paymentRoute)
router.use('/revenue', revenueRoute)

// App service
router.use('/service', apiServiceRoute)

export default router
