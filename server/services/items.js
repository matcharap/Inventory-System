const db = require("./db");

// GET list of items
exports.list = function (req, res, next) {
  db.query("SELECT * FROM items", (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows);
  });

  return;
};

// GET detail of item using ID
exports.detail = function (req, res, next) {
  let query = `SELECT * FROM items WHERE id = ${req.params.id}`;
  db.query(query, (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows[0]);
  });

  return;
};

// CREATE item
exports.create = function (req, res, next) {
  let new_item = { ...req.body };
  db.query(
    "INSERT INTO items SET ?",
    new_item,
    function (err, results, fields) {
      if (err) throw next(err);

      res.json({ result: results });
    }
  );

  return;
};

// DELETE item with ID
exports.delete = function (req, res, next) {
  var sql = `DELETE FROM items WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) return next(err);

    res.json(result);
  });

  return;
};

// UPDATE manager with data and ID
exports.update = function (req, res, next) {
  db.query(
    `UPDATE items SET name = ?, price = ?, description = ?, R_Ill = ?, images_path = ?, options = ? WHERE id = ${req.params.id}`,
    [
      req.body.name,
      req.body.price,
      req.body.description,
      req.body.R_Ill,
      req.body.images_path,
      req.body.options,
    ],
    (err, result) => {
      if (err) return next(err);

      res.json(result);
    }
  );

  return;
};
