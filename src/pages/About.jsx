import portfolioData from "../data/portfolioData";

export default function About() {
  const { aboutMe: about } = portfolioData;
  const initials = about.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <section id="about" className="relative z-1 py-32">
      <div className="w-full max-w-300 mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-center">
          <div className="relative max-md:max-w-75 max-md:mx-auto animate-fade-up">
            <div className="w-full aspect-4/5 bg-(--card-bg) border border-glass-border-base rounded-lg overflow-hidden relative flex items-center justify-center backdrop-blur-[10px] after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent_40%,rgba(11,31,59,0.8))]">
              <div className="w-full h-full bg-[linear-gradient(135deg,var(--purple-dim)_0%,var(--gold-dim)_100%)] flex items-center justify-center font-display text-8xl font-extrabold text-white-base tracking-tighter">
                {initials}
              </div>
            </div>

            <div className="absolute w-30 h-30 border-2 border-gold-base rounded-(--radius) -bottom-5 -right-5 opacity-30"></div>
            <div className="absolute w-15 h-15 bg-(--purple-dim) border border-purple-base rounded-full -top-3.75 -left-3.75"></div>
          </div>

          <div className="animate-fade-up">
            {/* <span className="block font-mono text-[0.7rem] tracking-[0.2em] uppercase text-gold-base mb-3 opacity-90">
              // {about.title.toLowerCase()}
            </span> */}

            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white-base mb-6">
              {about.tagLine}
            </h2>

            <div className="w-15 h-0.5 bg-[linear-gradient(90deg,var(--gold),transparent)] my-6"></div>

            <div className="text-base leading-[1.8] text-muted-base mb-10">
              {/* <p>
                I'm{" "}
                <strong className="text-white-base font-medium">
                  {about.name}
                </strong>
                , {about.description.replace("I'm ", "")}
              </p> */}

              <br />

              <p>{about.extendedBio}</p>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden p-5 bg-(--card-bg) border border-glass-border-base rounded-(--radius) backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-gold-base/30 before:content-[''] before:absolute before:top-0 before:left-0 before:w-0.75 before:h-full before:bg-gold-base before:scale-y-0 before:transition-transform before:duration-300 hover:before:scale-y-100"
                >
                  <div className="font-display text-[1.8rem] font-extrabold text-gold-base tracking-[-0.03em] leading-none">
                    {stat.value}
                  </div>

                  <div className="text-[0.8rem] text-muted-base mt-1 font-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}