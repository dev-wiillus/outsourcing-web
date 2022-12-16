import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Contact from "../components/ui/main/Contact";
import Hero from "../components/ui/main/Hero";
import How from "../components/ui/main/How";
import Partners from "../components/ui/main/Partners";
import Portfolio from "../components/ui/main/Portfolio";
import Service from "../components/ui/main/Service";
import Target from "../components/ui/main/Target";

// TODO: add favicon
export default function HomePage(props: any) {
	const [showChild, setShowChild] = useState(false);

	// Wait until after client-side hydration to show
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		// You can show some kind of placeholder UI here
		return null;
	}
	return (
		<Fragment>
			<Head>
				<title>윌러스 | 파트너스</title>
				<meta
					name="description"
					content="국내외 유수 기업부터 스타트업까지, 다양한 백그라운드의 마케팅, 브랜딩, 제품기획가가 함께 합니다"
				/>
			</Head>
			<Hero />
			<Target />
			<Partners />
			<How />
			<Service />
			<Portfolio />
			<Contact />
		</Fragment>
	);
}
