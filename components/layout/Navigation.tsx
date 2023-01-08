import Link from "next/link";

const menu = [
	{ name: "OUR PARTNERS", path: "/#partners" },
	{ name: "OUR SERVICES", path: "/#service" },
	{ name: "CONTACT US", path: "contact-us" },
];

function Navigation() {
	const MenuList = menu?.map(({ name, path }) => (
		<li key={path} className="py-1 lg:p-6">
			<Link href={path}>{name}</Link>
		</li>
	));
	return (
		<nav className="text-xs font-bold text-primary lg:text-sm">
			<ul className="hidden lg:flex">{MenuList}</ul>
			<ul
				tabIndex={0}
				className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow lg:hidden"
			>
				{MenuList}
			</ul>
		</nav>
	);
}

export default Navigation;
