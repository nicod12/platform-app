import * as Yup from "yup";
import { Formik, Field, ErrorMessage, Form } from "formik";

const RegisterSchema = Yup.object().shape({
  usuario: Yup.string()
      .min(6, "El nombre de usuario debe tener al menos 6 caracteres")
      .max(12, "El nombre de usuario no debe tener más de 12 caracteres")
      .required("Se requiere el nombre de usuario"),
  email: Yup.string()
      .email("Formato de correo inválido")
      .required("Se requiere el correo"),
  password: Yup.string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .max(12, "La contraseña no debe tener más de 12 caracteres")
      .required("Se requiere la contraseña"),
});

export const FormReg = () => {
  return (
    <Formik
      initialValues={{
        usuario: "",
        email: "",
        password: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        // Simular operación asincrónica, como una llamada a la API
        setTimeout(() => {
          alert("¡El formulario está validado! Enviando el formulario...");
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-6 border rounded shadow-sm ">
          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="usuario"
                className="block text-sm font-medium text-gray-600"
              >
                Usuario:
              </label>
              <Field
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Ingresa tu nombre de usuario"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-600"
              >
                Contraseña:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Correo:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="correo@correo.com"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                disabled={isSubmitting}
              >
                Registrar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};