export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  href,
  ...props
}) {
  const baseStyles =
    "font-bold text-center transition-all duration-300 ease-out cursor-pointer inline-flex items-center justify-center w-fit no-underline select-none";

  const variants = {
    primary:
      "font-display normal-case py-[0.75rem] px-7 bg-gold-base text-[#0B1F3B] text-[0.85rem] tracking-[0.01em] rounded-[12px] relative overflow-hidden hover:-translate-y-[3px] hover:shadow-[0_12px_40px_var(--gold-glow)] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent)] before:opacity-0 hover:before:opacity-100",

    secondary:
      "font-display normal-case py-[0.75rem] px-7 bg-[rgba(255,255,255,0.04)] text-white-base text-[0.85rem] border border-[rgba(255,255,255,0.08)] rounded-[12px] transition-all duration-300 hover:-translate-y-[3px] hover:border-violet-500 hover:shadow-[0_12px_40px_rgba(139,92,246,0.35)] hover:text-white",

    nav: "font-display normal-case px-[1.25rem] py-[0.5rem] leading-none bg-gold-base text-[#0B1F3B] text-[0.8rem] tracking-[0.02em] rounded-[8px] border border-gold-base shadow-none hover:bg-gold-base hover:text-[#0B1F3B] hover:translate-y-[-1px] hover:shadow-[0_4px_20px_rgba(245,197,66,0.35)] active:translate-y-0",

    submit:
      "font-display uppercase !w-full py-[1rem] bg-gradient-to-r from-gold-base to-[#e8b530] text-[#0B1F3B] text-[0.95rem] tracking-[0.02em] rounded-[12px] border border-transparent shadow-[0_4px_20px_rgba(245,197,66,0.15)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(245,197,66,0.3)]",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
}
