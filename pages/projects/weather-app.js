import axios from "axios";
import Styles from "./weather-app.module.css";
import { useEffect, useState } from "react";
function WeatherApp() {
  const API_key = String("547a1af46949d0147ca97ed178d682fe");
  const [search, setSearch] = useState("rome");
  const [city, setCity] = useState("rome");
  const [update, SetUpdate] = useState(false);
  const [weatherData, setWeather] = useState([]);
  const [image, setImage] = useState(
    "https://wallpaperaccess.com/full/106956.jpg"
  );

  const [temperatures, setTemp] = useState([]);
  useEffect(() => {
    setCity(search);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=${API_key}`
      )
      .then((response) => {
        setWeather(response);
        setTemp(response.data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });
    //.then(
    // axios
    //  .get(
    // `https://api.unsplash.com/search/photos?client_id=IM1NXmGdizLj1_2A_-63_x4Wv16kF9XiXfpywEGJkGA&page=1&query=%22rome%22`
    //)
    // .then((response) => {
    //  setWeather(response);
    //})
    //);
    console.log(weatherData);
  }, [update]);

  return (
    <div
      className={Styles["Full-Container"]}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={Styles["app-container"]}>
        <form>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Rome"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              SetUpdate(!update);
            }}
          >
            fsdf
          </button>
        </form>
        <h1>{city}</h1>
        <h2>{temperatures} &#8457; </h2>
      </div>
    </div>
  );
}
export default WeatherApp;
