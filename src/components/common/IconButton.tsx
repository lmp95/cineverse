import { ButtonHTMLAttributes } from "react"

function IconButton({ icon, ...props }: IconButtonProps): JSX.Element {
	return (
		<button
			{...props}
			className={`text-red-500 p-2 rounded-full hover:text-white/75 ${props.className}`}>
			{icon}
		</button>
	)
}

export default IconButton

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon: JSX.Element
}
