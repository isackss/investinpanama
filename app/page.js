import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
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
          <div className="absolute w-full self-center bg-gradient-to-r from-[#023061]/50 via-[#023061] to-[#023061]/50 p-2 text-center font-body font-light shadow-md">
            <div className="">
              <div className="w-full font-serif text-5xl font-normal text-white max-sm:text-2xl">
                INVEST IN PANAMA
              </div>
              <p className="tracking-widest text-white text-opacity-75 max-sm:inline">
                Assets Protection <span>&</span> Corporate Solutions
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex max-sm:flex-col">
            <div className="flex-1 bg-[#023061] p-4 text-center text-white">
              Need help?
            </div>
            <div className="flex-1 border-t-[15px] border-[#A08617] p-4 max-sm:hidden"></div>
          </div>
          <section className="flex text-[#32556C] max-sm:flex-col">
            <div className="flex-1 p-6">
              <div className="flex flex-col items-center">
                <div className="p-4 font-bold">Contact</div>
                <div className="flex justify-center align-middle">
                  <Image
                    src="/assets/img/arias.jpg"
                    width={200}
                    height={200}
                    alt="arias"
                    className="mb-2"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold">Alejandro Arias</p>
                  <i>Attorney at Law</i>
                </div>
                <p>
                  <WhatsAppIcon />
                  +507.6983.7069
                </p>
                <p>
                  <EmailOutlinedIcon /> alejandroarias7@hotmail.com
                </p>
              </div>
              <div className="text-center">
                <p>Corporate Law</p>
                <p>Banking Account</p>
                <p>Tax Regulations</p>
              </div>
            </div>
            <div className="flex-1 p-6">
              <div className="flex flex-col items-center">
                <div className="p-4 font-bold">Contact</div>
                <div className="flex justify-center align-middle">
                  <Image
                    src="/assets/img/chiari.jpg"
                    width={200}
                    height={200}
                    alt="chiari"
                    className="mb-2"
                  />
                </div>
                <div className="text-center">
                  <p className="font-bold">Juan Luis Chiari</p>
                  <i>International Business</i>
                </div>
                <p>
                  <LocalPhoneOutlinedIcon /> +1 (645) 214.6244
                </p>
                <p>
                  <EmailOutlinedIcon /> jchiaricampbell@gmail.com
                </p>
              </div>
              <div className="text-center">
                <p>Business & Investment Consultant Real State</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      <footer className="flex bg-[#023061] text-center text-[#A08617]">
        <div className="flex flex-1 items-center justify-center border-t-[15px] border-[#A08617] p-6 align-middle">
          Monday to Friday
        </div>
        <div className="flex flex-1 justify-center p-6 align-middle">
          Plaza Obarrio, Planta Baja, Calle 56, Obarrio, Panamá
        </div>
      </footer>
    </main>
  );
}
