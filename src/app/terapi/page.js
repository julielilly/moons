"use client";

import { useRef } from "react";

import ImageLinkSection from "@/components/ImageLinkSection";
import TopImage from "@/components/common/TopImage";

import HeroImage from "@/app/assets/water-2.jpg";

export default function Home() {
  const linkSection = useRef();

  return (
    <main>
      <TopImage
        linkSection={linkSection}
        header="Terapi hos Moons – Et trygt rum til at finde hjem i dig selv"
        copy="Moons tilbyder et rum til at lande. Et sted hvor nervesystemet får plads til at finde ro, og hvor du bliver mødt med nærvær og respekt – uanset hvor du er i livet. Terapi her er ikke én fast metode, men en tilgang med plads til at lytte indad. Du kan vælge den form, der passer til dig: naturterapi, traumeterapi eller breathwork."
        imageName={HeroImage}
        imageAlt="hav"
      />
      <ImageLinkSection ref={linkSection} showAll={false} />
    </main>
  );
}
