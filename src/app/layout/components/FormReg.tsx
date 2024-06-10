"use client"
import { useFormik } from "formik";
import { useRef } from "react";
import * as Yup from 'yup';

type TypeInitialValues = {
  username: string;
  password: string;
  email:string;
  tyc: boolean;
}

const initialValues: TypeInitialValues = {
  username: '',
  password: '',
  email: '',
  tyc: false,
}

const validationSchema = Yup.object({
  username: Yup.string()
               .min(4,'El usuario debe tener minimo 4 caracteres')
               .max(15,'Maximo 15 caracteres')
               .required('Campo requerido'),
  password: Yup.string()
               .min(8,'La contraseña debe tener minimo 8 caracteres')
               .max(20,'El maximo de caracteres es de 20')
               .required('Campo requerido'),
  email:    Yup.string()
               .email('Correo no valido')
               .required('Campo requerido'),
  tyc:      Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),

})

export const FormReg = () => {

  const checkboxRef = useRef<HTMLInputElement>(null);

  const onSubmit = (values:TypeInitialValues) =>{
    //fetch('api/register)
    console.log('Enviando valores', values);
  }

  const { handleChange, errors, handleSubmit } = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  const handleCheckboxChange = () => {
    if (checkboxRef.current) {
      handleChange({
        target: {
          name: 'tyc',
          value: checkboxRef.current.checked,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded shadow-sm ">
    <div className="flex flex-col space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium"
        >
          Usuario:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Ingresa tu nombre de usuario"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.username}</small>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium"
        >
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Ingresa tu contraseña"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.password}</small>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium"
        >
          Correo:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="correo@correo.com"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
          onChange={handleChange}
        />
        <small className="text-red-500">{errors.email}</small>
      </div>
      <div>
        <input className="mr-2" type="checkbox" name="tyc"  ref={checkboxRef}   onChange={handleCheckboxChange} />
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <small className="text-red-500">{errors.tyc}</small>
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registrar
        </button>
      </div>
    </div>
  </form>
  );
};