import { baseService } from "./baseService";

class QuanLyCheckoutService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  checkout = (data) => {
    return this.post("Checkout", data);
  };
  requireCheckout = (data) => {
    return this.post("Checkout/RequireCheckout/paypal", data);
  };
  checkoutWithMonth = () => {
    return this.get("Checkout/Total/Month/Chart");
  };
  changeStatusAwait = (data) => {
    return this.put("Checkout/ChangeStatusAwait", data);
  };
  changeStatusDelivery = (data) => {
    return this.put("Checkout/ChangeStatusDelivery", data);
  };
  changeStatusDone = (data) => {
    return this.put("Checkout/ChangeStatusDone", data);
  };
  getBillDetail = (id) => {
    return this.get(`Checkout/Detail/${id}`);
  };

  getCheckout = (Id) => {
    return this.get(`Checkout/ByAccount/${Id}`);
  };

  getListBill = () => {
    return this.get(`Checkout`);
  };
}

export const quanLyCheckoutService = new QuanLyCheckoutService();
