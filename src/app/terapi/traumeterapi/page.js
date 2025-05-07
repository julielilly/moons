"use client";

import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import HeroImage from "@/app/assets/oils-2.jpg";
import Oils from "@/app/assets/oils.jpg";
import Moons from "@/app/assets/profile.jpg";

export default function Home() {
  return (
    <main>
      <title>Traumeterapi - Moons by Mogens Gyldenløve</title>
      <TopImage
        header="Et trygt rum – til at hele i dit eget tempo"
        copy="Traumeterapi hos Moons tager udgangspunkt i kroppen og nervesystemet. Det handler ikke om at genfortælle hele historien, men om at finde tryghed, kontakt og balance – ét skridt ad gangen."
        imageName={HeroImage}
        imageAlt="urter"
      />
      <PictureTextSection
        imageName={Oils}
        imageAlt="olier"
        header="En kropsbaseret tilgang til traumer"
        copy="Når vi har været igennem svære begivenheder, kan kroppen bære på uforløst energi. Traumeterapien her arbejder med at regulere nervesystemet, styrke din fornemmelse af “jeg” og skabe en vej til forløsning – uden at forcere noget."
        link="/booking"
        linkText="Book et forløb der passer til dig"
      />
      <PictureTextSection
        imageName={HeroImage}
        imageAlt="urter"
        header="Hvem er traumeterapi for?"
        copy="Du behøver ikke have en diagnose. Måske har du bare mærket, at noget ikke helt falder på plads. Terapien er for dig, der føler dig overvældet, fastlåst, udmattet eller overaktiv – ofte som følge af svære livsomstændigheder, stress eller traumer."
        link="/om/kontakt"
        linkText="Tag kontakt i fortrolighed"
        imageLeft={true}
      />
      <Anmeldelser />
      <PictureTextSection
        imageName={Moons}
        imageAlt="Mogens"
        header="Terapi i trygge hænder"
        copy="Bag Moons står en erfaren og nærværende terapeut.
        Mødet med dig sker med respekt, ro og faglig dybde 
        – altid med fokus på at støtte dig i netop dét, du står i.
        Læs mere om baggrunden, mennesket og intentionen bag Moons."
        link="/om"
        linkText="Mød terapeuten bag Moons"
        imageRound={true}
      />
    </main>
  );
}
