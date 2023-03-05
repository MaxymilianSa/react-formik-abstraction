import { ComponentProps, forwardRef } from "react";
import { useFormikContext } from "formik";

type InputProps = {
	name: string;
	label: string;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const form = useFormikContext();
	const { value, error } = form.getFieldMeta<string | number | readonly string[] | undefined>(props.name);

	return (
		<div>
			<label htmlFor={props.name}>{props.label}</label>
			<input {...{ ...props, ref, value, onChange: form.handleChange }} />
			{error && <p>{error}</p>}
		</div>
	);
});

export default Input;
