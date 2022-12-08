export interface RadioOptionProps {
	label?: string;
	value: string | number;
	checked?: boolean;
}

export type ContactType = "marketing" | "branding" | "planning" | "etc";

export type ApiResponseType = {
	ok: boolean;
	message: string;
};
