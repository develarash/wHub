import useRouter from "./base/user/userRoutes.js";
import userInfo from "./midlleware/userInfo.js";
export default function routes(app) {
  app.use( (req, res, next) => {
    var osvar = process.platform;
    if (osvar == "darwin") {
      console.log("you are on a mac os");
    } else if (osvar == "win32") {
      console.log("you are on a windows os");
    } else {
      console.log("unknown os");
    }
  });
  app.use("/api/users/", useRouter);
  // app.use("/",function(req,res,next){
  //     console.log("lsdjl")
  //     console.log(req.process.platform);
  // });
  // app.use(router)
}
// module.exports = {
//     routes
//   };
