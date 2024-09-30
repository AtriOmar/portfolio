"use client";

import { useEffect, useRef, useState } from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";
import ShowOnScroll from "./ShowOnScroll";
import { useInView } from "framer-motion";

function onInit(typewriter: TypewriterClass | null) {
  typewriter
    ?.typeString("Would you like an amazing website?")
    .pauseFor(500)
    .typeString("<br>Do you have a design in mind?")
    .pauseFor(500)
    .deleteAll()
    .typeString("I can help you with that!")
    .typeString("<strong>JS</strong> plugin for a cool typewriter effect and ")
    .typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
    .pauseFor(1000)
    .start();
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [started, setStarted] = useState(false);
  const [typewriter, setTypewriter] = useState<TypewriterClass | null>(null);

  useEffect(() => {
    if (started) return;

    if (inView) {
      setStarted(true);

      onInit(typewriter);
    }
  }, [inView, started, typewriter]);

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20" ref={ref}>
      <ShowOnScroll>
        <div className="text-3xl font-bold">
          <Typewriter options={{ delay: 40, deleteSpeed: 1 }} onInit={(typewriter) => setTypewriter(typewriter)} />
        </div>
      </ShowOnScroll>
    </div>
  );
}
