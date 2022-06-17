import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ action }) {
  const { register, handleSubmit } = useForm();
  const API_KEY = '4665f64159e3e65e3ad86d7eba4759c3';
  
  const onSubmit = (layer) => {
    action(
      `https://tile.openweathermap.org/map/${layer.layer}/{z}/{x}/{y}.png?appid=${API_KEY}`
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register('layer')}>
        <option value="temp_new">Temperature</option>
        <option value="wind_new">Wind</option>
        <option value="pressure_new">Pressure</option>
      </select>
      <input type="submit" />
    </form>
  );
}
