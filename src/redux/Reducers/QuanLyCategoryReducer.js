import { GET_ALL_CATE, GET_DETAIL_CATE } from './../Types/QuanLyCategoryType';



const initialState = {
    lstCate: [],
    detailCate: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export const QuanLyCategoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_CATE: {
            state.lstCate = action.dataCate
            return { ...state }
        }
        case GET_DETAIL_CATE: {
            state.detailCate = action.dataDetail
            return { ...state }
        }

        default:
            return state
    }
}
