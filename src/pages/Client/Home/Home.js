import React, { useEffect } from "react";
import BannerSlick from "../../../component/Home/BannerSlick";
import Content1 from "../../../component/Home/Content1";
import ProductHome from "../../../component/Product/ProductHome";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductAction } from "../../../redux/Actions/QuanLyProductAction";
import OneProduct from "../../../component/Product/OneProduct";

export default function Home(props) {
  const dispatch = useDispatch();

  const { lstProduct } = useSelector((state) => state.QuanLyProductReducer);

  let productHot = lstProduct.filter(function (item) {
    return item?.Hot == true;
  });

  const renderProduct = () => {
    return lstProduct.slice(2, 10).map((item, index) => {
      return <OneProduct key={index} product={item} />;
    });
  };

  useEffect(() => {
    dispatch(GetAllProductAction());
  }, []);

  return (
    <div className="mt-48">
      <BannerSlick />
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-8">
          <Content1 />
          <ProductHome product={productHot} />
        </div>
      </div>
      <div className="grid grid-cols-12 mb-20">
        <div className="col-start-3 col-span-8">
          <div className="text-center mb-8">
            <div className="uppercase font-bold text-2xl border-b">
              Các sản phẩm mới
            </div>
            <div className="border-t mt-1">
              Mũ bảo hiểm fullface - 3/4 - 1/2, Áo Gió TNF, Găng Tay Chống Nước,
              Camera Hành Trình
            </div>
          </div>
          <div className="grid grid-cols-4 text-center">{renderProduct()}</div>
        </div>
      </div>
    </div>
  );
}
