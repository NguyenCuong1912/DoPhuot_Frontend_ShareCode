import { Button, Checkbox, Input, Table } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../../App";
import { _admin, _bill, _detail } from "../../../utils/Utils/ConfigPath";
import { AiFillHeart, AiOutlineMore } from "react-icons/ai";
import moment from "moment";
import {
  ChangeStatusAwaitAction,
  ChangeStatusDeliveryAction,
  ChangeStatusDoneAction,
  GetListBill,
} from "../../../redux/Actions/QuanLyCheckoutAction";

export default function QuanLyBill() {
  const { Search } = Input;
  const dispatch = useDispatch();

  const { lstBill } = useSelector((state) => state.QuanLyCartReducer);
  useEffect(() => {
    dispatch(GetListBill());
  }, []);
  //! Function
  const handleChangeStatusAwait = (bill, value) => {
    const data = {
      id: bill.id,
      StausAwait: value.checked,
    };
    dispatch(ChangeStatusAwaitAction(data));
  };
  const handleChangeDelivery = (bill, value) => {
    const data = {
      id: bill.id,
      StatusDelivery: value.checked,
    };

    dispatch(ChangeStatusDeliveryAction(data));
  };
  const handleChangeDone = (bill, value) => {
    const data = {
      id: bill.id,
      StatusDone: value.checked,
    };
    dispatch(ChangeStatusDoneAction(data));
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "Username",
      render: (text, cart) => {
        return (
          <span
            title="Chi tiết hóa đơn"
            onClick={() => {
              history.push(`${_admin}${_bill}${_detail}/${cart.id}`);
            }}
            className="text-base hover:underline cursor-pointer hover:text-yellow-500"
          >
            {cart.Account.Username}
          </span>
        );
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "PhoneNumber",
      render: (text, cart) => {
        return (
          <span className="text-base">
            {cart.Account.PhoneNumber === null ? (
              <span className="text-yellow-500 italic">
                Chưa có số điện thoại....
              </span>
            ) : (
              <span>{cart.Account.PhoneNumber}</span>
            )}
          </span>
        );
      },
    },
    {
      title: "Địa chỉ",
      dataIndex: "Address",
      render: (text, cart) => {
        return (
          <span className="text-base">
            {cart.Account.Address === null ? (
              <span className="text-yellow-500 italic">
                Chưa có địa chỉ....
              </span>
            ) : (
              <span>{cart.Account.Address}</span>
            )}
          </span>
        );
      },
    },
    {
      title: "Tổng tiền",
      dataIndex: "TotalMoney",
      render: (text, cart) => {
        return (
          <span className="text-base font-medium text-red-500">
            {(cart.TotalMoney * 1).toLocaleString()}{" "}
            <span className="underline">đ</span>
          </span>
        );
      },
    },
    {
      title: "Ngày thanh toán",
      dataIndex: "createdAt",
      render: (text, cart) => {
        return (
          <span className="text-base">
            {moment(cart.createdAt).format("DD/MM/YYYY")}
          </span>
        );
      },
    },
    {
      title: "Chuẩn bị hàng xong",
      dataIndex: "StatusAwait",
      render: (text, cart) => {
        return (
          <div className="flex flex-col justify-center gap-2">
            <div className="flex justify-start gap-2">
              <Checkbox
                checked={cart.StatusAwait}
                disabled={cart.StatusDelivery}
                onChange={(event) => {
                  handleChangeStatusAwait(cart, event.target);
                }}
                style={{ transform: "scale(1.5) mr-4" }}
              />
              Done Chuẩn bị hàng
            </div>
            <div className="flex justify-start gap-2">
              <Checkbox
                checked={cart.StatusDelivery}
                disabled={cart.StatusDelivery}
                onChange={(event) => {
                  handleChangeDelivery(cart, event.target);
                }}
                style={{ transform: "scale(1.5) mr-4" }}
              />
              Đang giao hàng
            </div>
            <div className="flex justify-start gap-2">
              {cart.StatusDelivery ? (
                <Fragment>
                  <Checkbox
                    checked={cart.StatusDone}
                    disabled={cart.StatusDone}
                    onChange={(event) => {
                      handleChangeDone(cart, event.target);
                    }}
                    style={{ transform: "scale(1.5) mr-4" }}
                  />
                  Giao hàng thành công
                </Fragment>
              ) : null}
            </div>
          </div>
        );
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "StatusDone",
      render: (text, cart) => {
        //! 1 done - 2 delivery  3- await
        let status;
        if (cart.StatusDone) {
          status = "Giao hàng thành công";
        } else if (!cart.StatusDone && cart.StatusDelivery) {
          status = "Đang vận chuyển";
        } else if (
          !cart.StatusDone &&
          !cart.StatusDelivery &&
          cart.StatusAwait
        ) {
          status = "Đang chuẩn bị hàng";
        }
        return <span className="text-base text-green-500">{status}</span>;
      },
    },

    {
      title: "",
      dataIndex: "id",
      render: (text, item) => {
        return (
          <div className="flex">
            <button
              className="mx-4 text-green-500 hover:text-green-900"
              title="Xem chi tiết hóa đơn"
              onClick={() => {
                history.push(`${_admin}${_bill}${_detail}/${item.id}`);
              }}
            >
              <AiOutlineMore style={{ fontSize: 30 }} />
            </button>
          </div>
        );
      },
      width: "10%",
    },
  ];
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="flex justify-center">
          <h2 className="text-4xl font-bold text-yellow-500 flex items-center">
            Quản lý hóa đơn
          </h2>
        </div>
        <div className="my-10 flex justify-end">
          <div className="w-1/3">
            <Search
              size="large"
              placeholder="Bạn muốn tìm gì?..."
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>
        <Table dataSource={lstBill} columns={columns} rowKey="id" />;
      </div>
    </Fragment>
  );
}
