const app = require("express")();
const http = require("http").Server(app);
const PORT = 4000;

app.get("/", (req, res) => {
  res.send({ status: "running" });
});

http.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
