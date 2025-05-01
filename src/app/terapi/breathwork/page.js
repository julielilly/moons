"use client";

import PictureTextSection from "@/components/common/PictureTextSection";
import TopImage from "@/components/common/TopImage";
import Anmeldelser from "@/components/Anmeldesler";

import HeroImage from "@/app/assets/incense-2.png";
import Herbs from "@/app/assets/oils-2.jpg";
import Incense from "@/app/assets/insence.jpg";
import Moons from "@/app/assets/profile.jpg";

export default function Home() {
  return (
    <main>
      <TopImage
        header="Træk vejret dybt – og mød dig selv"
        copy="Vejrtrækning er mere end blot noget, vi gør automatisk. Gennem guidet breathwork får du adgang til dybere lag af dig selv – følelsesmæssigt, mentalt og fysisk. Hos Moons foregår breathwork med respekt og nærvær."
        imageName={HeroImage}
        imageAlt="urter"
      />
      <PictureTextSection
        imageName={Herbs}
        imageAlt="urter"
        header="En praksis til regulering og forløsning"
        copy="Breathwork kan hjælpe dig med at slippe spændinger, regulere dit nervesystem og komme i kontakt med det, du måske har haft svært ved at mærke. Sessionerne foregår i trygge rammer, hvor du bliver guidet gennem forskellige teknikker tilpasset dit behov."
        link="/booking"
        linkText="Book en session"
      />
      <PictureTextSection
        imageName={Incense}
        imageAlt="urter"
        header="Hvem er breathwork for?"
        copy="Breathwork passer både til dig, der vil fordybe din kropskontakt, og dig, der oplever uro, tankemylder eller følelsesmæssig fastlåsning. Øvelserne tilpasses den enkelte – uanset erfaring."
        link="/om/kontakt"
        linkText="Kontakt for at høre mere"
        imageLeft={true}
      />
      <Anmeldelser />
      <PictureTextSection
        imageName={Moons}
        imageAlt="Mogens"
        header="Et roligt rum med plads til dig"
        copy="Moons er skabt af en kompetent og omsorgsfuld terapeut, der møder dig med respekt, ro og professionalisme. Forløbet tager afsæt i det, du har brug for – og giver plads til netop din udvikling. Dyk ned i historien og mennesket bag Moons."
        link="/om"
        linkText="Mød terapeuten bag Moons"
        imageRound={true}
      />
    </main>
  );
}
