const {mapFunction} = require('../utils/marper');
const {registerUser} = require('../services/registrationServices');

const registerController = async(req, res) => {
    const response = await mapFunction(
        registerUser,
        req.body,
        // req.query.referral
    );
    return res.status(response.status ? 201: 400).json(response);
};

const {mapFunction} = async(req, res) => {
    const response = await mapFunction(
        registerUser,
        req.body,
    )
}