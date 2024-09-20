import localFont from "next/font/local";

const krabby = localFont({
  src: "../app/fonts/KrabbyPatty.ttf",
  display: "swap",
});

export const HeaderComponent = () => {
  return (
    <header className="h-16 w-full border border-[#E0E5E8] flex justify-between px-6">
      {/* logo  and nav links*/}
      <nav className="flex h-full space-x-6 justify-center items-center">
        {/* logo */}
        <h1
          className={`font-bold ${krabby.className} `}
          style={{
            lineHeight: "1.0rem",
            fontSize: "1.875rem",
          }}
        >
          POZU
        </h1>
        <div className="h-[1.50rem]  w-[0.18rem] bg-[#949DA4] rotate-12 rounded-full mx-3"></div>
      </nav>
    </header>
  );
};
