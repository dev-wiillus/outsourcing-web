export interface RadioOptionProps {
	label?: string;
	value: string | number;
	checked?: boolean;
}

export type ContactType = "branding" | "content" | "dev" | "marketing" | "new-biz" | "etc";

export type ApiResponseType = {
	ok: boolean;
	message: string;
};
