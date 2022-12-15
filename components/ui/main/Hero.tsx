import Link from "next/link";
import Button from "../Button";
import Container from "../Hero/Container";

// TODO: 화면 top에 걸리면 애니메이션에 따라 스크롤 이동됨
export default function Hero() {
	return (
		<Container
			title="btrc"
			bgSrcMobile="/images/main/hero_bg2.jpg"
			bgSrcWeb="/images/main/hero_bg2.jpg"
		>
			<div className="mx-auto text-center text-[60px] leading-[72.61px]">
				<div className="font-bold">
					<div className="flex gap-x-4">
						<div className="flip-text">
							<h1>Grow</h1>
							<h1>Build</h1>
							<h1>Make</h1>
							<h1>Boost</h1>
						</div>
						<h1>your</h1>
					</div>
					<div className="flip-text mt-1 text-primary">
						<h1>Business</h1>
						<h1>Brand</h1>
						<h1>Products</h1>
						<h1>Sales</h1>
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
