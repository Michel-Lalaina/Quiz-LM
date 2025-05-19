import Card from "@mui/material/Card";
import { motion } from "framer-motion";
import CardContent from "@mui/material/CardContent";

const Acceuil: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full mt-16 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl"
      >
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-2xl rounded-xl p-6">
          <CardContent className="text-center">
            <h2 className="text-4xl font-extrabold mb-4">Bienvenue sur QA Evaluation</h2>
            <p className="text-lg text-gray-700 mb-6">
              Évaluez vos compétences avec nos quiz interactifs et améliorez-vous en continu.
            </p>
            <motion.div whileHover={{ scale: 1.05 }}>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Acceuil;
