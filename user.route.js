const mongoose = require('mongoose');
const router = require('express').Router();
const userSchema = require('./user.schema');

const userModel = mongoose.model('User', userSchema);

router.post('/', async (req, res) => {
    try {
        const user = await userModel.create(req.body);
        res.status(201).json({
            message: 'Selamat kamu berhasil',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        const option = {
            name: req.query.name
        }
        const user = await userModel.find(option);
        res.status(201).json({
            message: 'Hore berhasil get data',
            data: user
        });
    } catch (error) {
        res.status(400).json ({
            message: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.status(201).json({
            message: 'Berhasil ambil data',
            data: user
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

//update section
router.put('/:id', async (req, res) => {
    try {
        let newData = req.body;
        if (newData.socialMedia !== 0) {
            const oldData = await userModel.findById(req.params.id);
            newData.socialMedia = {
                ...oldData.socialMedia,
                ...newData.socialMedia
            }
        }
        
        const result = await userModel.updateOne(
            { _id: req.params.id },
            { $set: req.body});
        console.log(result)
        res.status(201).json({
            message: 'Berhasil ubah data',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            message: "Not Found"
        })
    }
})


module.exports = router;