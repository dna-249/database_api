const express = require('express');
const studentRouter = express.Router()
const staffRouter = express.Router()
const teacherRouter = express.Router()
const managementRouter = express.Router()
const emailRouter = express.Router()
const { getOneStudent,putOneStudent, getAllStudent, postStudent,putSetStudent,putPullStudent, putPushStudent, deleteOneStudent } = require('../controllers/student');
const { getOneTeacher, putSetTeacher,putOneTeacher, getAllTeacher, postTeacher,putPullTeacher, putPushTeacher, deleteOneTeacher, putOneTeacherClass } = require('../controllers/teacher');
const { getOneStaff, putSetStaff,putOneStaff, getAllStaff, postStaff,putPullStaff, putPushStaff, deleteOneStaff, putOneStaffClass } = require('../controllers/staff');
const { getOneManagement,putOneManagement,putPushManagementChat, getAllManagement, postManagement,putPullManagement, putPushManagement, deleteOneManagement } = require('../controllers/management');
const { staffLogin,teacherLogin,teacherSignup,managementLogin,studentLogin,managementSignup,staffSignup, studentSignup}=require("../middlewares/middleware")
const { teacherVerify, staffVerify,managementVerify,studentVerify }= require("../middlewares/verify")   
const{ emails} = require("../email/email")


emailRouter.post('/', emails)
studentRouter.post('/verify',studentVerify)
studentRouter.post('/login',studentLogin)
studentRouter.post('/',studentSignup, postStudent)
studentRouter.get('/', getAllStudent)
studentRouter.get('/:_id', getOneStudent)
studentRouter.put('/push/:_id/:object', putPushStudent)
studentRouter.put('/:_id', putOneStudent)
studentRouter.put('/pull/:_id/:_id2/:object', putPullStudent)
studentRouter.put('/set/:_id/:object/:index/:key', putSetStudent)
studentRouter.delete("/:_id", deleteOneStudent)

managementRouter.post('/verify',managementVerify)
managementRouter.post('/login',managementLogin)
managementRouter.post('/',postManagement)
managementRouter.get('/', getAllManagement)
managementRouter.get('/:_id', getOneManagement)
managementRouter.put('/:_id', putOneManagement)
managementRouter.put('/pull/:_id/:_id2/:object', putPullManagement)
managementRouter.put('/push/:_id/:object', putPushManagementChat)
managementRouter.put('/push/:_id/:key/:value',putPushManagement)
managementRouter.delete("/:_id", deleteOneManagement)

staffRouter.post('/verify',staffVerify)
staffRouter.post('/login',staffLogin)
staffRouter.post('/',staffSignup, postStaff)
staffRouter.get('/', getAllStaff)
staffRouter.get('/:_id', getOneStaff)
staffRouter.get('/class/:classes', getOneStaff)
staffRouter.put('/:_id', putOneStaffClass)
staffRouter.put('/:_id/:object2', putOneStaff)
staffRouter.put('/push/:_id/:object2', putPushStaff)
staffRouter.put('/pull/:_id/:_id2/:object2', putPullStaff)
staffRouter.put('/push/:_id',putPushStaff)
staffRouter.put('/set/:_id/:object/:index/:key', putSetStaff)
staffRouter.delete('/:_id', deleteOneStaff)

teacherRouter.post('/verify',teacherVerify)
teacherRouter.post('/login',teacherLogin)
teacherRouter.post('/',teacherSignup, postTeacher)
teacherRouter.get('/', getAllTeacher)
teacherRouter.get('/:_id', getOneTeacher)
teacherRouter.get('/class/:classes', getOneTeacher)
teacherRouter.put('/push/:_id/:key/:value', putOneTeacherClass)
teacherRouter.put('/:_id/:object2', putOneTeacher)
teacherRouter.put('/push/:_id/:object2', putPushTeacher)
teacherRouter.put('/pull/:_id/:_id2/:object2', putPullTeacher)
teacherRouter.put('/push/:_id',putPushTeacher)
teacherRouter.put('/set/:_id/:object/:index/:key', putSetTeacher)
teacherRouter.delete('/:_id', deleteOneTeacher)


module.exports = {
                 studentRouter,
                 teacherRouter,
                 managementRouter,
                 staffRouter,
                 emailRouter };