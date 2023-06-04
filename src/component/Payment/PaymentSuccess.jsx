import React, { useEffect, useRef, useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../../App";
import { CheckoutAction } from "../../redux/Actions/QuanLyCheckoutAction";

export default function PaymentSuccess(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("STORE"));
    console.log(data, "data");
    dispatch(CheckoutAction(data));
  }, []);

  //! Function

  return (
    <div className="text-center">
      <div className="my-9 flex justify-center">
        <CheckCircleOutlined style={{ fontSize: "100px", color: "green" }} />
      </div>
      <p className="text-2xl">Thanh Toán Thành Công</p>
      <button
        onClick={() => {
          history.push("/");
        }}
        className="text-xl text-yellow-300 "
      >
        Quay lại trang trang chủ
      </button>
    </div>
  );
}
