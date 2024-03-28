import Link from "next/link";

const HelpPage = () => {
  return (
    <div className="py-20 lg:py-36 min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-primary">In building</h1>
      <Link href="/">
        <button className="text-primary dark:text-primary-dark mt-2 bg-button-bg-1 dark:bg-button-bg-1-dark px-4 py-2 rounded-md">
          Back
        </button>
      </Link>
    </div>
  );
};

export default HelpPage;
