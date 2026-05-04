<div align="center">

<img src="src/main/resources/static/logoUpdated.png" width="120" alt="ESOFT AI Logo">

# ESOFT AI Assistance

**An intelligent AI-powered chat assistant for ESOFT Metro College Nittambuwa, Sri Lanka**

[![Java](https://img.shields.io/badge/Java-17-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.3.2-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Gradle](https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white)](https://gradle.org/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-API-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square&logo=github-actions)](https://github.com/eamalindu/ESOFT-AI-Assistance)
[![Version](https://img.shields.io/badge/Version-0.0.1--SNAPSHOT-blue?style=flat-square)](https://github.com/eamalindu/ESOFT-AI-Assistance)
[![Author](https://img.shields.io/badge/Author-Malindu_Prabodhitha-ff69b4?style=flat-square&logo=github)](https://github.com/eamalindu)

</div>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Reference](#-api-reference)
- [Predefined Commands](#-predefined-commands)
- [UI Overview](#-ui-overview)
- [Contributing](#-contributing)
- [Author](#-author)

---

## 🧠 About the Project

**ESOFT AI Assistance** is a full-stack web application that brings AI-powered conversational capabilities to ESOFT Metro College Nittambuwa. Built as a showcase for the college's **7th Anniversary**, it integrates Google's **Gemini API** with a polished, animated frontend to deliver a seamless chat experience — complete with text-to-speech, animated backgrounds, and institution-specific knowledge.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🤖 **AI-Powered Chat** | Queries are forwarded to the Google Gemini API for intelligent responses |
| 💬 **Predefined Commands** | Instant, curated answers for ESOFT-specific questions |
| 🔊 **Text-to-Speech** | Responses are read aloud using the Web Speech API |
| 🌐 **3D Animated Background** | Vanta.js globe and dot effects powered by Three.js |
| ✍️ **Markdown Rendering** | AI responses rendered from Markdown to HTML via Showdown.js |
| 🎵 **Background Music** | Ambient audio that plays on load with mute support |
| 📱 **Responsive Design** | Mobile-friendly layout built with Bootstrap 5 |
| 💫 **Smooth Animations** | Scroll-triggered and entrance animations using AOS.js |
| ⏳ **Loading States** | Visual feedback during API calls |
| 🎨 **Custom Styling** | Branded color scheme and custom CSS animations |

---

## 🛠 Tech Stack

### Backend

| Technology | Version | Purpose |
|---|---|---|
| [Java](https://www.oracle.com/java/) | 17 | Core programming language |
| [Spring Boot](https://spring.io/projects/spring-boot) | 3.3.2 | Web framework & dependency injection |
| [Spring Web](https://docs.spring.io/spring-framework/docs/current/reference/html/web.html) | — | REST controller & RestTemplate |
| [Spring DevTools](https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.devtools) | — | Hot reload during development |
| [Gradle](https://gradle.org/) | — | Build automation |
| [JUnit 5](https://junit.org/junit5/) | — | Unit testing |

### Frontend

| Technology | Purpose |
|---|---|
| [Bootstrap 5](https://getbootstrap.com/) | Responsive UI components & layout |
| [jQuery](https://jquery.com/) | AJAX requests & DOM manipulation |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [Vanta.js](https://www.vantajs.com/) | Animated globe & dots background effects |
| [AOS.js](https://michalsnik.github.io/aos/) | Animate on Scroll library |
| [Showdown.js](https://github.com/showdownjs/showdown) | Markdown → HTML converter |
| [Font Awesome](https://fontawesome.com/) | Icon library |
| [Ubuntu Font](https://fonts.google.com/specimen/Ubuntu) | Typography (Google Fonts) |
| Web Speech API | Text-to-speech for AI responses |

### External API

| Service | Usage |
|---|---|
| [Google Gemini API](https://ai.google.dev/) | Large language model for answering user queries |

---

## 📁 Project Structure

```
ESOFT-AI-Assistance/
├── src/
│   ├── main/
│   │   ├── java/lk/esoft/ai/
│   │   │   ├── AiApplication.java          # Spring Boot entry point
│   │   │   ├── AppConfig.java              # Bean configuration (RestTemplate)
│   │   │   ├── GeminiController.java       # REST controller — GET /api/gemini
│   │   │   └── GeminiService.java          # Business logic & Gemini API integration
│   │   └── resources/
│   │       └── static/
│   │           ├── index.html              # Single-page application
│   │           ├── script.js               # Core chat logic & speech
│   │           ├── app.js                  # Application initialisation
│   │           ├── initialize.js           # Vanta.js & AOS setup
│   │           ├── style.css               # Custom styles & animations
│   │           ├── email.js                # Email functionality
│   │           ├── count.js                # Counter animations
│   │           ├── parsemd.js              # Markdown parsing helpers
│   │           ├── external-modalFunction.js # Modal utilities
│   │           └── [vendor libs & assets]  # Bootstrap, jQuery, Three.js, Vanta, AOS, etc.
│   └── test/
│       └── java/lk/esoft/ai/
│           └── AiApplicationTests.java     # Spring Boot context tests
├── build.gradle                            # Gradle build configuration
├── settings.gradle                         # Project name: ai
└── gradlew / gradlew.bat                   # Gradle wrapper scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Java 17** ([Download](https://adoptium.net/))
- **Gradle** (or use the included `./gradlew` wrapper — no install needed)
- A valid **Google Gemini API key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/eamalindu/ESOFT-AI-Assistance.git
   cd ESOFT-AI-Assistance
   ```

2. **Install dependencies** (handled automatically by Gradle on first build)

### Configuration

The application requires two properties to be set. Create or update `src/main/resources/application.properties`:

```properties
# Google Gemini API
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
gemini.api.key=YOUR_GEMINI_API_KEY_HERE
```

> ⚠️ **Never commit your API key to version control.** Use environment variables or a secrets manager in production.

You can also supply the values as environment variables:

```bash
export GEMINI_API_URL=https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent
export GEMINI_API_KEY=your_api_key_here
```

### Running the Application

**Using the Gradle wrapper (recommended):**

```bash
# Linux / macOS
./gradlew bootRun

# Windows
gradlew.bat bootRun
```

**Build a runnable JAR:**

```bash
./gradlew build
java -jar build/libs/ai-0.0.1-SNAPSHOT.jar
```

**Run tests:**

```bash
./gradlew test
```

Once started, open your browser and navigate to:

```
http://localhost:8080
```

---

## 📡 API Reference

### `GET /api/gemini`

Accepts a query string and returns an AI-generated response in JSON format.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | ✅ Yes | The user's question or command |

**Example Request:**

```http
GET /api/gemini?query=What+is+machine+learning
```

**Example Response:**

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Machine learning is a subset of artificial intelligence..."
          }
        ]
      }
    }
  ]
}
```

The response mirrors the Gemini API format so the frontend can parse it uniformly, including for predefined commands.

---

## 💡 Predefined Commands

Certain queries are intercepted server-side and return instant, curated responses without calling the Gemini API:

| Command | Description |
|---|---|
| `who developed you` / `who created you` | Credits the developer |
| `esoft` / `ESOFT` | Information about ESOFT as an institution |
| `Hello!` | Greeting response |
| `Tell me about yourself` | Self-introduction of the AI |
| `/StartUp` | Welcome message from ESOFT AI |
| `/Shutdown` | Triggers a dramatic shutdown sequence with audio |
| `/Pubudushani` | Information about a branch lecturer |
| `/Wageesha` | Information about a branch lecturer |
| `Access Code eamalindu` | Special developer access message |

---

## 🎨 UI Overview

The application is a single-page experience divided into two sections:

1. **Landing Section** — Fullscreen hero with the ESOFT logo, a 7th anniversary message, a typewriter-style tagline, and a "Discover AI Magic" call-to-action button. Background features an animated Vanta.js effect and ambient music.

2. **Chat Section** — A centered, animated search box expands on focus to reveal the query input. Responses appear in a dark Bootstrap card with:
   - The user's query displayed on the right
   - The AI's response rendered as HTML (with Markdown support) on the left
   - A **Speak** button (▶️) to read the response aloud via Web Speech API
   - A **Mute** button (🔇) to stop speech at any time

---

## 🤝 Contributing

Contributions, bug reports, and feature suggestions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 👤 Author

<div align="center">

**Malindu Prabodhitha**

[![GitHub](https://img.shields.io/badge/GitHub-eamalindu-181717?style=for-the-badge&logo=github)](https://github.com/eamalindu)

*Developed for ESOFT Metro College Nittambuwa — 7th Anniversary*

</div>

---

<div align="center">

Made with ❤️ for **ESOFT Metro College Nittambuwa**

</div>
