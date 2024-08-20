import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-sky-300">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="Carson Price logo: a C with a slash and a P"
        />
        <h1 class="text-4xl font-bold">Welcome to carsonprice.me</h1>
        <p class="my-4">
          This site is dedicated to my life as a developer.
        </p>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <a href="https://www.linkedin.com/in/carson-price-0041a1221" target="_blank"><FaLinkedin size={32} /></a>
        <a href="https://github.com/CPRocker" target="_blank"><FaGithub size={32} /></a>
      </div>
    </div>
  );
}
