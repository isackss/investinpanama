import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <div className="relative flex flex-col justify-center">
          <Image
            src="/assets/img/city_panama.jpg"
            alt="Ciudad de Panamá"
            width={1200}
            height={1200}
            className="w-full"
          />
          <div className="absolute self-center text-center text-white">
            <div className="border bg-[#023061] text-5xl shadow-md">
              INVEST IN PANAMA
            </div>
            <p>Assets Protection & Corporate Solutions</p>
          </div>
        </div>
      </section>
    </main>
  );
}
