import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import StyledButton from "@/components/StyledButton/StyleButton";

export default function Home() {
	return (
		<main>
			<div className="flex flex-col items-center gap-10">
				<div>
					<Image src="/treehouse_logo.png" alt="Treehouse Logo" width={128} height={111}></Image>
					<h1 className="text-[32px] text-[#5A6900] font-bold">Treehouse</h1>
				</div>
				<div className="">
					<StyledButton text={"Create Pod"} className="my-4" />
					<StyledButton text={"View Pod"} className="my-4" />
				</div>
				<div>
					<button className="flex flex-row justify-center items-center px-8 py-1 gap-4 w-50 h-9 bg-white rounded-full border border-black">
						Sign Up
					</button>
				</div>
			</div>
		</main>
	);
}
