"use client";

import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Typewriter, { TypewriterClass } from "typewriter-effect";

function onInit(typewriter: TypewriterClass | null) {
  typewriter
    ?.typeString("Do you want to know more about me?")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Do you have an idea of a website?")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Do you have a design in mind?")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I can help you with that!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Scroll down to know more about me ⬇️⬇️⬇️")
    .pauseFor(3000)
    .start();
}

export default function TypewriterComponent() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [started, setStarted] = useState(false);
  const [typewriter, setTypewriter] = useState<TypewriterClass | null>(null);

  useEffect(() => {
    if (started) return;

    onInit(typewriter);
  }, [inView, started, typewriter]);

  return (
    <div className="mt-8 text-3xl scr900:text-4xl font-medium">
      <Typewriter options={{ delay: 40, deleteSpeed: 1, loop: true }} onInit={(typewriter) => setTypewriter(typewriter)} />
    </div>
  );
}
