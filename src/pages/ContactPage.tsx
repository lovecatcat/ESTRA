export function ContactPage() {
  return (
    <section className="section min-h-screen flex items-center">
      <div className="section-inner lg:pl-[clamp(48px,8.33vw,120px)]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="act-label whitespace-pre-line text-accent">CONTACT</span>
            <div className="w-[28px] h-px bg-accent" />
          </div>
          <h1 className="text-[clamp(32px,3.06vw,44px)] leading-[1.17] text-accent">
            Write to us.
          </h1>
          <p className="text-[clamp(14px,1.32vw,19px)] leading-[1.17] text-accent/60">
            studio@estra.com
          </p>
          <p className="text-[clamp(14px,1.32vw,19px)] leading-[1.17] text-accent/60 max-w-[clamp(280px,31.8vw,458px)]">
            We respond within two working days. Commissions and collaborations welcome.
          </p>
        </div>
      </div>
    </section>
  )
}
