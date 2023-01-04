import { message } from "antd";
import { history } from "../../App";
import { quanLyCategoryService } from "../../Services/QuanLyCategoryService";
import { _admin, _cate } from "../../utils/Utils/ConfigPath";
import { GET_ALL_CATE, GET_DETAIL_CATE } from './../Types/QuanLyCategoryType';








export const AddCateAction = (data) => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.addCate(data);
            if (result.status === 201) {
                await message.success("Thêm mới thành công!")
                history.push(`${_admin}${_cate}`)
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


export const GetAllCateAction = () => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.getAllCate();
            if (result.status === 200) {
                dispatch({
                    type: GET_ALL_CATE,
                    dataCate: result.data
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}


export const GetDetailCateAction = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.getDetailCate(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_DETAIL_CATE,
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

export const UpdateCateAction = (id, data) => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.updateCate(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật loại sản phẩm thành công!")
                history.push(`${_admin}${_cate}`)
            }
            else {
                message.error("Cập nhật loại sản phẩm thất bại!")
            }
        } catch (error) {
            message.error("Cập nhật loại sản phẩm thất bại!!")
            console.log('error', error.response?.data)

        }
    }
}


export const DeleteCate = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyCategoryService.delCate(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                dispatch(GetAllCateAction())
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