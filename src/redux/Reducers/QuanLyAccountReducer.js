import { GET_ALL_USER, GET_DETAIL, SET_LOGIN, USER_LOGIN } from "../Types/QuanLyAccountType";


let userDefault = {};
if (sessionStorage.getItem(USER_LOGIN)) {
    userDefault = JSON.parse(sessionStorage.getItem(USER_LOGIN));

}

const initialState = {
    userLogin: userDefault,
    lstUser: [],
    editUser: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export const QuanLyAccountReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_LOGIN: {
            const { dataSignIn } = action;
            sessionStorage.setItem(USER_LOGIN, JSON.stringify(dataSignIn));
            return { ...state, userLogin: dataSignIn }
        }
        case GET_ALL_USER: {
            state.lstUser = action.dataUser
            return { ...state }
        }
        case GET_DETAIL: {
            state.editUser = action.dataDetail
            return { ...state }
        }


        default:
            return state
    }
}
