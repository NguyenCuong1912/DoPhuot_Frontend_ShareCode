import { message } from "antd";
import { quanLyProductService } from "../../Services/QuanLyProductService";
import { _admin, _product } from "../../utils/Utils/ConfigPath";
import { GET_ALL_PRODUCT, GET_DETAIL_PRODUCT } from "../Types/QuanLyProductType";
import { history } from './../../App';






export const AddProductAction = (dataProduct) => {
    return async dispatch => {
        try {
            const result = await quanLyProductService.addProduct(dataProduct);
            if (result.status === 200) {
                history.push(`${_admin}${_product}`)
                await message.success("Thêm mới thành công!")
            }
            else {
                message.error("Thêm mới thất bại!")
            }
        } catch (error) {
            message.error("Loại sản phẩm này đã tồn tại!")
            console.log('error', error.response?.data)
        }
    }
}


export const GetAllProductAction = (name = '') => {
    return async dispatch => {
        try {
            const result = await quanLyProductService.getAll(name);
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_PRODUCT,
                    dataProduct: result.data
                })
            }
            else {
                message.error("Không lấy được sản phẩm!")
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}
export const GetDetailProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyProductService.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_PRODUCT,
                    dataDetail: result.data
                })
            }
            else {
                message.warning('error!')
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const UpdateProductAction = (id, data) => {
    return async dispatch => {
        try {

            const result = await quanLyProductService.updateProduct(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật sản phẩm thành công!")
                history.push(`${_admin}${_product}`)
            }
            else {
                message.error("Cập nhật sản phẩm thất bại!")
            }
        } catch (error) {
            message.error("Cập nhật sản phẩm thất bại!!")
            console.log('error', error.response?.data)

        }
    }
}

export const DeleteProductAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyProductService.delProduct(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllProductAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            message.warning('Xóa thất bại!')
            console.log('error', error.response?.data)

        }
    }
}