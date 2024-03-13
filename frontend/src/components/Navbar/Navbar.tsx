'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface CloseButtonProps {
	onClick?: () => void;
}

const CloseButton = (props: CloseButtonProps) => {
	return (
		<button
			onClick={props.onClick}
			className="absolute right-8 top-8 w-8 h-8 opacity-30 hover:opacity-100 flex items-center"
			aria-label="Close"
		>
			<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
				<line x1="18" y1="6" x2="6" y2="18"></line>
				<line x1="6" y1="6" x2="18" y2="18"></line>
			</svg>
		</button>
	);
};

const Navbar = () => {
	const pathname = usePathname();
	console.log(pathname);
	//TODO use pathname to differentiate between the home page and the pod page and login page render differently and move subsequent rendered navbars to their own components
	if(pathname === "/"){
		return (
			<nav className="flex w-100 mx-auto p-4 justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="flex items-center space-x-2">
						<span className="text-2xl font-semibold whitespace-nowrap">Treehouse</span>
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Link href="/create-pod" className="py-2 px-3 text-black hover:text-teal-600 transition duration-150 ease-in-out">Create Pod</Link>
					<Link href="/view-pod" className="py-2 px-3 text-black hover:text-teal-600 transition duration-150 ease-in-out">View Pod</Link>
					<Link href="/login" className="py-2 px-3 text-black bg-white hover:bg-gray-200 transition duration-150 ease-in-out border border-black rounded-full">Login</Link>
				</div>
			</nav>
		);
	} else {
		return (
			<nav className="flex w-full mx-auto p-4 justify-start items-start">
				<div className="flex items-center">
					<Link href="/" className="flex space-x-2">
						<CloseButton />
					</Link>
				</div>
			</nav>
		);
	}
};

export default Navbar;
