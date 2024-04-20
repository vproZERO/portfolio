
import clsx from "clsx";
export const Link = ({ children, href, img , className}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={clsx("border-r-2 border-white flex pr-8 items-center justify-between md:justify-start gap-2 text-white hover:cursor-pointer transition hover:-translate-y-1 " , className)}
    >
      {children}
      <div className="w-[25px]">{img}</div>
    </a>
  );
};
