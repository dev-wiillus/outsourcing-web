import Link from "next/link";
import Button from "../Button";

export default function Hero() {
	return (
		<div className="relative flex h-screen flex-col items-center justify-center bg-[url('/images/main/hero_bg_web.jpg')] bg-contain bg-bottom bg-no-repeat text-center lg:h-[720px] lg:justify-start lg:pt-[160px]">
			<div className="mx-auto text-center text-[56px] leading-[64px] lg:text-[80px] lg:leading-[96px]">
				<div className="font-bold">
					<div className="flex h-[64px] gap-x-4 overflow-hidden lg:h-[96px]">
						<div className="animate-[text-animation-mobile_6s_linear_infinite] lg:animate-[text-animation-web_6s_linear_infinite]">
							<h1>Grow</h1>
							<h1>Build</h1>
							<h1>Make</h1>
							<h1>Boost</h1>
							<h1>Grow</h1>
						</div>
						<h1>your</h1>
					</div>
					<div className="mt-1 h-[64px] overflow-hidden lg:h-[96px]">
						<div className="animate-[text-animation-mobile_6s_linear_infinite] text-primary lg:animate-[text-animation-web_6s_linear_infinite]">
							<h1>Business</h1>
							<h1>Brand</h1>
							<h1>Products</h1>
							<h1>Sales</h1>
							<h1>Business</h1>
						</div>
					</div>
				</div>
				<div className="mt-[21px] lg:mt-[8px]">
					<Link href="/#target">
						<Button className="btn-primary w-[220px] rounded-full">
							더 알아보기
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
