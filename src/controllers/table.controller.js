const Table = require("../models/table.model");
exports.getTable = (req, res) => {
  Table.find().then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};
exports.getTableById = (req, res) => {
  Table.findById(req.params.id).then((result) => {
    res.status(200).json({
      msg: "Search OK",
      data: result,
    });
  });
};

  exports.createTable = async (req, res) => {
    //เพิ่ม foodmenu
    try {
      let table = new Table({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        // ingredients: req.body.ingredients
      });
      let createTable = await table.save();
      res.status(200).json({
        msg: "Add a table complete.",
        data: createTable,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: error,
      });
    }
  
  };

  exports.updateTable = (req, res) => {
    let Table = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      ingredients: req.body.ingredients,
    };
    Table.findByIdAndUpdate(req.params.id, Table)
      .then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Table.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.addReview = (req, res) => {
    let reviewData = {
      $push: {
        reviews: {
          star: req.body.star,
          message: req.body.message,
        },
      },
    };
    Table.findByIdAndUpdate(req.params.id, reviewData).then((result) => {
      // findById อีกครั้งเพื่อเอา data ใหม่
      Table.findById(req.params.id).then((result) => {
        res.status(200).json({
          msg: "OK",
          data: result,
        });
      });
    });
  };
  
  exports.deleteTable = (req, res) => {
    Table.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json({
          msg: `Table id ${req.params.id} is deleted.`,
        });
      });
    };
    
  exports.getTableByName = (req, res) => {
    Table.find({ 
      name: new RegExp(req.params.name)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };

  exports.getTableByCategory = (req, res) => {
    Table.find({ 
      category: new RegExp(req.params.category)
    }).then((result) => {
      res.status(200).json({
        msg: "Search OK",
        data: result,
      });
    });
  };