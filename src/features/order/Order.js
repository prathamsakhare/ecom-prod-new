import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectOrders } from "./orderSlice";

export default function Order() {
  const orders = useSelector(selectOrders);

  return (
    <div>
      <div></div>
    </div>
  );
}
