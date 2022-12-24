
import { CLEAR_CART, GET_BILL_DETAIL, GET_CHECKOUT_HISTORY, GET_LIST_BILL } from '../Types/QuanLyCartType';
import { quanLyCheckoutService } from './../../Services/QuanLyCheckoutService';
import { history } from './../../App';
import { _home, _login } from '../../utils/Utils/ConfigPath';
import { message } from 'antd';
import { USER_LOGIN } from '../Types/QuanLyAccountType';



export const CheckoutAction = (data) => {
    return async dispatch => {
        if (JSON.parse(sessionStorage.getItem(USER_LOGIN))) {
            const id = JSON.parse(sessionStorage.getItem(USER_LOGIN)).account.id;
            try {
                const dataCheckout = {
                    Account_ID: id,
                    ListProduct: data
                }
                const result = await quanLyCheckoutService.checkout(dataCheckout);
                if (result.status === 200) {
                    dispatch({
                        type: CLEAR_CART
                    })
                    alert("Thanh toán thành công!")
                    history.push(`${_home}`)
                }
                else {
                    alert('Thanh toán không thành công!')

                }
            } catch (error) {
                console.log('error', error.response?.data)
                message.warning('Thanh toán không thành công!')
            }
        }
        else {
            alert('Bạn phải đăng nhập trước!')
            history.push(`${_login}`)
        }
    }
}


export const GetListBill = () => {
    return async dispatch => {
        try {
            const result = await quanLyCheckoutService.getListBill();
            if (result.status === 200) {
                dispatch({
                    type: GET_LIST_BILL,
                    data: result.data,
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}

export const GetBillDetail = (id) => {
    return async dispatch => {
        try {
            const result = await quanLyCheckoutService.getBillDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_BILL_DETAIL,
                    data: result.data,
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}


export const GetCheckoutHistory = () => {
    return async dispatch => {
        const id = JSON.parse(sessionStorage.getItem("USER_LOGIN")).account.id;
        try {
            const result = await quanLyCheckoutService.getCheckout(id);
            if (result.status === 200) {
                dispatch({
                    type: GET_CHECKOUT_HISTORY,
                    data: result.data,
                })
            }
        } catch (error) {
            console.log('error', error.response?.data)
            message.warning('Lấy thông tin không thành công!')
        }
    }
}