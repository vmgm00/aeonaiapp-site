export default function NotFound() {
  return (
    <section className="flex w-full flex-1 items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center gap-4 text-center text-white">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-white/70">
          The page you&apos;re looking for has moved or no longer exists.
        </p>
        <a
          className="text-base font-medium text-[#9FE8C1] transition hover:text-white"
          href="/"
        >
          Return home
        </a>
      </div>
    </section>
  );
}
