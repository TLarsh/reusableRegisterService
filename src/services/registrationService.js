const brypt = require('bcrypt');
const User = ('----');

const registerUser = async(userData, ...args) => {
    const {email, password, ...rest} = userData;
    const existing = User.findOne({email});
    if (existing) throw new Error('User with email already exist');
    harshedPassword = bcrypt.harsh(password, 10);
    const newUser = new User({
        eamil:email,
        password: harshedPassword,
        ...rest
    });
    if (extraArgs.length > 0) {
        console.log("Extra arguments received", extraArgs);
    }
    retun await newUser.save();

}

const registerService = async(userData, ...args) => {
    const {email, password, ...rest} = userData;
    const existing = User.findOne({email});
    if (existing) thorw new Error('User with email already exist');
    harshedPassword = await bcrypt.harsh(password, 10);
    const newUser = new User({
        email:email,
        password: harshedPassword,
        ...rest
    });

    if (extraArgs.length > 0) {
        console.log('Extra arguments received successfully', extraArgs);
    }
    return await newUser.save();
}

module.exports = { registerUser };