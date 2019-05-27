var jwt=require('jsonwebtoken');

module.exports={
    generateToken(payload){
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: '1d' }) //expires in one day
        var obj={
            success: true,
            message: 'Token Generated ',
            token: token
        }
        return obj;

    }
}

