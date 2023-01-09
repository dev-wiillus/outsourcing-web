import Image from "next/image";
import { useEffect } from "react";
import useGsap from "../../utils/useGsap";
import ServiceCard from "./ServiceCard";

export default function Service() {
	const gsap = useGsap();
	useEffect(() => {
		const serviceContainer = document.querySelector(".service-container");
		const container = document.querySelector(".service");
		if (container) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: serviceContainer,
					scrub: true,
				},

				defaults: { ease: "none" },
			});

			tl.to(
				".mobile-image",
				{
					y: () => container.scrollHeight,
				},
				0,
			);
		}
	});
	return (
		<div id="service" className="min-h-[720px] p-[50px]">
			<div className="flex flex-col py-16 font-bold">
				<span className="text-[18px] font-bold leading-[21.78px] text-primary lg:text-[60px] lg:leading-[72.61px]">
					Our Services
				</span>

				<h1 className="mt-2 text-[28px] leading-[33.89px] md:mt-8 lg:mt-0 lg:text-[90px] lg:leading-[101px]">
					Super talented at...
				</h1>
			</div>
			<div className="service-container hero relative">
				<div className="hero-content flex-col lg:flex-row">
					<Image
						src="/images/main/service.png"
						alt="service-image"
						width={360}
						height={360}
						className="mobile-image absolute top-[-100px] right-0 z-[-1] opacity-20 lg:hidden"
					/>
					<div className="relative hidden h-[600px] w-[600px] flex-1 lg:block">
						<Image
							src="/images/main/service.png"
							alt="service-image"
							fill
							sizes="(max-Height: 640px) 100vw
									50vw"
						/>
					</div>
					<div className="service flex flex-1 flex-col gap-y-[50px] text-center lg:text-left">
						{services.map((service, index) => (
							<ServiceCard key={index} {...service} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const services = [
	{
		contentProps: {
			title: "Branding",
			content: [
				"기업, 제품 브랜드 전략 수립",
				"비주얼 콘텐츠(이미지, 영상) 제작",
				"브랜드 방향 재설정 목적 리브랜딩",
			],
		},
	},
	{
		contentProps: {
			title: "Content",
			content: [
				"온라인 광고 소재 기획 및 제작",
				"SNS 광고용 콘텐츠 기획 및 제작",
				"제품, 서비스 상세 페이지 기획 및 제작",
			],
		},
	},
	{
		contentProps: {
			title: "Dev",
			content: [
				"기업, 제품, 서비스 웹사이트 기획 및 제작",
				"Wep App / Cross-platform App 기획 및 제작",
				"서비스 아키텍쳐 기획 및 자문",
			],
		},
	},
	{
		contentProps: {
			title: "Marketing",
			content: [
				"제품, 서비스 마케팅 전략 수립",
				"구글, 네이버, 카카오, 페이스북, 인스타그램 광고 집행",
				"스마트스토어, 29cm, 컬리, 에이블리 등 플랫폼 입점",
			],
		},
	},
	{
		contentProps: {
			title: "New Biz",
			content: [
				"신규 IT서비스(웹, 앱) 기획 및 제작 협업",
				"창업 관련 정보 제공",
				"VC(벤쳐캐피탈) 현업자 피드백 제공",
			],
		},
	},
];
