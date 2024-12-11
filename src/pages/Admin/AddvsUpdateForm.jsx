import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addvsUpdateSchema } from "../../schemas/addvsUpdateProdut";

const AddvsUpdateForm = () => {
  const nav = useNavigate();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(addvsUpdateSchema) });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <h3>Add product</h3>
        <div className="row">
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title..."
            {...register("title", { required: true })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div className="row">
          <label htmlFor="">Price</label>
          <input
            type="text"
            placeholder="Price..."
            {...register("price", { required: true })}
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div className="row">
          <label htmlFor="">Description</label>
          <input
            type="text"
            placeholder="Description..."
            {...register("description", { required: true })}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default AddvsUpdateForm;
