import express from 'express';
import { createUser, getAllUsers } from '../controllers/userController.js';

console.log("Imported createUser:", createUser);

const router = express.Router();

router.route('/createUser').post(createUser);
router.route('/users').get(getAllUsers);

export default router;