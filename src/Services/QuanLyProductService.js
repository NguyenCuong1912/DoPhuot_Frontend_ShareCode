
import { baseService } from './baseService';

class QuanLyProductServie extends baseService {


    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addProduct = (dataProduct) => {
        return this.post(`Product`, dataProduct)
    }

    getAll = (name) => {
        if (name) {
            return this.get(`Product?name=${name}`)
        } else {
            return this.get(`Product`)
        }
    }
    getDetail = (id) => {
        return this.get(`Product/${id}`)
    }

    updateProduct = (id, data) => {
        return this.put(`Product/${id}`, data)
    }

    delProduct = (id) => {
        return this.put(`Product/Delete/${id}`)
    }
}

export const quanLyProductService = new QuanLyProductServie();