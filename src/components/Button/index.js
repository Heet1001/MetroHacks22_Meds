import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder32: "rounded-radius32",
  RoundedBorder23: "rounded-radius235",
  RoundedBorder15: "rounded-radius155",
};
const variants = {
  icbFillRed302: "bg-red_302",
  FillLightblue901: "bg-light_blue_901 text-white_A700",
  OutlineBlack900:
    "bg-bluegray_100 border border-black_900 border-solid text-black_900",
};
const sizes = {
  smIcn: "lg:p-[11px] p-[14px] 2xl:p-[15px] 3xl:p-[18px]",
  sm: "lg:p-[5px] p-[7px] 3xl:p-[9px]",
  md: "p-[11px] 2xl:p-[12px] 3xl:p-[14px] lg:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder32",
    "RoundedBorder23",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "icbFillRed302",
    "FillLightblue901",
    "OutlineBlack900",
  ]),
  size: PropTypes.oneOf(["smIcn", "sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "icbCircleBorder32",
  variant: "icbFillRed302",
  size: "smIcn",
};

export { Button };
