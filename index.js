import app from "./app/app.js"
const PORT=process.env.PORT||3001
// import {connectDB} from "./config/db.js"
app.listen(PORT,()=>{
  console.log(`listening at port http://localhost:${PORT}`);
});
