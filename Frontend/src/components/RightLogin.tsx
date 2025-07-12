import { Typography } from "@mui/material";

export default function RightSideLogin() {
  return (
    <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-tr from-blue-600 to-indigo-700 text-white">
      <img
        src="/image/concept-cerveau.jpg"  // Remplace avec une image pertinente pour ton site
        alt="Illustration"
        className="w-2/4 max-w-md mb-8"
      />
      <Typography variant="h4" className="font-bold mb-4 text-center">
        Welcome to My Awesome Platform!
      </Typography>
      <Typography variant="body1" className="text-center max-w-md">
      This platform is designed to help you assess and enhance your knowledge, intelligence, and memory capacity through interactive quizzes. 
      Track your progress, challenge yourself, and gain valuable insights into your abilities.
      Join now to start measuring and improving your skills!
      </Typography>
    </div>
  );
}
