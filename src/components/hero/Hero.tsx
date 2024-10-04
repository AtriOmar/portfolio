import Omar from "@/assets/OmarAtriFull.jpg";
import Image from "next/image";
import ShowOnScroll from "../ShowOnScroll";
import TypewriterComponent from "@/components/hero/Typewriter";

export default function Hero() {
  return (
    <section className="container-1 flex justify-between items-center flex-col scr900:flex-row gap-8 py-52 px-4 scr900:px-8 ">
      <div className="w-full">
        <ShowOnScroll>
          <h2 className="font-bold text-4xl scr900:text-6xl">
            I'm <span className="text-red-500">Omar Atri</span>
          </h2>
        </ShowOnScroll>
        <ShowOnScroll>
          <p className="mt-8 font-medium text-3xl scr900:text-4xl">I am a Full Stack Developer</p>
        </ShowOnScroll>
        <ShowOnScroll>
          <TypewriterComponent />
        </ShowOnScroll>
        {/* <ShowOnScroll>
          <p className="max-w-[500px] mt-4 text-lg">
            I love building stuff online. From how a website looks to how it works behind the scenes, I enjoy making it all come together. Check out my work to
            see what I've been up to!
          </p>
        </ShowOnScroll> */}
      </div>
      <ShowOnScroll>
        <div className="relative w-full max-w-[300px] aspect-square rounded-full overflow-hidden outline outline-4 outline-offset-8 outline-red-500">
          <Image src={Omar} alt="Omar Atri Photo" />
        </div>
      </ShowOnScroll>
    </section>
  );
}
