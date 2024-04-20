import clsx from "clsx";

export const Button = ({ children , variant , type , onClick , className}) => {
  return <button type={type} onClick={onClick} className={clsx("py-2 md:py-3 px-5 md:px-6" , className , {
    "bg-primary text-white" : variant === "primary",
  })}>{children}</button>;
};
