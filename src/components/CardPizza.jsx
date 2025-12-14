import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const CardPizza = ({ pizza }) => {
  const { name, price, ingredients, img } = pizza;
  
  const formatPrice = (value) => {
    return value.toLocaleString('es-CL');
  };

  return (
    
    <Card style={{ width: '23rem' }} className="mx-auto">
      
      <Card.Img variant="top" src={img} />
      <Card.Body>
        
        <Card.Title className="text-capitalize fw-bold text-start">{name}</Card.Title>
        <hr />
        
        <Card.Text className="text-center text-muted">
          Ingredientes:
        </Card.Text>
                
        <div className="d-flex align-items-center text-start">
          <span className="me-2">🍕</span>
          <ul className="list-inline mb-0">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-inline-item text-capitalize fs-7 me-2">{ingredient}{index < ingredients.length - 1 ? ',' : ''}</li>
            ))}
          </ul>
        </div>

        <hr />
        
        <Card.Text className="text-center h4">
          Precio: ${formatPrice(price)}
        </Card.Text>
        
        <div className="d-flex justify-content-between">
            <Button variant="outline-dark">Ver más <span className="ms-1">👀</span></Button>
            <Button variant="dark">Añadir <span className="ms-1">🛒</span></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardPizza;