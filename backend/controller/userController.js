
const User = require("./../modal/user")


exports.UserData = async (req, res) => {
    try {
        
const {
               name,
               mobileNo,
                gender,
                country,
                state,
                city,
                rating
                } = req.body
     
            

          
           
            const result = await User.create({
                ...req.body,
               
            })
          
        console.log(result);
                
            
            res.json({
                message: " added successfully",
                result,
            })
        

    } catch (error) {
        res.status(404).json({
            success: false,
            message: "error" + error,

        })

    }
}
exports.getAllUsers = async (req, res) => {
    try {

        const result = await User.find()
        
        console.log(result);
        res.json({
            success: true,
            message: "User fetch successfully",
            result:{
                ...result,
                
            }
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}


exports.deleteFeedback = async (req, res) => {
    try {
        const result1 = await User.deleteMany()
        res.json({
            success: true,
            message: "User delete successfully",

        })

    } catch (error) {

        res.status(400).json({
            success: false,
            message: "error" + error
        })
    }
}


