import Footer from "@components/Fotter";
import TextArea from "./components/TextArea";

export default function Page() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col gap-9 justify-center items-center py-12 px-4">
      <TextArea />
      <Footer />
    </div>
  );
}
