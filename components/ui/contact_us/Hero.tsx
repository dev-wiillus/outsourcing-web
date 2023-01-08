import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function Hero() {
	return (
		<div className="relative z-[-3] flex h-screen flex-col bg-gradient-to-b from-[#DCD2C7] to-[#E1D8CF] lg:h-[670px] lg:justify-center lg:from-[#D9CFC3]">
			<div className="hidden lg:block">
				<Image
					src="/images/contact/hero_bg_web.png"
					alt="contact-bg"
					width={1280}
					height={670}
					className="absolute top-0 z-[-2]"
					priority
				/>
			</div>
			<div className="block lg:hidden">
				<Image
					src="/images/contact/hero_bg_mobile.png"
					alt="contact-bg"
					width={360}
					height={348}
					className="absolute bottom-0 right-0 z-[-2]"
					priority
				/>
			</div>
			<div className="mx-auto mt-[176px] text-center text-[48px] leading-[56px] lg:mt-0 lg:ml-[128px] lg:text-left lg:text-[60px] lg:leading-[72.61px]">
				<div className="font-bold">
					<h1>Meet with</h1>
					<h1 className="mt-1 text-primary">team slash!</h1>
				</div>
				<div className="mt-[21px]">
					<Link href="#contact-application">
						<Button className="btn-primary h-[60px] w-[220px] rounded-full">
							문의하기
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
