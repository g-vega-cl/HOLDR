import jwt from 'jsonwebtoken';

const auth = async (req,res,next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, process.env.SECRET_TOKEN_USER);

            req.userId = decodedData?.id;
        } else{
            decodedData = jwt.decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; //sub is googles name for the specific id.
        }

         next();
    } catch(error){
        console.log("error at auth.js middleware ", error);
    }
}

export default auth;