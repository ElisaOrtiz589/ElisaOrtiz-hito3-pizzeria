import CardPizza from "./CardPizza.jsx"
import Header from "./Header.jsx"
import { pizzas } from "./pizzas.js"
 
const Home = () => {

  return (
    <div className="main">
      <Header/>
 
      <div className="d-flex justify-content-center flex-wrap gap-4 p-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            pizza={pizza}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
