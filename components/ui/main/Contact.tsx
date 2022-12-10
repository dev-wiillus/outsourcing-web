import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

export default function Contact() {
	return (
		<>
			<div className="relative flex h-screen flex-col justify-center">
				<Image
					alt="target-bg"
					src="/images/main/contact_bg.png"
					fill
					className="z-[-2]"
				/>
				<div className="ml-[95px]">
					<div className="text-[60px] font-bold leading-[72.61px]">
						<h2>Start with</h2>
						<h2 className="text-primary">team slash!</h2>
					</div>
					<div className="mt-[26px]">
						<Link href="contact-us">
							<Button className="btn-primary rounded-full md:w-[272px]">
								더 알아보기
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
