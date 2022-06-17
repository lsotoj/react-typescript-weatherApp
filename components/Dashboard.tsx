import * as React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import History from './History';
import Mapp from './Mapp'
import '../styles/ciudad.css';


const api = {
  key: '4665f64159e3e65e3ad86d7eba4759c3',
  url: 'https://api.openweathermap.org/data/2.5/weather?q=', //{city name}&appid={API key}',
};
const API_HISORY = { url: `api.openweathermap.org/data/2.5/forecast?` }; //lat=35&lon=139&appid=${api.key}`

export default function Dashboard() {
  const [region, setRegion] = React.useState('Guatemala');
  const [temp, setTemp] = React.useState();
  const [humidity, setHumidity] = React.useState();
  const [temperatura, setTemperatura] = React.useState();
  const [name, setName] = React.useState('Guatemala City');
  const [lon, setLon] = React.useState(-90.5232878);
  const [lat, setLat] = React.useState(14.6297081);
  const [days, setDays] = React.useState([{ 
    dt_txt: '2022-06-16 15:00:00',
    main: {humidity: humidity} 
  }]);

  React.useEffect(() => {
    fetch(`${api.url}${region}&appid=${api.key}&units=imperial`)
      .then((res) => res.json())
      .then((result) => {
        setTemp(result.weather[0].description);
        setHumidity(result.main.humidity);
        setTemperatura(result.main.temp);
        setName(result.name);
        setLon(result.coord.lon);
        setLat(result.coord.lat);

        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${api.key}`
        )
          .then((res) => res.json())
          .then((result) => {
            setDays(result.list);
          });
      });

    return function history(PermanentDays) {
      setDays(PermanentDays);
    };
  }, [region]);

  function handleChange(opt) {
    setRegion(opt.target.value ?? 'Guatemala');
  }

  return (
    <div>
      <div className="tituloCiudad"> Weather In {name}</div>
      <div className="measurements">
        <div className="measure description"> {temp} </div>
        <div className="measure"> Humidity: {humidity} %</div>
        <div className="measure"> Temperature: {temperatura} °F</div>
        
        {days && <History days={days} />}
      </div>
      <div className="inputComponent">
        <label >
          Region:
          <input className='inputText' name="ciudad" onChange={handleChange} />
        </label>
      </div>
      <Mapp lat={lat} lon={lon} />
    </div>
  );
}
