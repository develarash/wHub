import useRouter from "./base/user/userRoutes.js"   
 export default function routes (app) {
    app.use("/api/users/",useRouter)
    // app.use(router)
    // app.use(router)
}
// module.exports = {
//     routes
//   };