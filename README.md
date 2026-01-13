# 🏨 Murcia H&R - Hoteles y Restaurantes

**Murcia H&R** es una aplicación web moderna desarrollada en React que permite explorar y descubrir hoteles y restaurantes de la Región de Murcia. La aplicación consume datos de la API oficial de turismo de Murcia para ofrecer información actualizada y completa sobre establecimientos hoteleros y gastronómicos.

<div align="center">

![Desktop](./img_readme/MurciaH&R.png)

*Descubre los mejores hoteles y restaurantes de la Región de Murcia*

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5-0081CB?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

</div>



---

## ✨ Funcionalidades Actuales

### 🎯 **Implementadas**
-  **Listado de Hoteles**: Visualización completa de hoteles disponibles
-  **Carousel Promocional**: Showcase interactivo con imágenes y reservas
-  **Validación de Imágenes**: Sistema inteligente de validación de URLs de fotos
-  **Diseño Responsive**: Optimizado para móviles, tablets y desktop
-  **UI/UX Moderna**: Interfaz elegante con Material-UI
-  **Navegación Rápida**: Componentes optimizados con React hooks
-  **Estados de Carga**: Loaders y manejo de errores integrados


## 🚧 Cambios Pendientes

### 🔄 **En Desarrollo**
- [ ]  **Listado de Restaurantes**: Integración completa de establecimientos gastronómicos
- [ ]  **Sistema de Filtros**: Filtrado por ubicación, tipo, precio, valoración


### 🎯 **Futuras Mejoras**
- [ ]  **Integración de Mapas**: Visualización geográfica de establecimientos
- [ ]  **Sistema de Valoraciones**: Reseñas y puntuaciones de usuarios
- [ ]  **Favoritos**: Guardar establecimientos preferidos
- [ ]  **Enlaces de Reserva**: Integración con sistemas de booking

## 🛠️ Tecnologías Utilizadas

### **Herramientas de Desarrollo**
- **ESLint** - Linting de código JavaScript
- **React Hooks** - useState, useEffect, useCallback
- **Fetch API** - Consumo de APIs REST

### **APIs y Datos**
- **API Turismo Murcia** - Datos oficiales de hoteles y restaurantes
- **Validación de Imágenes** - Sistema custom de verificación de URLs


## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── List/           # Componentes de listado
│   ├── navbar/         # Barra de navegación
│   ├── Promo/          # Carousel promocional
│   └── ui/             # Componentes UI generales
├── hooks/              # Custom hooks
├── pages/              # Páginas principales
├── utils/              # Utilidades y helpers
└── assets/             # Recursos estáticos
```

## 🚀 Como probar

### **Requisitos**
```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/murcia-h-r.git

# Navegar al directorio
cd murcia-h-r

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```
