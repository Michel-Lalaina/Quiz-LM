import Email  from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bottom-0 left-0 h-28 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-white py-6 shadow-lg">
      {/* Effet d'arrière-plan */}
      <div className="absolute top-0 inset-0 w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_transparent_10%)] bg-[size:2rem_2rem] opacity-10"></div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Logo & Nom */}
        <div className=" text-center md:text-left">
          <h1 className=" text-2xl font-bold tracking-wide">Michel Lalaina Ramanantenasoa</h1>
          <p className="text-gray-400 text-base mt-1 px-2"> © 2025 Tous droits réservés.</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/Michel-Lalaina" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-transform transform hover:scale-125">
            <GitHub fontSize="large" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 transition-transform transform hover:scale-125">
            <LinkedIn fontSize="large" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800 transition-transform transform hover:scale-125">
            <Twitter fontSize="large" />
          </a>
          <a href="mailto:michelramanantenasoa@gmail.com" className="text-white hover:text-red-400 transition-transform transform hover:scale-125">
            <Email fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
