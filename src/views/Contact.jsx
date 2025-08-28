import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    alert("Gracias por contactarnos, " + data.name);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="col-md-6">

        {/* Nombre */}
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && <small className="text-danger">{errors.name.message}</small>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", { required: "El email es obligatorio" })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            rows="4"
            {...register("message", { required: "El mensaje es obligatorio" })}
          ></textarea>
          {errors.message && <small className="text-danger">{errors.message.message}</small>}
        </div>

        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
