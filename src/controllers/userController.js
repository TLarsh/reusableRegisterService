const {mapFunction} = require('../utils/marper');
const {registerUser} = require('../services/registrationServices');


const registerController(req, res) => {
    const response = await mapFunction(registerUser, req.body);
    return res.status(response.status ? 201: 400).json(response);
}