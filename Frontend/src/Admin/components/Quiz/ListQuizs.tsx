import SchoolIcon from "@mui/icons-material/School";

interface Tableaux {
  id: number;
  formation: string;
  annee: string;
  lieu: string;
  diplome: string;
}

export const formations: Tableaux[] = [
  {
    id: 1,
    formation: "Informatique (GB+SR)",
    annee: "2021/2024",
    diplome: "Licence professionnelle",
    lieu: "ENI Fianarantsoa",
  },
  {
    id: 2,
    formation: "Informatique (GB+IA)",
    annee: "2024/2025",
    diplome: "Master 1 (en cours)",
    lieu: "ENI Fianarantsoa",
  },
];

export default function FormationInfoCard() {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-md p-4 space-y-4">
      <div className="flex items-center space-x-2 text-gray-700 font-bold">
        <SchoolIcon className="text-purple-700" />
        <span>Formations</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {formations.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-gray-100 p-4 bg-slate-50 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">
              {item.diplome}
            </h3>
            <p className="text-sm text-gray-600">{item.formation}</p>
            <p className="text-sm text-gray-500 italic">{item.annee}</p>
            <p className="text-sm text-gray-500">{item.lieu}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
