import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";
import { IForm } from "../../components/ui/contact_us/Form";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		const database_id = process.env.NOTION_DATABASE_ID_CONTACT;
		if (req.method === "POST" && database_id) {
			const data = req.body;

			const { company, name, phone, email, contactType, description } =
				data as unknown as IForm;

			const notion = new Client({
				auth: process.env.NOTION_TOKEN,
			});

			const result = await notion.pages.create({
				parent: {
					type: "database_id",
					database_id,
				},
				properties: {
					company: {
						rich_text: [
							{
								text: {
									content: company,
								},
							},
						],
					},
					name: {
						title: [
							{
								text: {
									content: name,
								},
							},
						],
					},
					phone: {
						phone_number: phone
					},
					email: {
						email,
					},
					contactType: {
						select: { name: contactType },
					},
					...(description && {
						description: {
							rich_text: [
								{
									text: {
										content: description,
									},
								},
							],
						},
					}),
				},
			});
			if (!result) {
				throw new Error("Fail");
			}

			res.status(201).json({ ok: true, message: "Success" });
		}
	} catch (error) {
		res.status(400).json({ ok: false, message: "Fail" });
	}
}
