
import { Card, CardContent } from "@mui/material";
export default function Score() {
  return (
    <main className="flex-1 p-8 space-y-8">
      <section className="grid grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Total Questions</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">320</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Utilisateurs</h3>
            <p className="text-3xl font-bold text-green-600 mt-2">57</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Score Moyen</h3>
            <p className="text-3xl font-bold text-purple-600 mt-2">82</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}