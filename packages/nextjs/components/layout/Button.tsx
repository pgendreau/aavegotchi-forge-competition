import { forwardRef, useMemo } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

// define all the button attributes
type BaseButtonAttributes = React.ComponentPropsWithoutRef<"button">;

// define the ref type
type Ref = HTMLButtonElement;

// extend the base button attributes
interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: string;
}

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  Button.displayName = "Button";  
  // destructure neccesary props
  const { type, children, disabled, isLoading, leftIcon, rightIcon, className, ...rest } = props;

  // determine icon placement
  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = <ArrowPathIcon className="animate-spin" width={24} />;
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? ("right" as const) : ("left" as const),
    };
  }, [isLoading, leftIcon, rightIcon]);

  return (
    <button
      className={className}
      {...rest}
      type={type ? "submit" : "button"}
      ref={ref}
      disabled={disabled || isLoading}
    >
      {/** render icon before */}
      {icon && iconPlacement === "left" ? (
        <span className={`inline-flex shrink-0 self-center ${children && !isLoading && "mr-2"}`}>{icon}</span>
      ) : null}

      {/** hide button text during loading state */}
      {!isLoading && children}

      {/** render icon after */}
      {icon && iconPlacement === "right" ? (
        <span className={`inline-flex shrink-0 self-center  ${children && !isLoading && "ml-2"}`}>{icon}</span>
      ) : null}
    </button>
  );
});

// set default props
Button.defaultProps = {
  className:
    "rounded-sm px-2.5 py-1.5 text-xl font-semibold text-white shadow-sm hover:bg-frame focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
};

export default Button;
