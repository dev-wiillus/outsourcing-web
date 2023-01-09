import Link from "next/link";
import Button from "../Button";

export default function Hero() {
	return (
		<div className="z-[-3] flex h-screen flex-col bg-gradient-to-b from-[#DCD2C7] to-[#D8CEC2] sm:h-[670px] md:from-[#D9CFC3] md:to-[#E1D8CF]">
			<div className="flex flex-1 flex-col bg-[url('/images/contact/hero_bg_mobile.png')] bg-contain bg-bottom bg-no-repeat sm:bg-[url('/images/contact/hero_bg_web.png')] sm:bg-auto md:justify-center">
				<div className="mx-auto mt-[176px] text-center text-[48px] leading-[56px] md:mt-0 md:ml-[128px] md:text-left md:text-[60px] md:leading-[72.61px]">
					<div className="font-bold">
						<h1>Meet with</h1>
						<h1 className="mt-1 text-primary">team wiillus!</h1>
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
		</div>
	);
}
