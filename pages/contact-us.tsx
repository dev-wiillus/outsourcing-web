import Head from "next/head";
import { Fragment } from "react";
import Contact from "../components/ui/contact_us/Contact";
import Hero from "../components/ui/contact_us/Hero";

export default function ContactUsPage() {
	return (
		<Fragment>
			<Head>
				<title>Wiillus | Contact us</title>
				<meta name="description" content="윌러스 문의하기" />
			</Head>
			<Hero />
			<Contact />
		</Fragment>
	);
}
