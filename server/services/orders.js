const db = require("./db");

// GET list of orders
exports.list = function (req, res, next) {
  db.query("SELECT * FROM orders", (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows);
  });

  return;
};

// GET detail of order using ID
exports.detail = function (req, res, next) {
  let query = `SELECT * FROM orders WHERE id = ${req.params.id}`;
  db.query(query, (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows[0]);
  });

  return;
};

// CREATE order
exports.create = function (req, res, next) {
  let new_order = { ...req.body };
  db.query(
    "INSERT INTO orders SET ?",
    new_order,
    function (err, results, fields) {
      if (err) throw next(err);

      res.json({ result: results });
    }
  );

  return;
};

// DELETE order with ID
exports.delete = function (req, res, next) {
  var sql = `DELETE FROM orders WHERE ID = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) return next(err);

    res.json(result);
  });

  return;
};

// UPDATE manager with data and ID
exports.update = function (req, res, next) {
  db.query(
    `UPDATE orders SET item_ID = ?, total_price = ?, quantity = ?, customer_ID = ? WHERE ID = ${req.params.id}`,
    [
      req.body.item_ID,
      req.body.total_price,
      req.body.quantity,
      req.body.customer_ID,
    ],
    (err, result) => {
      if (err) return next(err);

      res.json(result);
    }
  );

  return;
};
