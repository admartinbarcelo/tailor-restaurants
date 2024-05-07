import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border border-t-gray-600 border-l-0 border-r-0 border-b-0 text-white text-center p-4">
      © {new Date().getFullYear()} Made by{" "}
      <Link
        href="https://www.linkedin.com/in/admartinbarcelo/"
        className="text-blue-500 hover:text-blue-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adrian Martin
      </Link>{" "}
      for TailorHub 🚀.
    </footer>
  );
};

export default Footer;
