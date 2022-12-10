import Link from "next/link";
import Button from "../Button";
import Container from "../Hero/Container";

export default function Hero() {
	return (
		<Container
			title="btrc"
			bgSrcMobile="/images/main/hero_bg.png"
			bgSrcWeb="/images/main/hero_bg.png"
		>
			<div className="ml-[126px] text-[60px] leading-[72.61px]">
				<div className="font-bold">
					<h1>Grow your</h1>
					<h1 className="mt-1 text-primary">Business</h1>
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
