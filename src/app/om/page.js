"use client";

import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import HeroImage from "@/app/assets/om-hero.jpg";
import Moons from "@/app/assets/profile.jpg";
import Elements from "@/app/assets/elements.jpg";
import Profile from "@/app/assets/profile-2.jpg";

export default function Page() {
  return (
    <main>
      <title>Om Moons - Moons by Mogens Gyldenløve</title>
      <TopImage
        header="Moons – Et sted for nærvær, ro og transformation"
        copy="Skabt af Mogens Gyldenløve – gusmester, terapeut og naturmenneske.
        Moons er et sted, hvor du kan vende tilbage til dig selv. Et rum for fordybelse, heling og forbindelse. Her arbejder Mogens med elementerne, kroppen og naturen – for at hjælpe dig til at finde ro, balance og klarhed i en travl verden."
        imageName={HeroImage}
        imageAlt="urter"
      />
      <PictureTextSection
        imageName={Moons}
        imageAlt="Mogens"
        header="Mogens' rejse – Fra vinterbadning til dyb ro"
        copy="I vinteren 2019 besøgte Mogens Helgoland Badeanstalt og blev grebet af den intense ro, der opstår i mødet mellem det kolde hav og den varme sauna. Det blev starten på en rejse ind i kroppen, naturen og ritualernes verden."
        link="/saunagus"
        linkText="Udforsk saunagus"
      >
        <p>
          Efter egne erfaringer uddannede han sig som gusmester og lærte om
          æteriske olier, tørrede urter og guidede åndedrætsteknikker. Senere
          deltog han i en Wim Hof-workshop og begyndte at integrere teknikkerne
          i sine sessioner. For Mogens handler gus ikke kun om varme – men om
          transformation og tilstedeværelse.
        </p>
      </PictureTextSection>
      <PictureTextSection
        imageName={Elements}
        imageAlt="De fem elementer"
        header="Moons og de fem elementer – Et levende fundament"
        copy="Moons er ikke bare et brand – det er en forlængelse af Mogens selv. Hans arbejde er dybt forankret i de fem elementer fra kinesisk filosofi:"
        link="/terapi"
        linkText="Læs mere om terapiformerne"
        imageLeft={true}
      >
        <ul className="ul mb-2xs">
          <li>Træ – Skoven og livets vækst</li>
          <li>Vand – Vinterbadningens kolde dyb</li>
          <li>Ild – Saunaens rensende varme</li>
          <li>Metal – Det magnetiske nærvær</li>
          <li>Jord – Den bærende, livgivende kraft</li>
        </ul>
        <p>Alt er forbundet – både i kroppen og i naturen.</p>
      </PictureTextSection>
      <Anmeldelser />
      <PictureTextSection
        imageName={Profile}
        imageAlt="Mogens"
        header="En empatisk tilgang til mennesker og processer"
        copy="Mogens er kendt for sin nærværende og rolige tilgang. Han møder mennesker uden fordomme og med stor respekt for deres individuelle rejse. Uanset om det handler om traumer, stress eller bare behovet for at trække vejret dybere, tilbyder han et trygt og tillidsfuldt rum at lande i."
        link="/booking"
        linkText="Book en session"
        imageRound={true}
      >
        <p>
          Moons er for dig, der søger en pause – et frirum til at vende hjem til
          dig selv.
        </p>
      </PictureTextSection>
    </main>
  );
}
