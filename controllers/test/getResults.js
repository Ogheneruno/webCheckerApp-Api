// const {Todo} = require('../../models/Todo');
const pa11y = require('pa11y');


const getResults = async (req, res) => {
    try {
        if(!req.query.url) {
            res.status(400).json({success: false, msg: 'Url is required'});
        } else {
            const allResults = await pa11y(req.query.url)
            return res.status(200).json({success: true, msg: 'All Results', allResults});
            // res.status(200).json(results)
        }
        // const allResults = await Todo.find({user: req.user._id}).populate('user').sort({_id:-1});
        // if(!allTodos) return res.status(500).json({success: false, msg: 'No todos found'});
        console.log(req.query.url)

    } catch (err) {
        return res.status(500).json({success:false, msg: err.message});
    }
}


module.exports = getResults;