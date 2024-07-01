"use client"

import { regUser } from "@/utils/api";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from 'yup';

type TypeInitialValues = {
  username: string;
  password: string;
  email: string;
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
    .min(4, 'El usuario debe tener mínimo 4 caracteres')
    .max(15, 'Máximo 15 caracteres')
    .required('Campo requerido'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener mínimo 8 caracteres')
    .max(20, 'Máximo 20 caracteres')
    .required('Campo requerido'),
  email: Yup.string()
    .email('Correo no válido')
    .required('Campo requerido'),
  tyc: Yup.bool().oneOf([true], 'Debes aceptar los términos y condiciones'),
});

export const FormReg = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (values: TypeInitialValues) => {
    try {
      const newUser = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      const usuarioCreado = await regUser(newUser);
      console.log('Usuario creado:', usuarioCreado);

      setSuccessMessage('Usuario creado con éxito');
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);

      formik.resetForm();
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const handleCheckboxChange = () => {
    if (checkboxRef.current) {
      formik.handleChange({
        target: {
          name: 'tyc',
          value: checkboxRef.current.checked,
        },
      });
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-6 border rounded shadow-sm ">
      {successMessage && (
        <div className="mb-4 text-green-600">{successMessage}</div>
      )}
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1 relative"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          <div className="py-1">
            <span className="text-red-500 text-xs absolute">{formik.errors.username}</span>
          </div>
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
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className="py-1">
            <span className="text-red-500 text-xs absolute">{formik.errors.password}</span>
          </div>
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
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <div className="py-1">
            <span className="text-red-500 text-xs absolute">{formik.errors.email}</span>
          </div>
        </div>
        <div>
          <input
            className="mr-2"
            type="checkbox"
            name="tyc"
            ref={checkboxRef}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="terminos">Acepto términos y condiciones</label>
          <div className="py-1">
            <span className="text-red-500 text-xs absolute">{formik.errors.tyc}</span>
          </div>
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