import Link from "next/link"
import { Scissors, DollarSign, Users, BarChart } from "lucide-react"
import getUser from "@/actions/auth"

export default async function Home() {
  // Estos datos deberían venir de una API en una aplicación real
  const ingresos = 5000
  const egresos = 3000
  const balance = ingresos - egresos
  const user = await getUser()

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Ingresos</dt>
                    <dd className="text-2xl font-semibold text-gray-900 dark:text-white">${ingresos}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-red-500 rounded-md p-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Egresos</dt>
                    <dd className="text-2xl font-semibold text-gray-900 dark:text-white">${egresos}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Balance</dt>
                    <dd className="text-2xl font-semibold text-gray-900 dark:text-white">${balance}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/servicios"
            className="bg-primary dark:bg-primary-dark hover:bg-primary-dark text-secondary font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
          >
            <Scissors className="mr-2" />
            Gestionar Servicios
          </Link>
          <Link
            href="/ventas"
            className="bg-secondary hover:bg-secondary-dark text-primary font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
          >
            <DollarSign className="mr-2" />
            Registrar Ventas
          </Link>
          <Link
            href="/empleados"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
          >
            <Users className="mr-2" />
            Gestionar Empleados
          </Link>
          <Link
            href="/graficos"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center"
          >
            <BarChart className="mr-2" />
            Ver Gráficos
          </Link>
        </div>
      </div>
    </main>
  )
}


