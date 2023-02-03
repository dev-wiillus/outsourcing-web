/* 오프라인 서비스 신청 */

import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import NotificationContext from "../../../store/notification-context";
import Button from "../Button";
import { contactOptions } from "../options";
import { ApiResponseType, ContactType } from "../types";

const TITLE = "문의하기";

export interface IForm {
	company: string;
	name: string;
	phone: string;
	email: string;
	contactType: ContactType;
	description?: string;
}

export default function Form() {
	const notificationCtx = useContext(NotificationContext);
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<IForm>();
	const router = useRouter();

	const onSubmit = (data: IForm) => {
		notificationCtx.showNotification({
			title: "로딩중...",
			message: "",
			status: "pending",
		});

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}

				return res.json().then((data: ApiResponseType) => {
					throw new Error(`${TITLE}가 실패하였습니다.`);
				});
			})
			.then((data: ApiResponseType) => {
				notificationCtx.showNotification({
					title: "성공!",
					message: "문의가 완료 되었습니다. 24시간 이내로 연락 드리겠습니다.",
					status: "success",
				});
				router.push("/");
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: "실패!",
					message: error.message,
					status: "error",
				});
			});
	};

	return (
		<form
			className="form-control gap-y-8 px-[24px] md:gap-y-[92px] lg:px-0"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="form-control w-full items-start gap-4 text-[18px]">
				<label className="required text-base font-bold text-text-primary">
					기본 정보
				</label>
				<input
					type="text"
					placeholder="회사명"
					className="input-bordered input w-full focus:border-secondary focus:text-secondary"
					{...register("company", { required: true })}
				/>
				{errors.company?.type === "required" && (
					<p role="alert" className="text-error">
						회사명을 입력하세요.
					</p>
				)}
				<input
					type="text"
					placeholder="담당자명"
					className="input-bordered input w-full focus:border-secondary focus:text-secondary"
					{...register("name", { required: true })}
				/>
				{errors.name?.type === "required" && (
					<p role="alert" className="text-error">
						담당자명을 입력하세요.
					</p>
				)}
				<input
					type="text"
					placeholder="전화번호"
					className="input-bordered input w-full focus:border-secondary focus:text-secondary"
					{...register("phone", { required: true })}
				/>
				{errors.phone?.type === "required" && (
					<p role="alert" className="text-error">
						전화번호를 입력하세요.
					</p>
				)}
				<input
					type="email"
					placeholder="이메일"
					className="input-bordered input w-full focus:border-secondary focus:text-secondary"
					{...register("email", { required: true })}
				/>
				{errors.email?.type === "required" && (
					<p role="alert" className="text-error">
						이메일을 입력하세요.
					</p>
				)}
			</div>
			<div className="form-control w-full items-start gap-4 text-[18px]">
				<label className="required text-base font-bold text-text-primary">
					문의유형
				</label>
				<div className="grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-3">
					{contactOptions?.map(({ label, ...rest }) => (
						<div key={rest.value}>
							<label className="flex cursor-pointer gap-x-2">
								<input
									type="radio"
									className="radio checked:bg-secondary"
									{...rest}
									{...register("contactType", {
										required: "문의유형을 선택하세요.",
									})}
								/>
								<span className="text-base">{label}</span>
							</label>
						</div>
					))}
				</div>
				{errors.contactType?.type === "required" && (
					<p role="alert" className="text-error">
						{errors.contactType.message}
					</p>
				)}
			</div>
			<div className="form-control w-full">
				<div className="flex flex-col items-start gap-4">
					<label className="text-base font-bold text-text-primary">
						문의 내용
					</label>
					<textarea
						className="textarea-bordered textarea h-[200px] w-full focus:border-secondary focus:text-secondary"
						placeholder="문의 내용을 입력해주세요. (선택)"
						{...register("description")}
					/>
				</div>
			</div>
			<Button className="btn-primary">문의하기</Button>
		</form>
	);
}
