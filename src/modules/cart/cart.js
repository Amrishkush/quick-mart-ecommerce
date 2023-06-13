import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  // eslint-disable-next-line
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + item?.price * item?.quantity;
    }, 0);
    setTotal(total);
  }, [carts]);

  const handleInc = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  const handleDec = (id) => {
    const updateCart = carts.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart"); //every time we are rendering the things so every time we click its reloading page to update the record in local storage we dont have backend
  };

  const removeProduct = (id) => {
    const updateCart = carts.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updateCart));
    navigate("/cart");
  };

  if (carts?.length === 0) return <div>Your shopping cart is empty</div>;
  return (
    <div className="card">
      <div className="row">
        <div className="col-md-8 cart">
          <div className="title">
            <div className="row">
              <div className="col">
                <h4>
                  <b>Shopping Cart</b>
                </h4>
              </div>
              <div className="col align-self-center text-right text-muted">
                {carts?.length} items
              </div>
            </div>
          </div>
          {carts?.map((cart) => {
            return (
              <div className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2">
                    <img
                      className="img-fluid"
                      alt={cart?.title}
                      src={cart?.image}
                    />
                  </div>
                  <div className="col">
                    <div className="row text-muted">{cart?.category}</div>
                    <div className="row">{cart?.title}</div>
                  </div>
                  <div className="col d-inline-flex justify-content-center align-items-center">
                    <Link
                      className="p-2 fs-4 pe-auto text-decoration-none"
                      onClick={() => handleDec(cart?.id)}
                    >
                      {" "}
                      -{" "}
                    </Link>
                    <input
                      className="border-2 border-black text-center mt-auto mb-auto"
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "13px",
                      }}
                      type="text"
                      value={cart?.quantity}
                    ></input>
                    <Link
                      className="p-1 fs-5 pe-auto text-decoration-none"
                      onClick={() => handleInc(cart?.id)}
                    >
                      {" "}
                      +{" "}
                    </Link>
                  </div>
                  <div className="col">${cart?.price}</div>
                  <div className="col">
                    ${(cart?.price * cart?.quantity).toFixed(2)}
                    <button
                      className="btn btn-danger"
                      style={{
                        margin: "auto 1rem auto 1rem",
                        backgroundColor: "darkred",
                      }}
                      onClick={() => removeProduct(cart?.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="back-to-shop">
            <Link to={"/products"}>
              <span className="text-muted">⬅ Continue Shopping</span>
            </Link>
          </div>
        </div>
        <div className="col-md-4 summary">
          <div>
            <h5>
              <b>Summary</b>
            </h5>
          </div>
          <hr />
          <div className="row">
            <div className="col" style={{ paddingLeft: "0" }}>
              {carts?.length} ITEMS
            </div>
            <div className="col text-right">${total.toFixed(2)}</div>
          </div>
          <form>
            <p>SHIPPING</p>
            <select>
              <option className="text-muted">
                Standard-Delivery- &euro;5.00
              </option>
            </select>
            <p>GIVE CODE</p>
            <input id="code" placeholder="Enter your code" />
          </form>
          <div
            className="row"
            style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
          >
            <div className="col">TOTAL PRICE</div>
            <div className="col text-right">${total.toFixed(2)}</div>
          </div>
          <button className="btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
