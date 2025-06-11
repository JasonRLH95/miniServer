const hooksR= require("./hookRoute");
// const indexR= require("./indexRoute");


exports.routesInit = (app) => {
  // app.use("/",indexR);
  app.use("/hook",hooksR);
}