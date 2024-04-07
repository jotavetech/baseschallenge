import { Copy } from "lucide-react";

interface ResultProps {
  score: number;
  rounds: number;
  playAgain: () => void;
}

const Result = ({ playAgain, rounds, score }: ResultProps) => {
  const handleCopy = () => {
    const copiedText = `I scored ${score} out of ${rounds} in the baseschallenge game! 😁\n\nPlay now at https://baseschallenge.vercel.app/ 🚀`;
    const shareText = `I scored ${score} out of ${rounds} in the baseschallenge game! 😁`;

    const shareData = {
      title: "baseschallange",
      text: shareText,
      url: "https://baseschallenge.vercel.app/",
    };

    navigator.clipboard.writeText(copiedText);

    alert("result copied to clipboard!");

    try {
      navigator.share(shareData);
    } catch (error) {
      console.error("share not supported in this browser");
    }
  };

  const handleUserKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      playAgain();
    }
  };

  window.addEventListener("keydown", handleUserKeyPress);

  return (
    <div className="bg-app-bg dark:bg-app-bg-dark absolute top-0 left-0 h-full w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold text-secondary dark:text-secondary-dark">
          {score > 3 ? "congratulations!" : "good try!"}
        </h1>
        <p className="text-primary dark:text-primary-dark">
          your result is: {score}/{rounds}
        </p>
        <button
          className="flex items-center gap-2 underline text-primary dark:text-primary-dark text-xs"
          onClick={handleCopy}
        >
          <Copy />
          click to copy and share your result
        </button>

        <button
          className="bg-button-bg-1 dark:bg-button-bg-1-dark text-primary dark:text-primary-dark font-medium px-4 py-3 rounded-md hover:-translate-y-1 mt-5"
          onClick={playAgain}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default Result;
