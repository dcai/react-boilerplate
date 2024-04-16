import * as React from "react";

const GITHUB_LINK = "https://github.com/dcai";
const Header = () => {
  const linkClass = `text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800`;
  const activeLinkClass = `text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800`;

  return (
    <header className="my-0 py-0">
      <nav className="bg-green-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              React-Template
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a href={GITHUB_LINK} className={linkClass}>
              Log in
            </a>
            <a href={GITHUB_LINK} className={activeLinkClass}>
              Get started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="rounded-lg shadow m-4 bg-green-800 text-white">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href={GITHUB_LINK} className="hover:underline">
          @dcai
        </a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export function Layout({ children }) {
  return (
    <div className="h-screen bg-green-900 py-0">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
