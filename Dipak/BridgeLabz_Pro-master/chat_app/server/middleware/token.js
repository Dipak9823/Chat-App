/*****************************************************************************************************
 *@Purpose -CHATAPP
 *@file    - app.js
 *@author  - Dipak Patil
 *@version - 1.0
 *@since   - 25/05/2019
 **************************************************************************************************/
const jwt = require('jsonwebtoken');
module.exports = {
    GenerateToken(payload) {
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: '1d' }) //expires in one day
        const obj = {
            success: true,
            message: 'Token Generated ',
            token: token
        }
        return obj;
    }
}