export const register =async(req,res)=>{
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
      console.log(name, email, password);
      if(!email===undefined || !email === null){
        const nickname=  email.split('@')[0];
        console.log(nickname);
      }
      res.status(400);
      throw new Error("Please fill all required field");
    }
    if (password.length < 6) {
      res.status(400);
      throw new Error("Password must be up to 6 characters");
    }
    //   Check if user email already exists
    // const userExists = await User.findOne({ email });
  
    // if (userExists) {
    //   res.status(400);
    //   throw new Error("Email has already been registerd");
    // }

}
export const login =async(req,res)=>{

}
