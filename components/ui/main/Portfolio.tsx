import { useState } from "react";
import Button from "../Button";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
	const [expandAll, setExpandAll] = useState(false);

	return (
		<div className="flex flex-col items-center pb-[120px]">
			<div className="my-20 text-[60px] font-bold leading-[72.61px]">
				<h1>Portfolio</h1>
			</div>
			<div className="w-full flex-auto">
				<section role="list" className="relative grid w-full grid-cols-3">
					{(expandAll ? portfolios : portfolios.slice(0, 9)).map(
						(portfolio, index) => (
							<PortfolioItem key={index} {...portfolio} />
						),
					)}
				</section>
			</div>
			<Button
				className="btn-secondary mt-20 rounded-full md:w-[272px]"
				onClick={() => setExpandAll(!expandAll)}
			>
				{expandAll ? "접기" : "더보기"}
			</Button>
		</div>
	);
}

const portfolios = [
	{
		image: "/images/logo/samsung.png",
		title: "삼성전자",
		description:
			"갤럭시S / 노트 런칭 캠페인 (Strategic Planning / Website / Influencer / Performance Marketing)",
	},
	{
		image: "/images/main/portfolio/galaxy-fold.jpg",
		title: "삼성전자",
		description:
			"삼성페이 글로벌 런칭 캠페인 (Strategic Planning / App / SNS Marketing / Consumer Survey)",
	},
	{
		image: "/images/logo/samsung.png",
		title: "삼성전자",
		description:
			"삼성전자 B2B 온라인 마케팅 (Strategic Planning / SNS Marketing / Video / Stakeholder Engagement)",
	},
	{
		image: "/images/logo/lge.png",
		title: "LG전자",
		description:
			"G시리즈 인플루언서 캠페인 (Influencer / SNS Marketing / Blog)",
	},
	{
		image: "/images/logo/bentley.png",
		title: "벤틀리",
		description:
			"SNS 마케팅 / 히어로 콘텐츠 제작 (Strategic Planning / SNS Marketing / Video)",
	},
	{
		image: "/images/logo/memebox.png",
		title: "미미박스",
		description: "미디어 제휴 (Stakeholder Engagement / PR)",
	},
	{
		image: "/images/logo/mcdonalds.png",
		title: "맥도날드",
		description:
			"리브랜딩 / 마케팅 전략 (Strategic Planning / BC카드 - 미디어 제휴 (Video / SNS Marketing)",
	},
	{
		image: "/images/logo/",
		title: "SSG PAY",
		description: "미디어 제휴, SNS 마케팅 (SNS Marketing / PR)",
	},
	{
		image: "/images/logo/the-sauce-lab.png",
		title: "더소스랩",
		description:
			"상품기획, 플랫폼 입점, SNS 마케팅 (Strategic Planning / Re-branding / e-commerce)",
	},
	{
		image: "/images/logo/openfarm.png",
		title: "오픈팜",
		description:
			"리브랜딩, 스마트스토어, 웹사이트 (Strategic Planning / Re-branding / Website)",
	},
	{
		image: "/images/logo/vego.png",
		title: "베테랑고",
		description:
			"웹사이트, 카카오 광고, 네이버 광고 (Strategic Planning / Website / Performance Marketing)",
	},
	{
		image: "/images/logo/sepingmall.png",
		title: "세핑몰",
		description:
			"웹사이트, 구글/네이버 검색광고, 방송 광고 (Strategic Planning / Website / Performance Marketing)",
	},
];

// 스크롤에 따라 움직이는 포트폴리오
// export default function Portfolio() {
// 	const gsap = useGsap();
// 	useEffect(() => {
// 		const portfolioContainer = document.querySelector(".portfolio-container");
// 		const container = document.querySelector(".portfolio");
// 		if (container) {
// 			const tl = gsap.timeline({
// 				scrollTrigger: {
// 					pin: true,
// 					scrub: 1,
// 					trigger: portfolioContainer,
// 					end: () =>
// 						container.scrollWidth - document.documentElement.clientWidth,
// 				},
// 				defaults: { ease: "none", duration: 1 },
// 			});

// 			tl.to(".parallax", { x: 300 }).to(
// 				".panel",
// 				{
// 					x: () =>
// 						-(container.scrollWidth - document.documentElement.clientWidth),
// 				},
// 				0,
// 			);
// 		}
// 	});
// 	return (
// 		<div className="portfolio-container flex h-[720px] flex-col items-center pb-[120px]">
// 			<div className="my-20 text-[60px] font-bold leading-[72.61px]">
// 				<h1>Portfolio</h1>
// 			</div>
// 			<div className="w-full flex-auto">
// 				<section
// 					role="list"
// 					className="portfolio relative flex h-2/3 w-full flex-nowrap overflow-x-hidden"
// 				>
// 					<div className="parallax" />
// 					{portfolios.map((portfolio, index) => (
// 						<PortfolioItem key={index} {...portfolio} />
// 					))}
// 				</section>
// 			</div>
// 		</div>
// 	);
// }
