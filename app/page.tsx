import Link from "next/link"

export default function ReceptionPage() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-2">PelucApp</h1>
          <p className="text-gray-600 dark:text-gray-400">Gestión financiera para peluquerías</p>
        </div>

        <div className="space-y-4">
          <Link
            href="/sign-in"
            className="block w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 text-center"
          >
            Iniciar Sesión
          </Link>

          <Link
            href="/sign-up"
            className="block w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 text-center"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </main>
  )
}
