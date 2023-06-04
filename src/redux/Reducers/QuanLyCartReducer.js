import {
  ADD_CART,
  CLEAR_CART,
  DELETE_CART,
  GET_BILL_DETAIL,
  GET_CHECKOUT_HISTORY,
  GET_LIST_BILL,
  UPDATE_CART,
} from "../Types/QuanLyCartType";

const initialState = {
  cart: [],
  lstBill: [],
  cartHistory: [],
  lstBillDetail: [],
  chart: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export const QuanLyCartReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ADD_CART: {
      let newCart = [...state.cart];
      const _product = {
        Category_ID: data.item.Category_ID,
        Product_ID: data.item.id,
        Price: data.item.Price,
        Quantity: data.number,
        ProductImage: data.item.ProductImage,
        ProductName: data.item.ProductName,
        Description: data.item.Description,
        Discount: data.item.Discount,
      };
      const index = newCart.findIndex(
        (product) => product.Product_ID === data.item.id
      );
      if (index > -1) {
        newCart[index].Quantity += data.number;
      } else {
        newCart.push(_product);
      }
      return { ...state, cart: newCart };
    }

    case GET_LIST_BILL: {
      state.lstBill = data;
      return { ...state };
    }

    case GET_BILL_DETAIL: {
      state.lstBillDetail = data;
      return { ...state };
    }

    case GET_CHECKOUT_HISTORY: {
      state.cartHistory = data;
      return { ...state };
    }

    case UPDATE_CART: {
      let updateCart = [...state.cart];
      const index = updateCart.findIndex(
        (product) => product.Product_ID === data.id
      );
      if (index > -1) {
        updateCart[index].Quantity += data.soLuong;
        if (updateCart[index].Quantity < 1) {
          updateCart[index].Quantity = 1;
        }
      }
      return { ...state, cart: updateCart };
    }

    case DELETE_CART: {
      let delCart = [...state.cart];
      const index = delCart.findIndex(
        (product) => product.Product_ID === data.id
      );
      if (index > -1) {
        delCart.splice(index, 1);
      }
      return { ...state, cart: delCart };
    }

    case CLEAR_CART:
      return { ...state, cart: [] };

    case "CHARTJS": {
      return { ...state, chart: data };
    }
    default:
      return state;
  }
};
