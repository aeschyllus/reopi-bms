import { Typography } from "../Typography";
import { useField } from "formik";
import { Input } from "antd";

enum EInputType {
  text,
  password,
  email,
  number,
}

enum ESize {
  large,
  small,
}

interface IProps {
  /** Type of input */
  type: keyof typeof EInputType;

  /** Placeholder text in the input field */
  placeholder: string;

  /** Name of input field. Necessary for form handling */
  name: string;

  /** Label of the input field */
  label?: string;

  /** Custom styles ***for the input element*** */
  className?: string;

  /** Size of the input field */
  size?: keyof typeof ESize;
}

export default function CustomInput({
  type,
  placeholder,
  name,
  label,
  className,
  size,
}: IProps) {
  // field contains the ff. attributes
  // - name, value, onChange, and onBlur
  // meta contains the ff. properties
  // - touched and error
  const [field, meta] = useField(name);

  return (
    <>
      {label && (
        <Typography
          variant="body2"
          weight="medium"
          className="mb-2"
          component="label"
        >
          {label}
        </Typography>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        className={className}
        status={meta.touched && meta.error ? "error" : ""}
        size={size}
        {...field}
      />
      {meta.touched && meta.error && (
        <Typography variant="body3" className="text-red-500 mt-2">
          {meta.error}
        </Typography>
      )}
    </>
  );
}
