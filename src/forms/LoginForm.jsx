import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ setUser }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => setUser({ name: data.name });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2>Inicio de sesión</h2>

      <input
        type="text"
        placeholder="Nombre"
        {...register("name", { required: "El nombre es requerido" })}
      />
      {errors.name && <small className="error">{errors.name.message}</small>}

      <input
        type="email"
        placeholder="Email"
        {...register("email", { 
          required: "Correo requerido",
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Correo no válido" }
        })}
      />
      {errors.email && <small className="error">{errors.email.message}</small>}

      <input
        type="password"
        placeholder="Contraseña"
        {...register("password", { required: "La contraseña es requerida", minLength: { value: 6, message: "Minimo 6 caracteres" } })}
      />
      {errors.password && <small className="error">{errors.password.message}</small>}

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
