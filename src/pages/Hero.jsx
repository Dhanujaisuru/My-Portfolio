import portfolioData from "../data/portfolioData";
import Button from "../components/buttons";

export default function Hero() {
  const { status, role, tagLine } = portfolioData;

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center pt-17 overflow-hidden relative z-1"
    >
      {/* Background Visuals (Grid Lines & Animated Glow Orbs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        {/* Orb 1 - Top Right */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-125 h-125 bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] -top-25 -right-25"></div>

        {/* Orb 2 - Bottom Left */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-100 h-100 bg-[radial-gradient(circle,rgba(245,197,66,0.12)_0%,transparent_70%)] -bottom-12.5 left-[10%] [animation-delay:-4s]"></div>

        {/* Orb 3 - Center */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-75 h-75 bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] top-[40%] left-[40%] [animation-delay:-2s]"></div>
      </div>

      <div className="w-full max-w-300 mx-auto pl-[7%] pr-[5%] lg:pl-[13%] lg:pr-[12%] relative z-10 max-[480px]:-translate-y-8">
        <div className="max-w-200 text-left">
          {status && (
            <div className="inline-flex items-center gap-2 py-[0.4rem] px-4 bg-gold-dim-base border border-gold-base/25 rounded-[100px] font-mono text-[0.72rem] tracking-widest text-gold-base mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-gold-base rounded-full animate-[pulse_2s_ease-in-out_infinite]"></span>
              {status}
            </div>
          )}

          {/* Name Display */}
          <h1 className="font-display text-[clamp(2.45rem,13.2vw,3.6rem)] sm:text-[clamp(3.5rem,8.5vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-white-base mb-2 animate-fade-up [animation-delay:0.1s]">
            Dhanuja{" "}
            <span className="block mt-1">
              Isuru<span className="text-gold-base">.</span>
            </span>
          </h1>

          {/* Role */}
          <p className="font-display text-[clamp(1.1rem,2vw,1.6rem)] font-semibold text-purple-base tracking-[-0.01em] mb-6 animate-fade-up [animation-delay:0.2s]">
            {role}
          </p>

          {/* Core Tagline */}
          <p className="text-[clamp(1rem,1.8vw,1.15rem)] font-light text-muted-base max-w-130 leading-[1.65] mb-10 animate-fade-up [animation-delay:0.3s]">
            {tagLine}
          </p>

          {/* Call to Actions Buttons */}
          <div className="flex gap-4 flex-wrap max-[480px]:flex-col animate-fade-up [animation-delay:0.4s]">
            <Button
              href="#projects"
              variant="primary"
              className="gap-2 max-[480px]:w-full!"
            >
              <span className="mr-1">⚡</span> View Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              className="gap-2 max-[480px]:w-full! hover:border-purple-base! hover:shadow-[0_12px_40px_var(--purple-glow)]!"
            >
              <span className="mr-1">✉️</span> Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-base font-mono text-[0.62rem] tracking-[0.15em] uppercase animate-fade-up [animation-delay:1s]">
        <div className="w-px h-8.75 bg-[linear-gradient(to_bottom,var(--gold),transparent)] origin-top animate-[scrollAnim_2s_ease-in-out_infinite]"></div>
        <span className="opacity-80">scroll</span>
      </div>
    </section>
  );
}
