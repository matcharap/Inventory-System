const db = require("./db");

// GET list of managers
exports.list = function (req, res, next) {
  db.query("SELECT * FROM manager", (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows);
  });

  return;
};

// GET detail of manager using ID
exports.detail = function (req, res, next) {
  let query = `SELECT * FROM manager WHERE id = ${req.params.id}`;
  db.query(query, (err, rows, fields) => {
    if (err) return next(err);

    res.json(rows[0]);
  });

  return;
};

// CREATE manager
exports.create = function (req, res, next) {
  let new_manager = { ...req.body };
  db.query(
    "INSERT INTO manager SET ?",
    new_manager,
    function (err, results, fields) {
      if (err) throw next(err);

      res.json({ result: results });
    }
  );

  return;
};

// DELETE manager with ID
exports.delete = function (req, res, next) {
  var sql = `DELETE FROM manager WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) return next(err);

    res.json(result);
  });

  return;
};

// UPDATE manager with data and ID
exports.update = function (req, res, next) {
  db.query(
    `UPDATE manager SET username = ?, fullname = ?, email = ?, contact = ?, password = ? WHERE id = ${req.params.id}`,
    [
      req.body.username,
      req.body.fullname,
      req.body.email,
      req.body.contact,
      req.body.password,
    ],
    (err, result) => {
      if (err) return next(err);

      res.json(result);
    }
  );

  return;
};
