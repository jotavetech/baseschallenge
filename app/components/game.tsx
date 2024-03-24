import Input from "./input";

const Game = () => {
  return (
    <div>
      <p className="text-primary dark:text-primary-dark font-medium text-base lg:text-lg px-10 text-center">
        convert{" "}
        <span className="text-secondary dark:text-secondary-dark">101</span>{" "}
        random{" "}
        <span className="text-secondary dark:text-secondary-dark">
          binary numbers
        </span>{" "}
        to a decimal number
      </p>
      <div className="flex flex-col items-center mt-5 lg:flex-row gap-5">
        <Input placeholder="001" id="to-convert" type={"binary"} />

        <Input
          placeholder="1"
          id="to-convert"
          type={"decimal"}
          submitabble={true}
        />
      </div>
    </div>
  );
};

export default Game;
