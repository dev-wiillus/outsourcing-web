import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Service() {
	return (
		<div id="service" className="min-h-[720px] p-[50px]">
			<div className="flex flex-col py-16 font-bold">
				<span className=" text-[60px] font-bold leading-[72.61px] text-primary">
					Our Services
				</span>

				<h1 className="mt-2 text-[90px] leading-[101px] md:mt-8 lg:mt-0">
					Super talented at...
				</h1>
			</div>
			<div className="hero">
				<div className="hero-content flex-col lg:flex-row">
					<div className="relative h-[600px] w-[600px] flex-1">
						<Image
							src="/images/main/service.png"
							alt="service-image"
							fill
							sizes="(max-width: 640px) 100vw
									50vw"
						/>
					</div>
					<div className="flex flex-1 flex-col gap-y-[50px]">
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
