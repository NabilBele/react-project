import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, DeleteCard } from "../Redux/CounterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(DeleteCard())}
        >
          Increment
        </button>
        <span>{count.id}</span>
        <button
          id="1"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
