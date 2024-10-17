export default function Home() {
  return (
    <div className="flex size-full h-screen justify-between max-sm:flex-col">
      <div className="flex h-1/2 w-full flex-col items-center justify-center bg-[#ebcd79] sm:h-screen">
        <div className="mb-2 font-serif text-5xl italic">Chiari & Arias</div>
        <div className="mb-6 border-2 border-white p-2 text-lg font-bold text-white">
          REAL ESTATE AGENCY
        </div>
        <div className="text-xl">HIRE A REALSTATE AGENT</div>
        <div className="text-xl font-bold">WHO WILL INVEST IN YOUR SUCCESS</div>
      </div>
      <div className="w-full p-4">
        <form className="mt-4 w-full rounded-md border px-2 py-4 shadow-md">
          <h2 className="mb-4 text-2xl">Get a free consultation</h2>
          <div className="mb-4 flex flex-col">
            <label className="font-bold">Full name</label>
            <input className="rounded-md border p-2" />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold">Email</label>
            <input className="rounded-md border p-2" />
          </div>
          <div className="mb-4 flex flex-col">
            <label className="font-bold">Country</label>
            <input className="rounded-md border p-2" />
          </div>
          <button className="w-full rounded-md bg-red-700 p-4 text-white">
            RESERVE A SLOT
          </button>
        </form>
      </div>
    </div>
  );
}
