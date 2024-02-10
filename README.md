# WeatherApp

## Description
WeatherApp is a simple web application that provides current weather information for a given location. It allows users to search for a specific city or use their current location to retrieve real-time weather data. The application displays essential weather details such as temperature, humidity, wind speed, and weather conditions.

## Features
- **Search by City**: Users can enter the name of a city in the search bar to get the current weather information for that location.
- **Detailed Weather Information**: The application provides comprehensive weather details, including temperature, humidity, wind speed, and weather conditions.
- **Responsive Design**: The WeatherApp is designed to be responsive and work seamlessly across different devices and screen sizes.

## Technologies Used
- HTML
- CSS
- JavaScript
- WeatherMap API (for weather data)

## Installation
1. Clone the repository: `git clone https://github.com/IKEENOO/WeatherApp.git`
2. Navigate to the project directory: `cd WeatherApp`
3. Open `index.html` in your preferred web browser.

## Configuration
To retrieve weather data, the application requires an API key from weatherappi.com. Follow these steps to configure the API key:

1. Go to the [OpenWeatherMap website](https://weatherappi.com) and create an account.
2. Once logged in, navigate to your account dashboard and generate an API key.
3. In the `script.js` file, replace `'YOUR_API_KEY'` with your generated API key.

```javascript
const apiKey = 'YOUR_API_KEY';
```

## Usage
- Enter a city name in the search bar and click the search button to retrieve weather information for that location.
