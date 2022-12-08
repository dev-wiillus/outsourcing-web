import Container from "../Hero/Container";

export default function Hero() {
	return (
		<Container
			title="btrc"
			bgSrcMobile="/images/main/bg_mobile.png"
			bgSrcWeb="/images/main/bg_web.png"
		>
			<div className="mt-auto mb-20 mr-6 text-right text-[40px] leading-[49px] md:mr-[40px] md:text-[80px] md:leading-[98px]">
				<div className="font-chaney">
					<h1>Grow your</h1>
					<h1 className="mt-1 text-primary">Business</h1>
				</div>
			</div>
		</Container>
	);
}
