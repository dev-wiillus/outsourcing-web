import { useState } from "react";
import Button from "../Button";
import PortfolioItem from "./PortfolioItem";

export default function Portfolio() {
	const [expandAll, setExpandAll] = useState(false);

	return (
		<div className="flex flex-col items-center px-[50px] py-[80px]">
			<div className="flex flex-col self-start py-16 font-bold">
				<span className="text-[18px] font-bold leading-[21.78px] text-primary lg:text-[60px] lg:leading-[72.61px]">
					Our Portfolio
				</span>

				<h1 className="mt-2 text-[28px] leading-[33.89px] md:mt-8 lg:mt-0 lg:text-[90px] lg:leading-[101px]">
					Featured projects
				</h1>
			</div>
			<div className="flex-auto">
				<section
					role="list"
					className="relative grid grid-cols-1 lg:grid-cols-3"
				>
					{(expandAll ? portfolios : portfolios.slice(0, 9)).map(
						(portfolio, index) => (
							<PortfolioItem key={index} {...portfolio} />
						),
					)}
				</section>
			</div>
			<Button
				className="btn-secondary mt-20 h-[60px] w-[220px] rounded-full"
				onClick={() => setExpandAll(!expandAll)}
			>
				{expandAll ? "접기" : "더보기"}
			</Button>
		</div>
	);
}

const portfolios = [
	{
		image: "/images/main/portfolio/삼성갤럭시.jpg",
		title: "삼성전자 - 갤럭시S / 노트 런칭 캠페인",
		description:
			"Strategic Planning / Website / Influencer / Performance Marketing",
	},
	{
		image: "/images/main/portfolio/삼성페이.jpg",
		title: "삼성전자 - 삼성페이 글로벌 런칭 캠페인",
		description: "Strategic Planning / App / SNS Marketing / Consumer Survey",
	},
	{
		image: "/images/main/portfolio/삼성b2b.jpg",
		title: "삼성전자 - B2B 온라인 마케팅",
		description:
			"Strategic Planning / SNS Marketing / Video / Stakeholder Engagement",
	},
	{
		image: "/images/main/portfolio/LG전자.jpg",
		title: "LG전자 - G시리즈 인플루언서 캠페인",
		description: "Influencer / SNS Marketing / Blog",
	},
	{
		image: "/images/main/portfolio/벤틀리.jpg",
		title: "벤틀리 - SNS 마케팅 / 히어로 콘텐츠 제작",
		description: "Strategic Planning / SNS Marketing / Video",
	},
	{
		image: "/images/main/portfolio/미미박스.jpg",
		title: "미미박스 - 미디어 제휴",
		description: "Stakeholder Engagement / PR",
	},
	{
		image: "/images/main/portfolio/맥도날드.jpg",
		title: "맥도날드 - 리브랜딩 / 마케팅 전략",
		description: "Strategic Planning",
	},
	{
		image: "/images/main/portfolio/BC카드.jpg",
		title: "BC카드 - 미디어 제휴",
		description: "Video / SNS Marketing",
	},
	{
		image: "/images/main/portfolio/ssg페이.jpg",
		title: "SSG PAY - 미디어 제휴, SNS 마케팅",
		description: "SNS Marketing / PR",
	},
	{
		image: "/images/main/portfolio/더소스랩.png",
		title: "더소스랩 - 상품기획, 플랫폼 입점, SNS 마케팅",
		description: "Strategic Planning / Re-branding / e-commerce",
	},
	{
		image: "/images/main/portfolio/오픈팜.jpg",
		title: "오픈팜 - 리브랜딩, 스마트스토어, 웹사이트",
		description: "Strategic Planning / Re-branding / Website",
	},
	{
		image: "/images/main/portfolio/베테랑고.jpg",
		title: "베테랑고 - 웹사이트, 카카오 광고, 네이버 광고",
		description: "Strategic Planning / Website / Performance Marketing",
	},
	{
		image: "/images/main/portfolio/세핑몰.jpg",
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
