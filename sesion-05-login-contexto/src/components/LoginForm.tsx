import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label>Email</label>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <label>Contraseña</label>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Iniciar sesion</button>
      </form>
    </div>
  );
};

export default LoginForm;
