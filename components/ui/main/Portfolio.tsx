import { useState } from "react";
import Button from "../Button";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
	const [expandAll, setExpandAll] = useState(false);

	return (
		<div className="flex flex-col items-center px-[50px] py-[80px]">
			<div className="flex flex-col self-start py-16 font-bold">
				<span className=" text-[60px] font-bold leading-[72.61px] text-primary">
					Our Portfolio
				</span>

				<h1 className="mt-2 text-[90px] leading-[101px] md:mt-8 lg:mt-0">
					Featured projects
				</h1>
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
		image: "/images/main/portfolio/galaxy-fold.jpg",
		title: "삼성전자 - 갤럭시S / 노트 런칭 캠페인",
		description:
			"Strategic Planning / Website / Influencer / Performance Marketing",
	},
	{
		image: "/images/main/portfolio/삼성페이.png",
		title: "삼성전자 - 삼성페이 글로벌 런칭 캠페인",
		description: "Strategic Planning / App / SNS Marketing / Consumer Survey",
	},
	{
		image: "/images/main/portfolio/삼성전자B2B.webp",
		title: "삼성전자 - B2B 온라인 마케팅",
		description:
			"Strategic Planning / SNS Marketing / Video / Stakeholder Engagement",
	},
	{
		image: "/images/main/portfolio/LG전자.jpg",
		title: "LG전자 - G시리즈 인플루언서 캠페인",
		description: "Influencer / SNS Marketing / Blog",
	},
	{
		image: "/images/main/portfolio/벤틀리.png",
		title: "벤틀리 - SNS 마케팅 / 히어로 콘텐츠 제작",
		description: "Strategic Planning / SNS Marketing / Video",
	},
	{
		image: "/images/main/portfolio/미미박스.jpeg",
		title: "미미박스 - 미디어 제휴",
		description: "Stakeholder Engagement / PR",
	},
	{
		image: "/images/main/portfolio/맥도날드.jpeg",
		title: "맥도날드 - 리브랜딩 / 마케팅 전략",
		description: "Strategic Planning",
	},
	{
		image: "/images/main/portfolio/BC카드.png",
		title: "BC카드 - 미디어 제휴",
		description: "Video / SNS Marketing",
	},
	{
		image: "/images/main/portfolio/SSG페이.jpeg",
		title: "SSG PAY - 미디어 제휴, SNS 마케팅",
		description: "SNS Marketing / PR",
	},
	{
		image: "/images/main/portfolio/더소스랩.png",
		title: "더소스랩 - 상품기획, 플랫폼 입점, SNS 마케팅",
		description: "Strategic Planning / Re-branding / e-commerce",
	},
	{
		image: "/images/main/portfolio/오픈팜.jpg",
		title: "오픈팜 - 리브랜딩, 스마트스토어, 웹사이트",
		description: "Strategic Planning / Re-branding / Website",
	},
	{
		image: "/images/main/portfolio/베테랑고.png",
		title: "베테랑고 - 웹사이트, 카카오 광고, 네이버 광고",
		description: "Strategic Planning / Website / Performance Marketing",
	},
	{
		image: "/images/main/portfolio/세핑몰.png",
		title: "세핑몰 - 웹사이트, 구글/네이버 검색광고, 방송 광고",
		description: "Strategic Planning / Website / Performance Marketing",
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
