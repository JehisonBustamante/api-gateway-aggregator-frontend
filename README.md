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
    git clone [https://github.com/JehisonBustamante/gateway-aggregator-frontend.git](https://github.com/JehisonBustamante/gateway-aggregator-frontend.git)
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

## 💡 Filosofía de Diseño

Como futuro **Ingeniero de Software**, mi enfoque no es solo "hacer que el código funcione", sino que la tecnología sea **accesible**.

El mayor desafío de este proyecto fue la **Alfabetización Financiera**: logré transformar números abstractos de la bolsa en frases explicativas. Por ejemplo, en lugar de mostrar solo un precio, el sistema explica que el usuario está viendo el valor de una "rebanada" de la empresa, acercando el