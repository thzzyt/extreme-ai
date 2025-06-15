
import IconMicrofone from "@icons/microphone";
import IconSubmit from "@icons/submite";

export default function TextArea() {
  return (
    <>
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl leading-tight text-center text-[#121217]">
        Qual tech você quer usar para integrar a Abacate?
      </h1>

      <div className="relative w-full max-w-3xl">
        <textarea
          placeholder="Quero integrar a abacate com..."
          className="
            w-full h-28 sm:h-32 bg-[#F6F8FA] resize-none
            rounded-2xl pl-6 pr-12 pt-6 text-[#121217] text-base font-normal
            placeholder-[#7A7A8C] caret-transparent focus:caret-current
            focus:outline-none focus:ring-2 focus:ring-[#9EEA6C]
          "
        />

        <button className="absolute left-6 bottom-6">
          <IconMicrofone />
        </button>
        <button className="absolute right-6 bottom-6">
          <IconSubmit />
        </button>
      </div>
    </>
  );
}
