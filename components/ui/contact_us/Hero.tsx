import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function Hero() {
	return (
		<div className="relative flex h-[720px] flex-col items-center justify-center text-center">
			<Image
				src="/images/contact/hero_bg.png"
				alt="contact-bg"
				fill
				className="z-[-2]"
				priority
			/>
			<div className="absolute inset-0 z-[-1] h-full w-full bg-black opacity-20" />
			<div className="text-[60px] leading-[72.61px] text-white">
				<div className="font-bold">
					<h1>Meet with</h1>
					<h1 className="mt-1">team slash</h1>
				</div>
				<div className="mt-[21px]">
					<Link href="#contact-application">
						<Button className="btn-primary rounded-full md:w-[272px]">
							문의하기
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
