const express = require("express");
const { BarangList, BarangCreate, BarangDetail, BarangDelete, BarangUpdate } = require('./barang.controller');

const BarangRouter = express.Router();

BarangRouter.get('/', BarangList);
BarangRouter.post('/', BarangCreate);
BarangRouter.get('/:id', BarangDetail);
BarangRouter.put('/:id', BarangUpdate);
BarangRouter.delete('/:id', BarangDelete);

module.exports = {
    BarangRouter
}
