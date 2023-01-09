import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function Contact() {
	return (
		<>
			<div className="relative flex h-[720px] flex-col">
				<div className="hidden lg:block">
					<Image
						alt="how-bg"
						src="/images/main/contact_bg_web.png"
						fill
						className="z-[-2]"
					/>
				</div>
				<div className="block lg:hidden">
					<Image
						alt="how-bg"
						src="/images/main/contact_bg_mobile.png"
						width={360}
						height={290}
						className="absolute bottom-0 left-1/2 z-[-2] -translate-x-1/2"
					/>
				</div>
				<div className="mx-auto mt-[120px] text-center lg:ml-[95px] lg:mt-[188px] lg:text-left">
					<div className="text-center text-[48px] font-bold leading-[56px] lg:text-left lg:text-[60px] lg:leading-[72.61px]">
						<h2>Start with</h2>
						<h2 className="text-primary">team wiillus!</h2>
					</div>
					<div className="mt-[32px]">
						<Link href="contact-us">
							<Button className="btn-primary h-[60px] w-[220px] rounded-full">
								문의하기
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
