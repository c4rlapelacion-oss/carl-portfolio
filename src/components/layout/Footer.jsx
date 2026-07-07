export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 mt-24">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <h2 className="font-bold text-lg">
          Carl Apelacion
        </h2>

        <p className="text-slate-500 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Carl Apelacion. All rights reserved.
        </p>

      </div>
    </footer>
  );
}