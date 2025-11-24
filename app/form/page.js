import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HadafDownloadCTA from "../components/HadafDownloadCTA";
import GoogleFormEmbed from "../components/GoogleFormEmbed";

export const metadata = {
  title: "Registration Form | code.af",
  description: "Submit your request — contact form embedded (Google Form).",
};

export default function FormPage() {
  const FORM_SRC =
    "https://docs.google.com/forms/d/e/1FAIpQLSdcgx4gS5OQvQL1eBLeLcFMmN1Ji2cW5SwzkJ_FEN5xg2dqjA/viewform?embedded=true";
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="relative rounded-2xl sm:rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] p-6 sm:p-10 md:p-14 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-64 w-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-16 h-72 w-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
            Register for the upcoming webinar
          </h1>

          {/* Closed Registration Banner */}
          <div className="mt-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            <p className="text-red-200 font-medium text-sm sm:text-base">
              Registrations are now closed. Thank you for your interest!
            </p>
          </div>

          <p className="mt-4 sm:mt-5 max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
            Join our free webinar on{" "}
            <b>“Software Engineering: A Million-Dollar Market for Afghans”</b>,
            presented by <b>Haroon Azizi</b>, creator of the{" "}
            <a
              href="https://had.af"
              className="underline decoration-dotted hover:text-neutral-300"
              target="_blank"
            >
              {" "}
              Hadaf
            </a>{" "}
            and{" "}
            <a
              href="https://code.af"
              className="underline decoration-dotted hover:text-neutral-300"
              target="_blank"
            >
              {" "}
              Code.af
            </a>{" "}
            . In this session, Haroon will explore career opportunities in
            software engineering, how Afghans can enter the global tech market,
            and practical steps to start earning in this field.
            <br />
            <br />
            Monday, 24 November 2025
            <br />
            8:00 PM Kabul Time
          </p>
          <div className="mt-8 sm:mt-10 w-full relative">
            {/* Overlay to disable interaction */}
            <div className="absolute inset-0 z-10 bg-neutral-950/80 backdrop-blur-[2px] flex flex-col items-center justify-center text-center p-6 rounded-xl border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-2">
                Registrations Closed
              </h3>
              <p className="text-neutral-400 max-w-md">
                We have reached capacity for this webinar. Please stay tuned for
                future events. Visit Hadaf (had.af) and Code.af for updates.
              </p>
            </div>
            <div className="opacity-20 pointer-events-none select-none grayscale">
              <GoogleFormEmbed src={FORM_SRC} forcedLocale="en-GB" />
            </div>
          </div>
          {/* 
          <p className="mt-6 text-xs text-neutral-500 text-center">
            Having trouble?{" "}
            <a
              href={FORM_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted hover:text-neutral-300"
            >
              Open the form in a new tab
            </a>
            .
          </p> 
          */}
        </div>
      </section>
      <HadafDownloadCTA />
      <Footer />
    </main>
  );
}
