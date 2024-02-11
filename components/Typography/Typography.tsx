import classNames from "classnames";

enum EVariant {
  h1 = "text-3xl",
  h2 = "text-2xl",
  h3 = "text-lg",
  body1 = "text-base",
  body2 = "text-sm",
  body3 = "text-xs",
}

enum EWeight {
  normal = "font-normal",
  medium = "font-medium",
  bold = "font-bold",
}

interface IProps {
  children: React.ReactNode;

  /** Type of typography with different font sizes */
  variant: keyof typeof EVariant;

  /**
   * Font weight
   * @default normal
   */
  weight?: keyof typeof EWeight;

  /**
   * HTML element to be rendered in the DOM
   * @default <div></div>
   */
  component?: string;

  /** Custom styles */
  className?: string;
}

export default function Typography({
  children,
  variant,
  weight = "normal",
  component = "div",
  className,
}: IProps) {
  const CustomTag = component as keyof JSX.IntrinsicElements;
  const wrapClass = classNames(
    {
      [EVariant[variant]]: variant,
      [EWeight[weight]]: weight,
    },
    className
  );

  return <CustomTag className={wrapClass}>{children}</CustomTag>;
}
