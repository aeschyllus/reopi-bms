import classNames from "classnames";

enum EVariant {
  // primary = "text-white bg-gradient-to-tl from-blue-600 to-cyan-500",
  primary = "text-white bg-blue-500",
  outline = "text-blue-500 border transition ease-in-out hover:bg-gray-100",
}

enum EType {
  button,
  submit,
  reset,
}

interface IProps {
  children: React.ReactNode;

  /**
   * Type of button
   * @default primary
   */
  variant?: keyof typeof EVariant;

  /** Custom styles */
  className?: string;

  /**
   * Type of button
   * @default button
   */
  type?: keyof typeof EType;
}

export default function Button({
  children,
  variant = "primary",
  className,
  type = "button",
}: IProps) {
  const wrapClass = classNames(
    "group w-full px-6 py-3 text-center rounded-lg text-xs",
    {
      [EVariant[variant]]: variant,
    },
    className,
  );

  return (
    <button className={wrapClass} type={type}>
      {children}
    </button>
  );
}
