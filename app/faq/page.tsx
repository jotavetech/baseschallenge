import Question from "../components/faq/question";

const FaqPage = () => {
  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center flex-col">
      <h1 className="text-primary dark:text-primary-dark mt-5 md:mt-10 font-semibold">
        frequently asked questions
      </h1>
      <ul className="px-10 mt-10 max-w-[600px] space-y-10">
        <Question
          title="- how does the baseschallenge game work?"
          description="the game randomly generates five numbers in a specific format: hexadecimal, binary, or decimal. Your task is to convert these numbers to the other selected format."
        />
        <Question
          title="- what is the purpose of the game?"
          description="the game is designed to help you practice converting numbers between different bases. This is a useful skill for computer science students and professionals."
        />
        <Question
          title="- how do I play the game?"
          description="simply enter the number in the input field and press Enter or click the submit button. If your answer is correct, you will earn a point. If not, the correct answer will be displayed."
        />
        <Question
          title="- how do I convert a number to another base?"
          description="you can use the built-in calculator on your computer or use an online converter. Alternatively, you can use the game to practice and improve your skills."
        />
        <Question
          title="- how do I know if my answer is correct?"
          description="if your answer is correct, you will earn a point. If not, the correct answer will be displayed."
        />
        <Question
          title="- how do I know my score?"
          description="your score will be displayed at the bottom of the game screen. You will earn a point for each correct answer."
        />
        <Question
          title="- what is the game inspired by?"
          description="the game is inspired by the css2wind.com game. A fun way to practice CSS and Tailwind CSS skills. Made by @LukeberryPi."
        />
      </ul>
    </div>
  );
};

export default FaqPage;
