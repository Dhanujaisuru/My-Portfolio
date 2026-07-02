import portfolioData from "../data/portfolioData";
import Button from "../components/buttons";

export default function Hero() {
  const { status, role, tagLine } = portfolioData;

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center pt-17 overflow-hidden relative"
    >
      {/* Background Visuals (Grid Lines & Animated Glow Orbs) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid lines background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[60px_60px]"></div>

        {/* Orb 1 - Top Right */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-125 h-125 bg-[radial-gradient(circle,var(--gold-dim)_0%,transparent_70%)] -top-25 -right-25 [animation-delay:0s]"></div>

        {/* Orb 2 - Bottom Left */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-100 h-100 bg-[radial-gradient(circle,var(--gold-dim)_0%,transparent_70%)] -bottom-12.5 left-[10%] [animation-delay:-4s]"></div>

        {/* Orb 3 - Center */}
        <div className="absolute rounded-full blur-[80px] animate-[float_8s_ease-in-out_infinite] w-75 h-75 bg-[radial-gradient(circle,var(--gold-dim)_0%,transparent_70%)] top-[40%] left-[40%] [animation-delay:-2s]"></div>
      </div>

      <div className="w-full max-w-300 mx-auto px-[5%] relative z-10">
        <div className="max-w-180 text-left">
          {status && (
            <div className="inline-flex items-center gap-2 py-[0.4rem] px-4 bg-glass-base border border-glass-border-base rounded-[100px] font-mono text-[0.72rem] tracking-widest text-gold-base mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 bg-gold-base rounded-full animate-[pulse_2s_ease-in-out_infinite]"></span>
              {status}
            </div>
          )}

          {/* Name Display */}
          <h1 className="font-display text-[clamp(3.5rem,8.5vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-white-base mb-2 animate-fade-up [animation-delay:0.1s]">
            Dhanuja{" "}
            <span className="block mt-1">
              Isuru<span className="text-gold-base">.</span>
            </span>
          </h1>

          <p className="font-display text-[clamp(1.1rem,2vw,1.5rem)] font-semibold text-purple-base tracking-[-0.01em] mb-6 animate-fade-up [animation-delay:0.2s]">
            {role}
          </p>

          {/* Core Tagline */}
          <p className="text-[clamp(0.95rem,1.5vw,1.1rem)] font-light text-muted-base max-w-135 leading-[1.65] mb-10 animate-fade-up [animation-delay:0.3s]">
            {tagLine}
          </p>

          {/* Call to Actions Buttons */}
          <div className="flex items-center gap-4 flex-wrap animate-fade-up [animation-delay:0.4s]">
            <Button href="#projects" variant="primary">
              <span className="mr-1">⚡</span> View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              <span className="mr-1">✉️</span> Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-base font-mono text-[0.62rem] tracking-[0.15em] uppercase animate-fade-up [animation-delay:1s]">
        <div className="w-px h-8.75 bg-[linear-gradient(to_bottom,var(--gold),transparent)] origin-top animate-[scrollAnim_2s_ease-in-out_infinite]"></div>
        <span className="opacity-80">scroll</span>
      </div>
    </section>
  );
}