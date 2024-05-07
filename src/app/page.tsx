import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-center">
        Welcome to TailorHub Restaurants Application
      </h1>
      <p className="text-lg text-center mt-4">
        This is a Challenge build with Next.js, Typescript & Tailwind CSS
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 items-end">
        <div className="bg-gray-400 rounded-lg text-black p-6 h-[400px] flex flex-col justify-center mr-3">
          <h2 className="text-xl font-bold ml-4">Onboarding Restaurants</h2>
          <p className="text-xl mt-6 ml-4">
            Hola, <br />
            Entra y conoce nuestra selección de los mejores restaurantes para
            que te sientas como en casa.
          </p>
          <Link
            className="bg-gray-100 hover:bg-gray-300 text-black px-6 py-2 ml-4 rounded-md border border-black mt-4 max-w-[9rem]"
            href="/sign-in"
          >
            Get Started
          </Link>
        </div>
        <div className="relative flex justify-center">
          <Image
            src="/restaurant-home.jpg"
            alt="Imagen"
            width={700}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
