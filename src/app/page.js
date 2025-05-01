"use client";

import { useRef } from "react";

import ImageLinkSection from "@/components/ImageLinkSection";
import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import Moons from "@/app/assets/profile.jpg";
import Sunahue from "@/app/assets/hat.jpg";
import HeroImage from "@/app/assets/top-image.png";

export default function Home() {
  const linkSection = useRef();

  return (
    <main>
      <TopImage
        linkSection={linkSection}
        copy=" Moons skaber rum for dig, der søger en pause fra hverdagen. Gennem
          saunagus, naturterapi, breathwork og traumeterapi guider vi dig
          nænsomt hjem i dig selv."
        header="Find ro, balance og nærvær hos Moons"
        imageName={HeroImage}
        imageAlt="sauna"
      />
      <ImageLinkSection ref={linkSection} />
      <PictureTextSection
        imageName={Moons}
        imageAlt="Mogens"
        header="Et nærværende univers med rødder i naturen"
        copy="Moons er skabt af Mogens, med afsæt i erfaringer med krop, sind og
        natur. Et trygt rum, hvor både enkeltpersoner og grupper inviteres til
        at finde balance – med respekt, omsorg og bæredygtighed i centrum."
        link="/om"
        linkText="Læs mere om Moons"
      />
      <Anmeldelser />
      <PictureTextSection
        imageName={Sunahue}
        imageAlt="Orange saunahue"
        header="Bæredygtige produkter til din egen ro"
        copy="Opdag håndlavede saunahuer, der forlænger din Moons-oplevelse hjemme. Alle produkter er skabt med omtanke for både dig og jorden."
        link="/shop"
        linkText="Gå til shoppen"
        imageLeft={true}
        imageRound={true}
      />
    </main>
  );
}
