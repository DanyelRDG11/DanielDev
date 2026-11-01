


const productos = [
    {
        id: 1,
        nombre: 'Notebook Pro',
        descripcion: 'Notebook de alto rendimiento para trabajo y estudio.',
        precio: 1250000,
        categoria: 'Computadoras',
        imagen: `${import.meta.env.BASE_URL}imagenes/notebook.jpg`
    },
    {
        id: 2,
        nombre: 'Smartphone Galaxy',
        descripcion: 'Smartphone moderno con excelente rendimiento.',
        precio: 850000,
        categoria: 'Celulares',
        imagen: `${import.meta.env.BASE_URL}imagenes/smartphone.jpg`
    },
    {
        id: 3,
        nombre: 'Tablet Pro',
        descripcion: 'Tablet ideal para estudiar, trabajar y entretenerse.',
        precio: 620000,
        categoria: 'Tablets',
        imagen: `${import.meta.env.BASE_URL}imagenes/tablet.jpg`
    },
    {
        id: 4,
        nombre: 'Auriculares Wireless',
        descripcion: 'Auriculares inalambricos con sonido envolvente.',
        precio: 180000,
        categoria: 'Accesorios',
        imagen: `${import.meta.env.BASE_URL}imagenes/auriculares.jpg`
    },
    {
        id: 5,
        nombre: 'Mouse Gamer',
        descripcion: 'Mouse inalambrico diseñado para precision y comodidad.',
        precio: 75000,
        categoria: 'Accesorios',
        imagen: `${import.meta.env.BASE_URL}imagenes/mouse.jpg`
    }
];

export default productos;
