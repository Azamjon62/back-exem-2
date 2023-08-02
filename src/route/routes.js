import { Router } from 'express'
import { ValidationMiddleware } from '../middleware/validation.middleware.js'
import { AUTH_SCHEMA } from '../schema/auth.schema.js'
import AuthController from '../controller/auth.js'
import AdminController from '../controller/admin.controller.js'
import { TEACHER_SCHEMA } from "../schema/teacher.schema.js";
import TeacherController from '../controller/teacher.controller.js'
import { HOMEWORK_SCHEMA } from '../schema/homework.schema.js'
import { STUDENT_SCHEMA } from '../schema/student.schema.js'
import { GROUP_SCHEMA } from '../schema/group.schema.js'
import { COURSE_SCHEMA } from '../schema/course.schema.js'
import StudentController from '../controller/student.controller.js'

const router = Router()

export default router
    .get('/', AuthController.LOGIN_PAGE)
    .get('/admin', AdminController.ADMIN_PAGE)
    .get('/teacher', TeacherController.TEACHER_PAGE)
    .get('/student', StudentController.STUDENT_PAGE)
    .post('/admin', ValidationMiddleware(TEACHER_SCHEMA), AdminController.ADD_TEACHER)
    .post('/admin/student', ValidationMiddleware(STUDENT_SCHEMA), AdminController.ADD_STUDENT)
    .post('/admin/group', ValidationMiddleware(GROUP_SCHEMA), AdminController.ADD_GROUP)
    .post('/admin/course', ValidationMiddleware(COURSE_SCHEMA), AdminController.ADD_COURSE)
    .post('/teacher', ValidationMiddleware(HOMEWORK_SCHEMA), TeacherController.ADD_HOMEWORK)
    .post('/auth', ValidationMiddleware(AUTH_SCHEMA), AuthController.SIGN_IN)
