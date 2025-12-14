import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alerta from './Alerta'; // 1. Importamos nuestro nuevo componente Alerta

const Register = () => { // 2. Cambiamos el nombre del componente a Register para que coincida con el nombre del archivo.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // 3. Vamos a manejar los mensajes de una forma más descriptiva.
  //    - 'mensaje' guardará el texto a mostrar.
  //    - 'tipoMensaje' guardará si es de éxito ('success') o error ('danger').
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const validarDatos = (e) => {
    e.preventDefault()

    // Reiniciamos los mensajes en cada intento de envío
    setMensaje('');
    setTipoMensaje('');

    // Validaciones
    if(email === "" || password === "" || confirmPassword === ""){
      setMensaje("Todos los campos son obligatorios.");
      setTipoMensaje('danger');
      return;
    }
    if(password.length < 6){
      setMensaje("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje('danger');
      return;
    }
    if(password !== confirmPassword){
      setMensaje("Las contraseñas no coinciden.");
      setTipoMensaje('danger');
      return;
    }

    // Si todas las validaciones pasan, el formulario se envía correctamente.
    setMensaje("Registro exitoso. ¡Bienvenido!");
    setTipoMensaje('success');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    // Añadimos 'noValidate' para que nuestra validación de React siempre se ejecute.
    <Form className='formulario-register' onSubmit={validarDatos} noValidate>

      {/* 2. Usamos el componente Alerta y le pasamos el mensaje y el tipo como props */}
      <Alerta mensaje={mensaje} tipo={tipoMensaje} />

      {/*email*/}
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
      
      {/*password*/}
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

      {/*confirmar password*/}
        <Form.Group className="confirm-password mb-3" controlId="formBasicPassword">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Password" 
          onChange = {(e) => setConfirmPassword(e.target.value)} 
          value={confirmPassword} 
          required
          />
        </Form.Group>
      
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Register; // 5. Exportamos el componente con su nuevo nombre.