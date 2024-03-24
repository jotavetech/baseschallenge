const Footer = () => {
  return (
    <footer className="w-full h-20 lg:h-36 fixed bottom-0 left-0 flex items-center justify-between px-7 md:px-12 lg:px-52 xl:px-72">
      <a
        href="https://github.com/jotavetech/bases-challange"
        target="_blank"
        className="text-primary dark:text-primary-dark underline italic font-medium"
      >
        github
      </a>

      <a
        href="https://beacons.ai/jotavetech"
        target="_blank"
        className="text-primary dark:text-primary-dark underline italic font-medium"
      >
        @jotavetech
      </a>
    </footer>
  );
};

export default Footer;
