"use client";

import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import HeroImage from "@/app/assets/forrest-2.jpg";
import Forrest from "@/app/assets/forrest.jpg";
import Water from "@/app/assets/water.jpg";
import Moons from "@/app/assets/profile.jpg";

export default function Home() {
  return (
    <main>
      <title>Naturterapi - Moons by Mogens Gyldenløve</title>
      <TopImage
        header="Genforbind dig med naturen – og med dig selv"
        copy="Naturterapi hos Moons foregår i det fri – i skov, ved vand eller på åbne enge. Her skaber vi et rum, hvor stilhed, samtale og sanselighed får lov at arbejde sammen. Det handler ikke om at “løse noget”, men om at være til stede – med det, der er."
        imageName={HeroImage}
        imageAlt="urter"
      />
      <PictureTextSection
        imageName={Forrest}
        imageAlt="Skov"
        header="Et terapirum uden vægge"
        copy="Når vi er i naturen, bliver det lettere at mærke os selv. Kroppen falder hurtigere til ro, og vores nervesystem responderer på den rolige rytme omkring os.
        Samtalerne foregår i bevægelse – i stilhed eller med ord – og terapien skabes i samspillet mellem dig, naturen og terapeuten."
        link="/booking"
        linkText="Book en intro-session"
      />
      <PictureTextSection
        imageName={Water}
        imageAlt="vand"
        header="Hvem er traumeterapi for?"
        copy="Naturterapi er for dig, der har brug for ro og forankring. For dig, der har svært ved at sidde stille i et terapirum. Eller dig, der længes efter et frirum, hvor alting ikke skal forklares.
        Naturterapi er særligt gavnligt ved stress, overbelastning og følelsen af at være frakoblet."
        link="/om/kontakt"
        linkText="Kontakt for at høre mere"
        imageLeft={true}
      />
      <Anmeldelser />
      <PictureTextSection
        imageName={Moons}
        imageAlt="Mogens"
        header="Tryghed og faglighed i centrum"
        copy="Hos Moons møder du en terapeut med både erfaring og nærvær. Hver session tager udgangspunkt i dig – med respekt for din proces og et roligt, fagligt forankret rum. Her bliver du mødt præcis dér, hvor du er. Læs mere om personen og visionen bag Moons."
        link="/om"
        linkText="Mød terapeuten bag Moons"
        imageRound={true}
      />
    </main>
  );
}
