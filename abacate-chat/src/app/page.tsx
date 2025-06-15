import IconDiscord from "../../public/icons/discord";
import IconYoutube from "../../public/icons/youtube";
import IconInstagram from "../../public/icons/instagram";
import IconTwitter from "../../public/icons/twitter";
import IconGithub from "../../public/icons/github";

export default function Page() {
  return (
    <div className="bg-white w-full flex flex-col gap-9 justify-center items-center h-screen">
      <h1 className="font-semibold text-[32px] leading-[1.4] tracking-[-0.02em] text-center align-middle text-[#121217]">
        Qual tech você quer usar para integrar a Abacate?
      </h1>
      <textarea
        placeholder="Quero integrar a abacate com..."
        className="w-[732px] h-[116px] resize-none bg-[#F6F8FA]
        rounded-[20px] pl-6 pr-16 pt-6 text-[#121217] text-base font-normal
        placeholder-[#7A7A8C] focus:outline-[#9EEA6C] "
      />
      <footer className="flex p-8 gap-4 mt-2 absolute bottom-0 w-full justify-between text-[#4C5267]">
        <div>
          <p className="font-semibold text-[16px] leading-[1.4] tracking-[0.1px] text-right align-middle">
            AbacatePay @ {new Date().getFullYear()}
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="font-semibold text-[16px] leading-[1.4] tracking-[0.1px] text-right align-middle">
            Termos e condições
          </p>
          <p className="font-semibold text-[16px] leading-[1.4] tracking-[0.1px] text-right align-middle">
            Privacidade
          </p>
          <hr className="w-1px h-5 bg-[#E2E7F1]" />
          <IconDiscord />
          <IconYoutube />
          <IconInstagram />
          <IconTwitter />
          <IconGithub />
        </div>
      </footer>
    </div>
  );
}
