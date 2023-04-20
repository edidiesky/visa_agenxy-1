import express from "express"
const router = express.Router()
import {
    adminMiddleware,
    authMiddleware
} from '../middleware/authentication.js'
import {
    registerUser,
    LoginUser,
    GetUser,
    GetAllUser,
    UpdateUser,
    DeleteUser,
    AdminUpdateUser,
    AggregateUserStats
} from '../controllers/userControllers.js'

router.post('/register', registerUser)
router.post('/login', LoginUser)
router.get('/', authMiddleware, adminMiddleware, GetAllUser)
router.get('/stats', authMiddleware, adminMiddleware, AggregateUserStats)
router.route('/admin/profile/:id')
    .delete(authMiddleware, adminMiddleware, DeleteUser)
    .get(authMiddleware, adminMiddleware, GetUser)
    .put(authMiddleware, adminMiddleware, AdminUpdateUser)


router.route('/profile/:id').put(authMiddleware, UpdateUser)
export default router
