import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../schemas/register";
import { createItem, getAll } from "../../services/productService";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });

  function onSubmit(data) {
    (async () => {
      try {
        const dataUser = await getAll("/users");
        const haveHad = dataUser.find((item) => item.email === data.email);
        console.log(haveHad);
        if (haveHad) {
          confirm("Tài khoản đã tồn tại");
        } else {
          const newUser = await createItem("/users", data);

          nav("/login");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <h2>Register</h2>
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
        <Link to="/login">Bạn đã có tài khoản !!</Link>
        <button className="block ">Register</button>
      </form>
    </>
  );
};

export default Register;
