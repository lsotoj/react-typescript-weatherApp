import * as React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import '../styles/days.css'

export default function History({ days }) {
  let week = [];
  for (let i = 0; i < days.length; i = i + 5) {
    week.push(days[i]);
  }
  return (
    <div className='daysContainer'>
      {week.map((day, p) => (
        <div key={p} className='dayContainer'>
        <div>{day.dt_txt} </div>
        <div>{day.main.humidity} % </div>
        <div className='tempText'>{day.main.temp} °F </div>
        </div>
      ))}
    </div>
  );
}
