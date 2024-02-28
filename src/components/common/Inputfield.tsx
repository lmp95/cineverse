import { ClassAttributes, InputHTMLAttributes, forwardRef } from "react"
import {
	ControllerFieldState,
	ControllerRenderProps,
	FieldValues,
	UseFormStateReturn,
} from "react-hook-form"

import Typography from "./Typography"

function Inputfield(
	{
		label,
		placeholder,
		className,
		fullWidth = false,
		type = "text",
		field,
		fieldState,
		formState,
	}: InputfieldProps,
	ref: ClassAttributes<HTMLInputElement>["ref"]
) {
	return (
		<div className={`flex flex-col items-start ${fullWidth ? "w-full" : "w-auto"}`}>
			<div
				className={`flex focus-within:border-red-200 w-full flex-col border-[1px] p-2 mb-[0.15rem] rounded-md ${className}`}>
				<Typography variant="small" uppercase bold className="text-black">
					{label}
				</Typography>
				<input
					{...field}
					{...fieldState}
					{...formState}
					ref={ref}
					value={field?.value}
					className="mt-1 placeholder-gray-300 bg-transparent focus:ring-0 focus:outline-none text-black text-sm"
					type={type}
					placeholder={placeholder}
				/>
			</div>
			{fieldState?.error && (
				<Typography variant="small" className="text-red-500">
					{fieldState.error?.message}
				</Typography>
			)}
		</div>
	)
}

export default forwardRef(Inputfield)

export interface InputfieldProps {
	label: string
	type?: InputHTMLAttributes<HTMLInputElement>["type"]
	fullWidth?: boolean
	className?: InputHTMLAttributes<HTMLInputElement>["className"]
	placeholder?: string
	field?: ControllerRenderProps<FieldValues, string>
	fieldState?: ControllerFieldState
	formState?: UseFormStateReturn<FieldValues>
}
