import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
const stylesb = {
  textDecoration: "none",
  color: "white",
};

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (dataLogin) => {
    const resp = await fetch(
      `https://5000-anyelinapar-proyectofin-t87xjlc6kxy.ws-us46.gitpod.io/LoginEmpresa`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataLogin),
      }
    )
      .then((res) => res.json())
      .then((response) => {
        console.log("Success:", response);
        Swal.fire("Inicio de Sesión Exitoso");
        sessionStorage.setItem("jwt-token", response.acces_token);
      })
      .catch((error) => console.error("Error:", error));

    if (!resp.ok) throw Error("There was a problem in the login request");

    if (resp.status === 401) {
      throw "Invalid credentials";
    } else if (resp.status === 400) {
      throw "Invalid email or password format";
    }
    const data = await resp.json();
    // save your token in the localStorage
    //also you should set your user into the store using the setStore function

    return data;
  };

  return (
    <div className="container w-50 mt-3 ">
      <h1 className="text-center">Bienvenido</h1>
      <h3 className="text-center">Inicia Sesion</h3>
      <form className="pt-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Correo Electronico:
          </label>
          <span class="input-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("username", {
                required: true,
                pattern:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              })}
            />
            {errors.username?.type === "required" && (
              <span
                className="input-group-text bg-white border-start-0"
                id="basic-addon1"
              >
                <AiFillCloseCircle className="fs-4 text-danger" />
              </span>
            )}
          </span>
          {errors.username?.type === "pattern" && (
            <label className="text-danger">
              El formato del email no es valido
            </label>
          )}
          {errors.username?.type === "required" && (
            <label className="text-danger">Ingresa tu correo electronico</label>
          )}
        </div>
        <div className="mb-3 pt-3">
          <label for="exampleInputPassword1" className="form-label">
            Contraseña:
          </label>
          <span class="input-group">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password?.type === "required" && (
              <span
                className="input-group-text bg-white border-start-0"
                id="basic-addon1"
              >
                <AiFillCloseCircle className="fs-4 text-danger" />
              </span>
            )}
          </span>
          {errors.password?.type === "required" && (
            <label className="text-danger">Ingresa tu contraseña</label>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("remember")}
          />
          <label className="form-check-label" for="exampleCheck1">
            Recuerdame
          </label>
        </div>
        <input
          type="submit"
          value="Iniciar sesión"
          className="bg-primary text-white border-0"
        ></input>
      </form>
    </div>
  );
};

export default Login;
