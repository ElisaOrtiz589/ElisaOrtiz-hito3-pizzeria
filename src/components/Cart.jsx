import { useState } from "react";
import { Button } from "react-bootstrap";
import { pizzaCart } from "./pizzas.js";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const formatPrice = (value) => {
    return value.toLocaleString("es-CL");
  };

  const handleIncrement = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleDecrement = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.count > 0) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    }).filter(item => item.count > 0); // Elimina los items con cantidad 0
    setCart(newCart);
  };

  // Calcula el total usando reduce
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <div className="p-5 bg-light">
      <div className="bg-white p-4">
        <h4 className="mb-4">Detalles del pedido:</h4>
        {cart.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <img src={item.img} alt={item.name} style={{ width: '80px' }} />
              <h6 className="text-capitalize ms-3 mb-0">{item.name}</h6>
            </div>
            <div className="d-flex align-items-center">
              <h6 className="mb-0 me-3 text-success">
                ${formatPrice(item.price * item.count)}
              </h6>
              <Button variant="outline-danger" onClick={() => handleDecrement(item.id)}>-</Button>
              <span className="mx-2 fw-bold">{item.count}</span>
              <Button variant="outline-primary" onClick={() => handleIncrement(item.id)}>+</Button>
              
            </div>
          </div>
        ))}

        <hr />

        <div className="d-flex flex-column align-items-start">
          <h3 className="mb-3">Total: ${formatPrice(total)}</h3>
          <Button variant="dark">
            Pagar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
