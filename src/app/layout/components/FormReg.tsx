
export const FormReg = () => {
  return (
<form className="max-w-md mx-auto p-6 border rounded shadow-sm ">
  <div className="flex flex-col space-y-4">
    <div>
      <label htmlFor="username" className="block text-sm font-medium text-gray-600">Usuario:</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Ingresa tu nombre de usuario"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
        required
      />
    </div>
    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-600">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Ingresa tu contraseña"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-2 p-1"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-600">Correo:</label>
      <input
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
      >
        Registrar
      </button>
    </div>
  </div>
</form>

  )
}
