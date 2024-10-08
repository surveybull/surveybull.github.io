import clsx from "clsx";
import { Link } from "react-router-dom";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  );
}

const variantStyles = {
  primary:
    "rounded-md text-white bg-[#008DDA] py-1 px-3  hover:bg-slate-700 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-1 dark:ring-inset dark:ring-teal-400/20 dark:hover:bg-teal-400/10 dark:hover:text-teal-300 dark:hover:ring-teal-300",
  secondary:
    "rounded-full bg-slate-100 py-1 px-3 text-slate-900 hover:bg-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:ring-1 dark:ring-inset dark:ring-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-300",
  filled:
    "rounded-full bg-slate-900 py-1 px-3 text-white hover:bg-slate-700 dark:bg-teal-500 dark:text-white dark:hover:bg-teal-400",
  outline:
    "rounded-md py-1 px-3 text-slate-700 ring-1 ring-inset ring-slate-900/10 hover:bg-slate-900/2.5 hover:text-slate-900   ",
  text: "text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300",
};

export function Button({
  variant = "primary",
  className,
  children,
  arrow,
  ...props
}) {
  className = clsx(
    "inline-flex gap-0.5 justify-center items-center overflow-hidden font-medium transition text-center",
    variantStyles[variant],
    className,
    "px-5 py-1.5 text-md"
  );

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        "mt-0.5 ml-2 h-8 w-8",
        variant === "text" && "relative top-px",
        arrow === "left" && "-ml-1 rotate-180",
        arrow === "right" && "-mr-1"
      )}
    />
  );

  let inner = (
    <>
      {arrow === "left" && arrowIcon}
      {children}
      {arrow === "right" && arrowIcon}
    </>
  );

  if (typeof props.href === "undefined") {
    return (
      <button className={className} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  );
}
