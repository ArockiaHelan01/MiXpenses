var express = require('express');

var expensesController = require('../controller/expenses');

var router = express.Router();

router.post('/add', expensesController.addExpenses)

module.exports = router;