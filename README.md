# Clima • Weather App

A sleek, responsive, and modern weather web application built with **Vanilla JavaScript**, **Bootstrap 5**, and powered by the **Open-Meteo Geocoding API** and **OpenWeather API via RapidAPI**.

Clima allows users to search for any city worldwide, view real-time weather conditions, and check a detailed 5-day forecast — all within a beautiful glassmorphism-inspired interface with smooth dark/light mode transitions.

---

## 🌟 Features

* **Live City Search & Suggestions** — Get real-time city suggestions as you type using the Open-Meteo Geocoding API.
* **Current Weather** — View the current temperature, weather conditions, and dynamic weather icons for the selected city.
* **5-Day Forecast** — Plan ahead with a horizontal scrolling 5-day forecast including humidity levels and weather conditions.
* **Dark / Light Mode** — Seamlessly toggle between light and dark themes with smooth visual transitions.
* **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
* **Modern UI** — Features a clean glassmorphism-inspired design with elegant animations and shadows.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3
* **Styling:** Bootstrap 5, CSS Variables, Glassmorphism Effects
* **Logic:** Vanilla JavaScript (ES6+, Async/Await, DOM Manipulation)
* **Icons:** Font Awesome
* **APIs:**

  * Open-Meteo Geocoding API
  * OpenWeather API via RapidAPI

---

## 📂 Project Structure

```text
Clima-Weather-App/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and theme management
├── script.js       # Application logic and API integration
└── README.md       # Project documentation
```

---

## 🚀 Quick Setup

1. **Clone or download** this repository.
2. Open the project folder in your preferred code editor.
3. Open `script.js` and replace `'YOUR_API'` with your valid **RapidAPI key**.

```javascript
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'YOUR_API',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};
```

4. Save the file.
5. Open `index.html` in any modern web browser.

---

## 🔑 Getting a RapidAPI Key

1. Visit [RapidAPI](https://rapidapi.com/).
2. Create an account or log in.
3. Subscribe to the **OpenWeather API**.
4. Copy your API key.
5. Paste it into `script.js` in place of `'YOUR_API'`.

---

## 📱 How to Use

1. Type a city name in the search bar.
2. Select a city from the live suggestions.
3. View the current weather details.
4. Scroll through the 5-day forecast.
5. Toggle between dark and light mode using the theme button.

---

## ✨ UI Highlights

* **Glassmorphism Design** with blurred translucent cards.
* **Gradient Backgrounds** for a premium modern look.
* **Smooth Hover Animations** on forecast cards.
* **Dynamic Theme Switching** with CSS variables.
* **Horizontal Forecast Scrolling** for better mobile usability.

---

## 🌍 API Endpoints Used

### Open-Meteo Geocoding API

Used for fetching city suggestions and geographical coordinates.

```text
https://geocoding-api.open-meteo.com/v1/search
```

### OpenWeather API via RapidAPI

Used for fetching current weather and 5-day forecast data.

```text
https://open-weather13.p.rapidapi.com/fivedaysforcast
```

---

## 🔮 Future Improvements

* Add hourly weather forecasts.
* Display wind speed, pressure, and UV index.
* Integrate geolocation-based weather detection.
* Add animated weather backgrounds.
* Support multiple languages.
* Save recently searched cities in local storage.

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository, make improvements, and submit a pull request.

---

## 👩‍💻 Author

**Sadia Rahman Niha**

* GitHub: [srniha08](https://github.com/srniha08)

---

⭐ If you like this project, consider giving it a **star** on GitHub!
