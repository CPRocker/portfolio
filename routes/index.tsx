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
    </div>
  );
}
