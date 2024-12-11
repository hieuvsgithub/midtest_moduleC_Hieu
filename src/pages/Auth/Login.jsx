import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schemas/login";
import { getAll } from "../../services/productService";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(loginSchema) });

  function onSubmit(data) {
    (async () => {
      try {
        const dataUser = await getAll("/users");
        if (data.email === "admin@gmail.com") {
          nav("/admin");
        } else {
          const haveHad = dataUser.find((item) => item.email === data.email);
          if (haveHad) {
            nav("/");
          } else {
            confirm("tài khoản ko tồn tại");
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <h2>Login</h2>
        <div className="block">
          <label htmlFor="">Name</label>
          <input
            className="block"
            type="text"
            placeholder="Name..."
            {...register("name", { required: true })}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="block">
          <label htmlFor="">Email</label>
          <input
            className="block"
            type="email"
            placeholder="Email..."
            {...register("email", { required: true })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="block">
          <label htmlFor="">Password</label>
          <input
            className="block"
            type="password"
            placeholder="password..."
            {...register("password", { required: true })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Link to="/register">Bạn đã có tài khoản !!</Link>
        <button className="block ">Login</button>
      </form>
    </>
  );
};

export default Login;
