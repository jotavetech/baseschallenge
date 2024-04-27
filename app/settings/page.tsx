import { Settings } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center flex-col">
      <h1 className="text-primary dark:text-primary-dark mt-5 md:mt-10 font-semibold flex items-center gap-2">
        Settings <Settings />
      </h1>
      <div className="px-10 mt-10 max-w-[600px] space-y-10 text-primary dark:text-primary-dark text-center">
        <p>
          configure{" "}
          <span className="text-secondary dark:text-secondary-dark">
            baseschallenge
          </span>{" "}
          here
        </p>

        <div className="text-center">
          <h2 className="font-semibold text-lg text-primary dark:text-primary-dark">
            difficulty
          </h2>
          <p className="text-sm">select the range of numbers to generate</p>
          <div className="mt-5 md:mt-10 flex items-center gap-5">
            <button className="bg-button-bg-2 text-primary dark:text-primary-dark font-medium px-2 rounded-xl lg:rounded-md lg:px-4 lg:py-3 hover:brightness-125">
              easy (1-15)
            </button>
            <button className="bg-button-bg-2 text-primary dark:text-primary-dark font-medium px-2 rounded-xl lg:rounded-md lg:px-4 lg:py-3 hover:brightness-125">
              medium (1-30)
            </button>
            <button className="bg-button-bg-2 text-primary dark:text-primary-dark font-medium px-2 rounded-xl lg:rounded-md lg:px-4 lg:py-3 hover:brightness-125">
              hard (1-50)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
