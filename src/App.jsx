import { useState } from "react";

const NO_MESSAGES = [
  "Oops, that’s not what you meant, cupcake. Try the other button. 😉",
  "System error: Batman cannot decline this mission.",
  "Nice try. But we both know you’re my Valentine.",
  "Warning: Clicking ‘No’ may result in extra hugs and dramatic teasing.",
  "Access denied. True feelings detected: YES.",
];

const floatingHearts = [
  { left: "10%", delay: "0s", size: "text-base" },
  { left: "30%", delay: "2s", size: "text-xl" },
  { left: "50%", delay: "4s", size: "text-sm" },
  { left: "70%", delay: "1s", size: "text-2xl" },
  { left: "85%", delay: "3s", size: "text-lg" },
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [noText, setNoText] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleNoHover = (e) => {
    const x = (Math.random() - 0.5) * 220;
    const y = (Math.random() - 0.5) * 90;
    e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;

    const idx = (noCount + 1) % NO_MESSAGES.length;
    setNoText(NO_MESSAGES[idx]);
    setNoCount((c) => c + 1);
  };

  const handleNoClick = () => {
    const idx = (noCount + 1) % NO_MESSAGES.length;
    setNoText(NO_MESSAGES[idx]);
    setNoCount((c) => c + 1);
  };

  const handleYes = () => {
    setAccepted(true);
    setNoText("");
    setTimeout(() => {
      const el = document.getElementById("answerText");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#111827_0%,#020617_45%,#000000_100%)] px-4 py-6 text-slate-50">
      {/* floating hearts */}
      {floatingHearts.map((h, i) => (
        <div
          key={i}
          className={`pointer-events-none fixed -bottom-10 ${h.size} text-rose-400/60`}
          style={{
            left: h.left,
            animation: "floatUp 10s linear infinite",
            animationDelay: h.delay,
            zIndex: 0,
          }}
        >
          ♥
        </div>
      ))}

      {/* keyframes for hearts */}
      <style>
        {`
        @keyframes floatUp {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh) translateX(40px);
            opacity: 0;
          }
        }
      `}
      </style>

      <main className="relative z-10 w-full max-w-3xl rounded-3xl border border-slate-500/60 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.06),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.12),transparent_55%),linear-gradient(145deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] px-6 py-8 shadow-[0_30px_90px_rgba(0,0,0,0.95)] md:px-8 md:py-10">
        {/* bat-signal glow */}
        <div className="pointer-events-none absolute -top-40 -right-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,215,0,0.9)_0%,rgba(255,215,0,0.08)_60%,transparent_70%)] opacity-30" />

        {/* tagline */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-400/70 bg-slate-900/95 px-4 py-1 text-[0.78rem] uppercase tracking-[0.12em] text-slate-200">
          <span className="h-1.75 w-1.75 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,215,0,0.9)]" />
          <span>Valentine&apos;s Day · Gotham edition</span>
        </div>

        {/* eyebrow */}
        <p className="mb-3 text-[0.85rem] uppercase tracking-[0.18em] text-slate-400">
          Transmission from your favourite chaos
        </p>

        {/* heading */}
        <h1 className="mb-3 text-3xl leading-tight text-slate-50 text-shadow md:text-[2.6rem]">
          Even the Dark Knight
          <br />
          needs a{" "}
          <span className="whitespace-nowrap text-yellow-400 text-glow">
            Valentine.
          </span>
        </h1>

        {/* subtitle */}
        <p className="mb-8 text-[0.98rem] leading-relaxed text-slate-100">
          And out of everyone in Gotham, I&apos;m choosing{" "}
          <span className="font-semibold text-amber-200">you</span>, my sweet
          little cupcake, to be my one and only Valentine.
        </p>

        {/* chips */}
        <div className="mb-7 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/70 bg-slate-900/95 px-3 py-1 text-xs text-slate-100 shadow-[0_0_12px_rgba(15,23,42,0.8)]">
            <span>🦇</span>
            <span>Certified Batman fanboy</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/70 bg-slate-900/95 px-3 py-1 text-xs text-slate-100 shadow-[0_0_12px_rgba(15,23,42,0.8)]">
            <span>🧁</span>
            <span>Official nickname: cupcake</span>
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-500/70 bg-slate-900/95 px-3 py-1 text-xs text-slate-100 shadow-[0_0_12px_rgba(15,23,42,0.8)]">
            <span>🧡</span>
            <span>Powered by your smile</span>
          </span>
        </div>

        {/* divider */}
        <div className="mb-7 h-px bg-linear-to-r from-transparent via-slate-400/90 to-transparent" />

        {/* content */}
        <section className="mb-8 grid gap-6 md:grid-cols-[minmax(0,3.2fr)_minmax(0,2.2fr)]">
          {/* left text */}
          <div className="text-[0.96rem] leading-relaxed text-slate-100">
            <p className="mb-3">
              Gotham has Batman. My world has{" "}
              <span className="font-semibold text-amber-300">you</span>.<br />
              You&apos;re my superhero when I&apos;m overthinking, my peace
              when everything feels loud, and my favourite person to annoy for
              no reason at all.
            </p>

            <ul className="mt-2 space-y-1 text-[0.9rem] text-slate-200">
              <li className="relative pl-4">
                <span className="absolute left-0 top-0.5 text-[0.7rem] text-amber-300">
                  ★
                </span>
                You in serious mode = full Batman brooding energy.
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-0.5 text-[0.7rem] text-amber-300">
                  ★
                </span>
                You with me = soft, sweet, pure cupcake energy.
              </li>
              <li className="relative pl-4">
                <span className="absolute left-0 top-0.5 text-[0.7rem] text-amber-300">
                  ★
                </span>
                You plus me = the best kind of chaos.
              </li>
            </ul>

            <p className="mt-3">
              So obviously, I have a very important mission for you…
            </p>
          </div>

          {/* sweet box */}
          <aside className="rounded-2xl border border-amber-300/60 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.2),transparent_60%),radial-gradient(circle_at_bottom,rgba(248,113,113,0.18),transparent_60%),#020617] px-4 py-3.5 text-sm text-amber-50 shadow-[0_18px_35px_rgba(0,0,0,0.8)]">
            <p className="mb-1 text-[0.75rem] uppercase tracking-[0.12em] text-amber-300">
              Classified file · sweet weakness
            </p>
            <p className="mb-1 font-semibold">
              Codename: <span className="text-amber-200">Cupcake Mode</span>
            </p>
            <p className="text-amber-50/95">
              Side effects: instant happiness, cute smile, and me trying to
              steal your attention every time you look away.
            </p>
          </aside>
        </section>

        {/* CTA */}
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleYes}
              className="rounded-full bg-linear-to-r from-amber-300 to-amber-400 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-[0_0_18px_rgba(250,204,21,0.75)] transition hover:-translate-y-px hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(250,204,21,0.95)]"
            >
              Yes, I accept this mission
            </button>
            <button
              onMouseOver={handleNoHover}
              onClick={handleNoClick}
              className="relative rounded-full border border-slate-500/80 bg-transparent px-6 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-slate-900/95"
            >
              No (very wrong choice)
            </button>
          </div>

          <p className="max-w-xs text-[0.8rem] leading-relaxed text-slate-400">
            Warning: Saying no will result in dramatic sulking, extra teasing,
            and a lifetime supply of surprise hugs until you say yes.
          </p>
        </section>

        {accepted && (
          <p id="answerText" className="mt-4 text-sm text-emerald-300">
            Mission accepted. You&apos;re officially my Valentine, my Batman,
            and my forever cupcake with extra sweet, over-the-top love{" "}
            <span className="text-pink-400">♥</span>
          </p>
        )}

        {noText && !accepted && (
          <p className="mt-3 text-[0.85rem] text-rose-200">{noText}</p>
        )}
      </main>
    </div>
  );
}

export default App;
