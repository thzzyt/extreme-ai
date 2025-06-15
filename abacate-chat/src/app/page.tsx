export default function Page() {
  return (
    <div className="bg-white w-full flex flex-col gap-9 justify-center items-center h-screen">
      <h1 className="font-semibold text-[32px] leading-[1.4] tracking-[-0.02em] text-center align-middle text-[#121217]">
        Qual tech você quer usar para integrar a Abacate?
      </h1>
      <textarea className="w-[732px] h-[116px] resize-none bg-[#F6F8FA] rounded-[20px]" />
    </div>
  );
}
