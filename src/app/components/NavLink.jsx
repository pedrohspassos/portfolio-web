import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      class="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:bg-transparent md:p-0 hover:text-primary-500"
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;
