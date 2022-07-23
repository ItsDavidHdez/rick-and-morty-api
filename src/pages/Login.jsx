import React from "react";

export const Login = ({ handleChange, login }) => {
  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <div className="form-group">
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <br />
          <button className="btn btn-primary" onClick={() => login()}>
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};
