

const con=require("../db/conn");



const userCtrl={

    register: async (req, res) => {
        

        // console.log(req);
    try {
        const { username, password, role } = req.body;
        console.log(username,password,role);
        const connection = await con.getConnection();

        // Check if the user already exists
        const queryExists = 'SELECT * FROM user_entity WHERE username = ?';
        const [rowsExists] = await connection.execute(queryExists, [username]);

        if (rowsExists.length > 0) {
            
            connection.release();
            return res.status(200).json({ success: false, message: 'User already exists' });
        }
        // console.log(rowsExists)


      

        // If the user doesn't exist, create a new user
        const query = 'INSERT INTO user_entity(username, password, role) VALUES(?, ?, ?)';
        
        const [rows] = await connection.execute(query, [username, password, role]);
        // console.log(rows);
        connection.release();
        res.status(201).json({ success: true, data: rows });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
},



}






module.exports=userCtrl;