const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const app = express();
const port = 4000;
const {
  logInController,
  logOutController,
  signUpController,
  myPageController,
  todoPageController,
  todoAdd,
  todoInfo,
  todoDelete,
  todoStatusEdit,
  myPageUserInfoEdit,
  calendarController,
  todoPagePlusController
} = require("./controllers");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
  })
);
//세션을 사용하는 형식임
app.use(bodyParser.json());
//바디파서를 사용하는 형식
app.use(morgan("dev"));
//모건을 사용하는 형식
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);
// 코어스를 사용하는 형식
app.post("/user/login", logInController);
app.post("/user/signup", signUpController);
app.get("/user/logout", logOutController);
app.get("/user/mypage", myPageController);
app.get("/user/todopage", todoPageController);
app.post("/todo/add", todoAdd);
app.post("/todo/info", todoInfo);
app.post("/todo/status", todoStatusEdit);
app.post("/todo/delete", todoDelete);
app.put("/user/edit", myPageUserInfoEdit);
app.post("/calendar", calendarController);
app.post("/user/getid", todoPagePlusController);
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
module.exports = app;
