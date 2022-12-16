import Link from "next/link";
import Button from "../Button";
import Container from "../Hero/Container";

export default function Hero() {
	return (
		<Container
			title="coworking"
			bgSrcMobile="/images/main/hero_bg.jpg"
			bgSrcWeb="/images/main/hero_bg.jpg"
		>
			<div className="mx-auto text-center text-[60px] leading-[72.61px]">
				<div className="font-bold">
					<div className="flex h-[72.61px] gap-x-4 overflow-hidden">
						<div className="animate-[text-animation_6s_linear_infinite]">
							<h1>Grow</h1>
							<h1>Build</h1>
							<h1>Make</h1>
							<h1>Boost</h1>
							<h1>Grow</h1>
						</div>
						<h1>your</h1>
					</div>
					<div className="mt-1 h-[72.61px] overflow-hidden">
						<div className="animate-[text-animation_6s_linear_infinite] text-primary">
							<h1>Business</h1>
							<h1>Brand</h1>
							<h1>Products</h1>
							<h1>Sales</h1>
							<h1>Business</h1>
						</div>
					</div>
				</div>
				<div className="mt-[21px]">
					<Link href="contact-us">
						<Button className="btn-primary rounded-full md:w-[272px]">
							더 알아보기
						</Button>
					</Link>
				</div>
			</div>
		</Container>
	);
}
