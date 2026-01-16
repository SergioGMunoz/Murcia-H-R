# 🏨 Murcia H&R - Hoteles y Restaurantes

Aplicación web desarrollada en React que permite explorar hoteles de la Región de Murcia y descubrir restaurantes cercanos a estos.

La aplicación consume datos oficiales de la API Turismo de Murcia, muestra información con mapas interactivos, filtrado y sistema de geolocalización mediante coordenadas UTM.


![Desktop](./img_readme/MurciaH&R.png)

*Descubre los mejores hoteles y restaurantes de la Región de Murcia*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5-0081CB?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![Figma](https://img.shields.io/badge/Figma-Design-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://figma.com/)
[![Git](https://img.shields.io/badge/Git-Control%20Versiones-F05032?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)

---

## ✨ Funcionalidades Actuales

- Listado de Hoteles
- Detalle de Hotel
- Integración de Restaurantes
- Mapas Interactivos
- Filtrado por Código Postal
- Conversión de Coordenadas UTM
- React Router
- Paginación
- Carousel Promocional
- Validación de Imágenes
- Diseño Responsive
- Estilos CSS Personalizados
- Navegación Rápida
- Estados de Carga
- Consulta de APIs

## 🚧 Pendientes

- Tiempo Meteorológico

## 🎯 Futuras Mejoras

- Sistema de Filtros Avanzados
- Búsqueda de Hoteles
- Detalle de Restaurantes
- Perfil de Usuario
- Sistema de Reservas en Línea
- Valoraciones y Comentarios

## 🛠️ APIs y Servicios

- API Turismo Murcia (Hoteles)
- API Turismo Murcia (Restaurantes)
- Google Maps API
- UTM Library
- Validación de Imágenes

## 📁 Estructura del Proyecto

```
src/
├── api/               
├── components/         
│   ├── List/          # Componentes de listado y paginación
│   ├── Map/           # Componentes de mapas 
│   ├── navbar/        # Barra de navegación
│   ├── Promo/         # Carousel promocional
│   └── ui/            # Componentes generales
├── hooks/             
├── pages/             
├── utils/             
└── assets/           
    └── img/         
```

## 🚀 Como probar

```bash
# Clona
git clone https://github.com/tu-usuario/murcia-h-r.git

# Instala NODE
cd murcia-h-r
npm install

# Despliega en servidor
npm run dev
```
