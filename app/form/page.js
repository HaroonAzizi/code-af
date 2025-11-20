import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GoogleFormEmbed from "../components/GoogleFormEmbed";

export const metadata = {
  title: "Contact Form | code.af",
  description: "Submit your request — contact form embedded (Google Form).",
};

export default function FormPage() {
  const FORM_SRC =
    "https://docs.google.com/forms/d/e/1FAIpQLSdcgx4gS5OQvQL1eBLeLcFMmN1Ji2cW5SwzkJ_FEN5xg2dqjA/viewform?embedded=true";
  return (
    <main className="bg-neutral-950 min-h-screen text-neutral-100">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="relative rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] p-8 sm:p-14 overflow-hidden">
          <div className="absolute -top-24 -left-24 h-64 w-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-16 h-72 w-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
            Register for the upcoming webinar
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
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
          <div className="mt-10 max-w-3xl mx-auto">
            <GoogleFormEmbed src={FORM_SRC} forcedLocale="en-GB" />
          </div>
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
        </div>
      </section>
      <Footer />
    </main>
  );
}
