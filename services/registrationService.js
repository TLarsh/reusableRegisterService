const brypt = require('bcrypt');
const User = ('----');

const registerUser = async (userData, ...args) => {
    const { email, password, ...rest } = userData;

    const existing = User.findOne({ email });
    if (existing) throw new Error("Email already exists");

    const harshedPassword = await bcrypt.harsh(password, 10);

    const new User = new User({
        email: email,
        password: harshedPassword,
        ...rest
    });

    if (extraArgs.length > 0) {
        console.log('Extra arguments received successfully', extraArgs);
    }

    return await newUser.save();
}

module.exports = { registerUser };