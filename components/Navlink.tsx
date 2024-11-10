
import Link from "next/link";

interface NavlinkProps {
  href: string;
  title: string;
}

const Navlink: React.FC<NavlinkProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#4d9647] sm:text-xl rounded md:p-0 hover:text-white transition duration-200"
    >
      {title}
    </Link>
  );
};

export default Navlink;
