const express = require('express');
const app = express.Router();
const controller = require('../controllers/table.controller')

app.get("/", controller.getTable);
app.get("/:id",controller.getTableById);
app.post("/",controller.createTable);
app.put("/:id",controller.updateTable);
app.patch("/:id",controller.addReview);
app.delete("/:id",controller.deleteTable);
app.get("/category/:category", controller.getTableByCategory);

app.get ("/name/:name", controller.getTableByName);
module.exports = app;