import React from "react";
const variantClasses = {
  h1: "lg:text-[28px] text-[36px] 2xl:text-[40px] 3xl:text-[48px]",
  h2: "lg:text-[19px] text-[24px] 2xl:text-[27px] 3xl:text-[32px]",
  h3: "lg:text-[16px] text-[20px] 2xl:text-[22px] 3xl:text-[27px]",
  h4: "lg:text-[14px] text-[18px] 2xl:text-[20px] 3xl:text-[24px]",
  h5: "font-normal lg:text-[12px] text-[16px] 2xl:text-[18px] 3xl:text-[21px]",
  h6: "font-bold lg:text-[11px] text-[14px] 2xl:text-[15px] 3xl:text-[18px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
