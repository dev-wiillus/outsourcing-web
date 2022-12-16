import Document, { Html, Head, Main, NextScript } from "next/document";

class CoworkingDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head></Head>
				<body className="font-custom">
					<Main />
					<NextScript />
					<div id="notifications"></div>
				</body>
			</Html>
		);
	}
}

export default CoworkingDocument;
