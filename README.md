# 🚀 Gateway Aggregator - Personal Dashboard

Este proyecto es un **Dashboard Inteligente** diseñado para centralizar información crítica en tiempo real: clima local, indicadores financieros (Acciones e IPSA) y noticias de actualidad. Construido como parte de un ecosistema de microservicios, este frontend consume una API personalizada para ofrecer una experiencia de usuario (UX) simplificada, rápida y con un diseño de alto nivel.

---

## ✨ Características Principales

* **🌦️ Clima Dinámico:** Interfaz que cambia de color, iconografía y gradientes según la condición meteorológica de Santiago (Soleado, Nublado, Lluvia, etc.).
* **📈 Mercado Financiero Humano:** Visualización de acciones chilenas con una **capa de interpretación en lenguaje natural**. Utiliza analogías simples para explicar conceptos financieros complejos a usuarios no técnicos.
* **📰 Feed de Noticias:** Sistema de noticias paginado que consume Google News, permitiendo navegación fluida y acceso directo a las fuentes originales en pestañas nuevas.
* **🎨 Diseño Premium:** Estética *Dark Mode* moderna utilizando Tailwind CSS, con patrones geométricos sutiles, gradientes radiales y animaciones de estado (pulsing status) para indicar la conexión con el servidor.
* **🏗️ Arquitectura Desacoplada:** Frontend construido en **SvelteKit 5** que se comunica de forma asíncrona con un Backend en **FastAPI**.

---

## 🛠️ Tech Stack

### Frontend
* **SvelteKit 5**: Uso de Runes (`$derived`, `$props`) para una reactividad moderna.
* **TypeScript**: Tipado estricto para asegurar la integridad de los datos de la API.
* **Tailwind CSS**: Estilizado mediante clases utilitarias y diseño responsivo.

### Backend (Consumido)
* **FastAPI (Python)**: Procesamiento eficiente de datos.
* **yfinance**: Obtención de datos bursátiles en tiempo real.
* **Feedparser**: Procesamiento de feeds RSS de noticias.

---

## 🚀 Instalación y Uso Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/JehisonBustamante/gateway-aggregator-frontend.git
    cd gateway-aggregator-frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar la API:**
    Asegúrate de que el backend de Python esté activo. Verifica la URL de conexión en `src/routes/+page.ts`.

4.  **Iniciar modo desarrollo:**
    ```bash
    npm run dev
    ```

---

## 🌐 Despliegue
Para desplegar en producción, se recomienda usar Vercel o Netlify. Asegúrate de configurar las variables de entorno para la URL del backend.
```bash
npm run build
npm run preview
```
---
## 🤝 Contribuciones
¡Contribuciones son bienvenidas! Si deseas mejorar el proyecto, por favor sigue estos
pasos:
1.  Fork el repositorio.
2. Crea una nueva rama para tu feature (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva feature'`).
4. Push a la rama (`git push origin feature/nueva-feature`).
5. Abre un Pull Request. 
6. Describe tus cambios y espera la revisión.
7. Una vez aprobado, tu PR será mergeado al proyecto principal.
8. ¡Gracias por contribuir!
