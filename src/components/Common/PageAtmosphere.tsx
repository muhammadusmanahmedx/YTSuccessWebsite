/** Site-wide grid + gradient atmosphere (same language as Services). */
export default function PageAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* Soft red / amber gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgba(245,32,39,0.24),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_0%,rgba(255,176,32,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_0%_45%,rgba(245,32,39,0.1),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(245,32,39,0.08),transparent_50%)]" />

      {/* Grid boxes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-size-[48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />

      {/* Floating orbs */}
      <div className="absolute -left-24 top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(245,32,39,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute -right-20 top-48 size-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,176,32,0.1),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-20 left-1/3 size-[400px] rounded-full bg-[radial-gradient(circle,rgba(245,32,39,0.1),transparent_70%)] blur-3xl" />
    </div>
  )
}
