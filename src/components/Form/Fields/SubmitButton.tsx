import { ComponentProps } from "react";

const SubmitButton = (props: Omit<ComponentProps<"button">, "type">) => <button {...props} type="submit" />;

export default SubmitButton;
