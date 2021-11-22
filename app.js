const express = require('express');
const logger = require('morgan');
// const bodyParser = require('body-parser');
const routers = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
const pa11y = require('pa11y');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Working Well');
});

app.get('/api/v1/test', async (req, res) => {
    // if(!req.query.url) {
    //     res.status(400).json({error: 'Url is required'})
    // } else {
    //     const results = await pa11y(req.query.url)
    //     res.status(200).json(results)
    // }

//     try {
        if(!req.query.url) {
            res.status(400).json({success: false, msg: 'Url is required'});
        } else {
            const allResults = await pa11y(req.query.url);
            if (allResults.issues.length === 0) {
                return res.status(200).json({success: true, msg: 'No issues found', allResults});
            } else {
            return res.status(200).json({success: true, msg: 'All Results', allResults});
            }
        }
        // const allResults = await Todo.find({user: req.user._id}).populate('user').sort({_id:-1});
        // if(!allTodos) return res.status(500).json({success: false, msg: 'No todos found'});
        console.log(req.query.url)

//     } catch (err) {
        return res.status(400).json({success:false, msg: err.message});
//     }
    
})

// routers(app);

app.use(logger('dev'));

module.exports = app;
