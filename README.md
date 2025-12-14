# 🍕 Pizzería Mamma Mía - Hito 3

Este proyecto es una aplicación web de una pizzería desarrollada como parte del Hito 3 del curso de React en Desafío Latam. El objetivo principal de este hito es demostrar la renderización dinámica de componentes y el manejo básico del estado para simular un carrito de compras.

## Funcionalidades Implementadas

El proyecto cumple con los siguientes requerimientos:

### 1. Vista Principal (`/components/Home.jsx`)
- **Renderizado Dinámico**: La página de inicio muestra una galería de pizzas cargadas desde una fuente de datos (`pizzas.js`).
- **Componente Reutilizable**: Se utiliza un componente `<CardPizza />` para mostrar cada pizza, recibiendo sus datos a través de props.

### 2. Tarjeta de Pizza (`/components/CardPizza.jsx`)
- **Visualización de Props**: Cada tarjeta muestra la imagen, nombre, precio e ingredientes de la pizza.
- **Iteración de Ingredientes**: La lista de ingredientes se renderiza dinámicamente usando etiquetas `<li>` para cada uno, presentados de forma horizontal.

### 3. Carrito de Compras (`/components/Cart.jsx`)
- **Estado del Carrito**: Se utiliza el hook `useState` para manejar los productos del carrito.
- **Listado de Productos**: Muestra los productos agregados con su imagen, nombre, cantidad y subtotal.
- **Interactividad**: Incluye botones para aumentar y disminuir la cantidad de cada producto. Si la cantidad llega a 0, el producto se elimina del carrito.
- **Cálculo de Total**: El valor total de la compra se calcula y actualiza automáticamente con cada cambio en el carrito.

## Tecnologías Utilizadas

*   **React**: Biblioteca principal para la construcción de la interfaz de usuario.
*   **JavaScript (ES6+)**: Lenguaje de programación base.
*   **React-Bootstrap**: Framework de componentes de UI para el diseño y la maquetación.
*   **Vite**: Herramienta de desarrollo para la creación del proyecto React.

## Cómo ejecutar el proyecto

1.  Clona este repositorio en tu máquina local.
2.  Abre una terminal en la carpeta raíz del proyecto.
3.  Instala las dependencias necesarias ejecutando el comando:
    ```bash
    npm install
    ```
4.  Inicia la aplicación en modo de desarrollo con el comando:
    ```bash
    npm run dev
    ```
5.  Abre tu navegador y visita `http://localhost:5173` (o la URL que indique la terminal).# ElisaOrtiz-hito3-pizzeria
