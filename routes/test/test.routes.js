const express = require('express');
const router = express.Router();
// const verify = require('../../middleware/authjwt');
// const upload = require('../../config/multerSetup');


const getResults = require('../../controllers/test/getResults');

// router.route('/test').get(getResults);


// router.route('/')
//     .post(verify, upload.single('postMedia'), createTodo)
//     .get(verify, getAll);

// router.route('/delete/:id')
//     .delete(verify, deleteTodo);

// router.route('/put/:id')
//     .put(updateTodo);



module.exports = router;