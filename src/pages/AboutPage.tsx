export function AboutPage() {
  return (
    <section className="section min-h-screen flex items-center">
      <div className="section-inner md:pl-[clamp(48px,8.33vw,120px)]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="act-label whitespace-pre-line text-accent">ABOUT</span>
            <div className="w-[28px] h-px bg-accent" />
          </div>
          <h1 className="text-[clamp(32px,3.06vw,44px)] leading-[1.17] text-accent">
            Structure is
            <br />
            the argument.
          </h1>
          <p className="text-[clamp(14px,1.32vw,19px)] leading-[1.17] text-accent/60 max-w-[clamp(280px,31.8vw,458px)]">
            ESTRA is a design studio built on the principle that the frame comes first.
            We work across architecture, furniture, and visual identity — always starting from structure.
          </p>
        </div>
      </div>
    </section>
  )
}
