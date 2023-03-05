import { FormikConfig, FormikValues, useFormik } from "formik";
import { Schema, InferType } from "Yup";

export type useYupFormType<Y extends Schema> = {
	schema: Y;
	onSubmit: (values: FormikValues) => void;
	clearForm?: boolean;
} & Exclude<FormikConfig<InferType<Y>>, "validationSchema">;

export const useYupForm = <Y extends Schema>({ schema, onSubmit, clearForm, ...formProps }: useYupFormType<Y>) =>
	useFormik({
		...formProps,
		validateOnBlur: false,
		validateOnChange: false,
		validateOnMount: false,
		validationSchema: schema,
		onSubmit: (values, { setSubmitting, resetForm }) => {
			onSubmit(values);
			setSubmitting(false);
			if (clearForm) {
				resetForm();
			}
		},
	});
