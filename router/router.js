const express = require('express');
const studentRouter = express.Router()
const staffRouter = express.Router()
const managementRouter = express.Router()
const { getOneStudent,putOneStudent, getAllStudent, postStudent,putSetStudent,putPullStudent, putPushStudent, deleteOneStudent } = require('../controllers/student');
const { getOneStaff, putSetStaff,putOneStaff, getAllStaff, postStaff,putPullStaff, putPushStaff, deleteOneStaff, putOneStaffClass } = require('../controllers/staff');
const { getOneManagement,putOneManagement, getAllManagement, postManagement,putPullManagement, putPushManagement, deleteOneManagement } = require('../controllers/management');
const { staffLogin,managementLogin,studentLogin,managementSignup,staffSignup, studentSignup}=require("../middlewares/middleware")
const { staffVerify,managementVerify,studentVerify }= require("../middlewares/verify")   




studentRouter.post('/verify',studentVerify)
studentRouter.post('/login',studentLogin)
studentRouter.post('/',studentSignup, postStudent)
studentRouter.get('/', getAllStudent)
studentRouter.get('/:_id', getOneStudent)
studentRouter.put('/:_id', putPushStudent)
studentRouter.put('/:_id/:_id2', putOneStudent)
studentRouter.put('/pull/:_id/:_id2', putPullStudent)
studentRouter.put('/set/:_id/:object/:index/:key', putSetStudent)
studentRouter.delete("/delete/:_id", deleteOneStudent)

managementRouter.post('/verify',managementVerify)
managementRouter.post('/login',managementLogin)
managementRouter.post('/',managementSignup,postManagement)
managementRouter.get('/', getAllManagement)
managementRouter.get('/:_id', getOneManagement)
managementRouter.put('/:_id', putOneManagement)
managementRouter.put('/pull/:_id/_id2', putPullManagement)
managementRouter.put('/push/:_id/:key/:value',putPushManagement)
managementRouter.delete("/delete/:_id", deleteOneManagement)

staffRouter.post('/verify',staffVerify)
staffRouter.post('/login',staffLogin)
staffRouter.post('/',staffSignup, postStaff)
staffRouter.get('/', getAllStaff)
staffRouter.get('/:_id', getOneStaff)
staffRouter.put('/:_id', putOneStaffClass)
staffRouter.put('/:_id/:object2', putOneStaff)
staffRouter.put('/pull/:_id/:_id2/:object2', putPullStaff)
staffRouter.put('/push/:_id',putPushStaff)
staffRouter.put('/set/:_id/:object/:index/:key', putSetStaff)
staffRouter.delete('/delete/:_id', deleteOneStaff)

module.exports = {
                 studentRouter,
                 managementRouter,
                 staffRouter };