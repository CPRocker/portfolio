import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main class="flex flex-col gap-5 bg-slate-300">
      <section className="px-4 py-8 bg-slate-400">
        <img
            src="/logo.svg"
            width="64"
            height="64"
            alt="Carson Price logo: a C with a slash and a P"
          />
      </section>
      <section class="px-4 py-8 bg-sky-300">
        <div class="flex flex-col justify-center">
          <h1 class="text-4xl font-bold">Carson Price</h1>
          <h2 class="test-2xl font-semibold">Software Engineer and AI Enthusiast</h2>
          <p class="my-4">
          I build custom software solutions for all scenarios specializing in that of machine learning and data science.
          </p>
        </div>
        <div class="flex flex-row gap-2 items-center">
          <a href="https://www.linkedin.com/in/carson-price-0041a1221" target="_blank"><FaLinkedin size={32} /></a>
          <a href="https://github.com/CPRocker" target="_blank"><FaGithub size={32} /></a>
        </div>
      </section>
    </main>
  );
}
