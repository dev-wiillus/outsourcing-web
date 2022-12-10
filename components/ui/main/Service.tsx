import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function Service() {
	return (
		<div id="service" className="flex w-full flex-col">
			<div className="relative flex flex-col py-24 text-center font-bold">
				<span className="text-2xl text-primary">WHAT WE OFFER</span>

				<h1 className="mt-2 text-6xl md:mt-8 lg:mt-0">
					Services you will love
				</h1>
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-70">
					<Image
						alt="down-arrow"
						src="/down-arrow1.png"
						width={36}
						height={36}
						className="animate__animated animate__shakeY animate__infinite animate__slower"
					/>
				</div>
			</div>
			<div>
				<ServiceCard
					backgroundColor="#9DA0A7"
					imageProps={{
						width: 600,
						height: 609,
						src: "/images/main/service_branding.png",
					}}
					contentProps={{
						title: "Branding",
						content: [
							"기업, 제품 브랜드 전략 수립",
							"비주얼 콘텐츠(이미지, 영상) 제작",
							"브랜드 방향 재설정 목적 리브랜딩",
						],
					}}
				/>
				<ServiceCard
					backgroundColor="#B9A9E3"
					imageProps={{
						width: 600,
						height: 609.17,
						src: "/images/main/service_content.png",
					}}
					contentProps={{
						title: "Content",
						content: [
							"온라인 광고 소재 기획 및 제작",
							"SNS 광고용 콘텐츠 기획 및 제작",
							"제품, 서비스 상세 페이지 기획 및 제작",
						],
					}}
				/>
				<ServiceCard
					backgroundColor="#ABD3F2"
					imageProps={{
						width: 600,
						height: 600,
						src: "/images/main/service_dev.png",
					}}
					contentProps={{
						title: "Dev",
						content: [
							"기업, 제품, 서비스 웹사이트 기획 및 제작",
							"Wep App / Cross-platform App 기획 및 제작",
							"서비스 아키텍쳐 기획 및 자문",
						],
					}}
				/>
				<ServiceCard
					backgroundColor="#F2CD91"
					imageProps={{
						width: 600,
						height: 593,
						src: "/images/main/service_marketing.png",
					}}
					contentProps={{
						title: "Marketing",
						content: [
							"제품, 서비스 마케팅 전략 수립",
							"구글, 네이버, 카카오, 페이스북, 인스타그램 광고 집행",
							"스마트스토어, 29cm, 컬리, 에이블리 등 플랫폼 입점",
						],
					}}
				/>
				<ServiceCard
					backgroundColor="#C8C6FC"
					imageProps={{
						width: 600,
						height: 600,
						src: "/images/main/service_newBiz.png",
					}}
					contentProps={{
						title: "New Biz",
						content: [
							"신규 IT서비스(웹, 앱) 기획 및 제작 협업",
							"창업 관련 정보 제공",
							"VC(벤쳐캐피탈) 현업자 피드백 제공",
						],
					}}
				/>
			</div>
		</div>
	);
}
