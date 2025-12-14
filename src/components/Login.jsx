import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta'; // 1. Importamos nuestro nuevo componente Alerta

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 2. Reemplazamos el estado 'error' por estados más descriptivos
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const validarDatos = (e) => {
    e.preventDefault()

    // Reiniciamos los mensajes en cada intento
    setMensaje('');
    setTipoMensaje('');

    // Validaciones
    if(email === "" || password === ""){
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje('danger');
      return;
    }
    if(password.length < 6){
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje('danger');
      return;
    }

    // Si todo es correcto, mostramos mensaje de éxito y limpiamos los campos
    setMensaje(`¡Bienvenido, ${email}!`);
    setTipoMensaje('success');
    setEmail('');
    setPassword('');
  }


  return (
    // Añadimos 'noValidate' para que la validación del navegador no interfiera con la nuestra.
    <Form className='formulario-login' onSubmit={validarDatos} noValidate>
      {/* 2. Usamos el componente Alerta y le pasamos el mensaje y el tipo como props */}
      <Alerta mensaje={mensaje} tipo={tipoMensaje} />
      
      <Form.Group className="email mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          onChange = {(e) => setEmail(e.target.value)} 
          value={email} 
          required
        />
      </Form.Group>

      <Form.Group className="password mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        onChange = {(e) => setPassword(e.target.value)} 
        value={password} 
        required
      />
      </Form.Group>
      
      <Button variant="primary" type="submit">Enviar</Button>
    </Form>
  );
}

export default Login;