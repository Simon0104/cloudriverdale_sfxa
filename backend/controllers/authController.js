const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


exports.login = async(req, res) =>{
    const{ email, password } = req.body;
    try{
        const user = await User.findOne({ where: { email}});
        if(!user){
            return res.status(401).json({ message: 'user doesnt exeit' });
        }
        const isMacth = await bcrypt.compare(password, user.password);
        if(!isMacth){
            return res.status(401).json({ message: 'password is incorrect' });
        }

        const token = jwt.sign(
            { userId: user.id},
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        return res.json({ token, user});
    }catch(err){
        return res.status(500).json({ error: err.message });
    }
};

exports.register = async (req, res) => {
    const{ email, password} = req.body;
    try{
        const passwordHash = await bcrypt.hash(password, 10);
        // User.create() is a Sequelize API used to insert data into the database.
        const user = await User.create({ email, passwordHash});
        res.status(201).json({ message: 'User created', user });
    }catch(err){
        res.status(400).json({ error: err.message });
    }
    
}