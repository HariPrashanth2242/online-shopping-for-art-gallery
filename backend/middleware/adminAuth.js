import jwt from "jsonwebtoken"

const adminAuth = async (req,res,next)=>{
    try {
        const {token }=req.headers
        if (!token) {
            return res.json({success:false,message:"Not authorized "})
        }
        const token_decode=jwt.verify(token,process.env.JWT_SCERET);
        if (token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
            return res.json({success:false,message:"Not authorized "})
        }
        next()
    } catch (error) {
        console.log(error);
        
        res.json({sucess:false,message:error.message})
    }
}

export default adminAuth