const express = require("express");
const router = express.Router();

const manager_services = require("../services/manager");
const items_services = require("../services/items");
const orders_services = require("../services/orders");

// MANAGER ROUTES
router.post("/manager/create", manager_services.create);
router.post("/manager/:id/delete", manager_services.delete);
router.post("/manager/:id/update", manager_services.update);
router.get("/manager/:id", manager_services.detail);
router.get("/managers", manager_services.list);

// ITEMS ROUTES
router.post("/order/create", orders_services.create);
router.post("/order/:id/delete", orders_services.delete);
router.post("/order/:id/update", orders_services.update);
router.get("/order/:id", orders_services.detail);
router.get("/orders", orders_services.list);

// ORDERS ROUTES
router.post("/item/create", items_services.create);
router.post("/item/:id/delete", items_services.delete);
router.post("/item/:id/update", items_services.update);
router.get("/item/:id", items_services.detail);
router.get("/items", items_services.list);

module.exports = router;
