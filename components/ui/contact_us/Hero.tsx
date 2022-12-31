import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function Hero() {
	return (
		<div className="relative z-[-3] flex h-[720px] flex-col justify-center bg-gradient-to-b from-[#D9CFC3] to-[#E1D8CF]">
			<Image
				src="/images/contact/hero_bg_web.png"
				alt="contact-bg"
				width={1080}
				height={670}
				className="how-bg absolute right-0 bottom-0 z-[-2]"
				priority
			/>
			<div className="ml-[128px] text-[60px] leading-[72.61px]">
				<div className="font-bold">
					<h1>Meet with</h1>
					<h1 className="mt-1 text-primary">team slash!</h1>
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
