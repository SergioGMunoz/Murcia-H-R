# 🏨 Murcia H&R - Hoteles y Restaurantes

**Murcia H&R** es una aplicación web moderna desarrollada en Astro que permite explorar y descubrir hoteles y restaurantes de la Región de Murcia. La aplicación consume datos de la API oficial de turismo de Murcia para ofrecer información actualizada y completa sobre establecimientos hoteleros y gastronómicos.

<div align="center">

> **⚠️ PROYECTO EN CONSTRUCCIÓN - NO ESTÁ LISTO TODAVÍA ⚠️**

![Desktop](./img_readme/MurciaH&R.png)

*Descubre los mejores hoteles y restaurantes de la Región de Murcia*

[![Astro](https://img.shields.io/badge/Astro-5-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
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

### **Framework y Herramientas**
- **Astro** - Framework principal con renderizado estático
- **React** - Componentes interactivos (Islands Architecture)
- **TypeScript** - Tipado estático
- **CSS Modules** - Estilos encapsulados por componente

### **APIs y Datos**
- **API Turismo Murcia** - Datos oficiales de hoteles y restaurantes
- **Fetch API** - Consumo de APIs REST
- **Validación de Imágenes** - Sistema custom de verificación de URLs


## 📁 Estructura del Proyecto

```
src/
├── assets/
│   └── img/            # Imágenes y recursos estáticos
├── components/
│   ├── List/           # Componentes de listado (Astro)
│   ├── navbar/         # Barra de navegación (Astro)
│   ├── Promo/          # Carousel promocional (React Island)
│   └── ui/             # Componentes UI generales (Astro)
├── layouts/            # Layouts base
├── lib/
│   └── api/            # Lógica de API y fetching
└── pages/              # Páginas (enrutamiento basado en archivos)
```

## 🚀 Como probar

### **Requisitos**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
```

### **Instalación**
```bash
npm install          # Instalar dependencias
npm run dev          # Iniciar servidor de desarrollo (localhost:4321)
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
```

## 📝 Migración React → Astro

Este proyecto fue migrado exitosamente de React a Astro:
- ✅ Todos los componentes convertidos a sintaxis Astro
- ✅ Estilos CSS integrados en cada componente
- ✅ Carousel implementado como React Island
- ✅ Variables en inglés y código sin comentarios
- ✅ Funcionalidades originales mantenidas
