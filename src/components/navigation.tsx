import NavLink from "components/navLink";

const Navigation = () => (
  <nav className="mb-16 mt-16 flex flex-wrap justify-between align-baseline text-gray-12 sm:mt-32">
    <p className="text-xl font-medium tracking-tight">Andrew Ho</p>
    <div className="flex items-center space-x-4 text-gray-12">
      <NavLink href="/about">About</NavLink>
      <NavLink href="/projects">Projects</NavLink>
    </div>
  </nav>
);

export default Navigation;
