const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const suggestionsList = document.getElementById('suggestions');
const currentWeather = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecastContainer');
const forecastTitle = document.querySelector('.forecast-title');
const themeToggle = document.getElementById('themeToggle');

let currentTheme = 'light';

// Theme Toggle
themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    themeToggle.innerHTML = currentTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Live Suggestions
cityInput.addEventListener('input', () => {
    const query = cityInput.value.trim();
    if (query.length < 2) {
        suggestionsList.style.display = 'none';
        return;
    }

    clearTimeout(window.timeout);
    window.timeout = setTimeout(async () => {
        try {
            const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=8`);
            const data = await res.json();

            suggestionsList.innerHTML = '';
            if (data.results && data.results.length) {
                data.results.forEach(city => {
                    const li = document.createElement('li');
                    li.textContent = `${city.name}, ${city.country}`;
                    li.onclick = () => selectCity(city.name);
                    suggestionsList.appendChild(li);
                });
                suggestionsList.style.display = 'block';
            }
        } catch (e) {}
    }, 280);
});

function selectCity(city) {
    cityInput.value = city;
    suggestionsList.style.display = 'none';
    getWeather(city);
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) getWeather(city);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsList.style.display = 'none';
    }
});

async function getWeather(city) {
    currentWeather.style.display = 'block';
    currentWeather.innerHTML = `<p class="text-center fs-4">Getting weather data...</p>`;
    forecastContainer.innerHTML = '';

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();

        if (!geoData.results?.length) throw new Error("City not found");

        const { latitude, longitude, name, country } = geoData.results[0];

        const url = `https://open-weather13.p.rapidapi.com/fivedaysforcast?latitude=${latitude}&longitude=${longitude}&lang=EN`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'YOUR_API',
                'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();

        renderCurrent(data, name, country);
        renderForecast(data);
    } catch (err) {
        currentWeather.innerHTML = `<p class="text-danger text-center fs-5">Error: ${err.message}</p>`;
    }
}

function renderCurrent(data, name, country) {
    const today = data.list[0];
    const temp = (today.main.temp - 273.15).toFixed(1);

    currentWeather.innerHTML = `
        <div class="d-flex flex-column align-items-center">
            <h2 class="display-5">${name}, ${country}</h2>
            <img src="https://openweathermap.org/img/wn/${today.weather[0].icon}@4x.png" width="160" class="my-3">
            <h1 class="display-1 fw-bold">${temp}°C</h1>
            <p class="fs-4 text-capitalize">${today.weather[0].description}</p>
        </div>
    `;
}

function renderForecast(data) {
    forecastContainer.innerHTML = '';
    forecastTitle.style.display = 'block';
    forecastContainer.style.display = 'flex';

    data.list.forEach((day, i) => {
        if (i % 8 !== 0) return;
        const date = new Date(day.dt * 1000);
        const temp = (day.main.temp - 273.15).toFixed(1);

        const div = document.createElement('div');
        div.className = "forecast-day";
        div.innerHTML = `
            <p class="mb-1">${date.toLocaleDateString('en-US', {weekday:'short'})}</p>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" width="65">
            <h3 class="mt-2 mb-1">${temp}°C</h3>
            <small>${day.main.humidity}%</small>
        `;
        forecastContainer.appendChild(div);
    });
}