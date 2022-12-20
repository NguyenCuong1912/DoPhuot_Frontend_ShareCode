import { baseService } from "./baseService";




class QuanLyCategoryService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addCate = (data) => {
        return this.post(`Category`, data)
    }

    getAllCate = () => {
        return this.get(`Category`)
    }

    getDetailCate = (id) => {
        return this.get(`Category/${id}`)
    }
    updateCate = (id, data) => {
        return this.put(`Category/${id}`, data)
    }
    delCate = (id) => {
        return this.put(`Category/Delete/${id}`)
    }
}


export const quanLyCategoryService = new QuanLyCategoryService();