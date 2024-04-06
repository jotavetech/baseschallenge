import Question from "../components/faq/question";

const FaqPage = () => {
  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center flex-col">
      <h1 className="text-primary dark:text-primary-dark mt-5 md:mt-10 font-semibold">
        Frequently Asked Questions
      </h1>
      <ul className="px-10 mt-10 max-w-[600px] space-y-10">
        <Question
          title="- How does the baseschallenge game work?"
          description="The game randomly generates five numbers in a specific format: hexadecimal, binary, or decimal. Your task is to convert these numbers to the other selected format."
        />
        <Question
          title="- What is the purpose of the game?"
          description="The game is designed to help you practice converting numbers between different bases. This is a useful skill for computer science students and professionals."
        />
        <Question
          title="- How do I play the game?"
          description="Simply enter the number in the input field and press Enter or click the submit button. If your answer is correct, you will earn a point. If not, the correct answer will be displayed."
        />
        <Question
          title="- How do I convert a number to another base?"
          description="You can use the built-in calculator on your computer or use an online converter. Alternatively, you can use the game to practice and improve your skills."
        />
        <Question
          title="- How do I know if my answer is correct?"
          description="If your answer is correct, you will earn a point. If not, the correct answer will be displayed."
        />
        <Question
          title="- How do I know my score?"
          description="Your score will be displayed at the bottom of the game screen. You will earn a point for each correct answer."
        />
        <Question
          title="- What is the game inspired by?"
          description="The game is inspired by the css2wind.com game. A fun way to practice CSS and Tailwind CSS skills. Made by @LukeberryPi."
        />
      </ul>
    </div>
  );
};

export default FaqPage;
