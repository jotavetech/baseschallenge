import Image from "next/image";
import Link from "next/link";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full h-20 lg:h-36 fixed top-0 left-0 flex items-center justify-between px-7 md:px-12 lg:px-52 xl:px-72 z-30 bg-app-bg dark:bg-app-bg-dark">
      <Link href="/" aria-label="go to bases challange">
        <Image
          className="dark:invert lg:w-64"
          src={"/assets/lowercase-logo.svg"}
          width={180}
          height={180}
          color="#fff"
          alt="bases challange logo"
        />
      </Link>
      <div className="space-x-2 flex items-center">
        <ModeToggle />
        <Link href="/faq" aria-label="go to faq" className="inline lg:hidden">
          <button className="bg-button-bg-1 dark:bg-button-bg-1-dark text-primary dark:text-primary-dark font-medium px-2 rounded-xl hover:-translate-y-1">
            faq
          </button>
        </Link>
        <Link href="/faq" aria-label="go to faq" className="hidden lg:inline">
          <button className="bg-button-bg-1 dark:bg-button-bg-1-dark text-primary dark:text-primary-dark font-medium px-4 py-3 rounded-md hover:-translate-y-1">
            frequently asked questions
          </button>
        </Link>
        {/* <Link href="/help" aria-label="go to help">
          <button className="bg-button-bg-2 text-primary dark:text-primary-dark font-medium px-2 rounded-xl lg:rounded-md lg:px-4 lg:py-3 hover:-translate-y-1">
            help
          </button>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
