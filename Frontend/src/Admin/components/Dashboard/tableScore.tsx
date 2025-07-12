import { Card, CardContent } from "@mui/material";

export default function Score() {
  return (
    <main className="flex flex-col flex-1 w-screen h-full px-8 py-10 bg-gradient-to-tr from-white via-blue-50 to-white overflow-auto">
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-3/4 max-w-full">
        <Card className="shadow-md rounded-2xl border border-blue-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Total Questions</h3>
            <p className="text-4xl font-bold text-blue-600 mt-4">320</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl border border-green-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Utilisateurs</h3>
            <p className="text-4xl font-bold text-green-600 mt-4">57</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl border border-purple-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Score Moyen</h3>
            <p className="text-4xl font-bold text-purple-600 mt-4">82</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl border border-yellow-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Total Quiz</h3>
            <p className="text-4xl font-bold text-yellow-600 mt-4">18</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl border border-red-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Tentatives aujourd'hui</h3>
            <p className="text-4xl font-bold text-red-500 mt-4">142</p>
          </CardContent>
        </Card>

        <Card className="shadow-md rounded-2xl border border-indigo-100 hover:shadow-lg transition w-full">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-gray-700">Taux de Succès</h3>
            <p className="text-4xl font-bold text-indigo-600 mt-4">73%</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}


