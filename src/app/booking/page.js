import TopImage from "@/components/common/TopImage";
import BookingFlow from "@/components/booking/BookingFlow";

import HeroImage from "@/app/assets/booking.png";

export default function Page() {
  return (
    <main>
      <title>Booking - Moons by Mogens Gyldenløve</title>
      <TopImage
        header="Book din tid – skab ro, balance og forandring"
        copy="Hos Moons finder du et rum til fordybelse, nærvær og heling. Her kan du booke alt fra saunagus og breathwork til terapeutiske forløb og naturterapi. Hver session er designet med respekt for din proces og med fokus på at støtte nervesystemet – uanset om du søger ro, forløsning eller ny energi."
        imageName={HeroImage}
        imageAlt="urter"
      >
        Alle tilbud er guidet af certificeret terapeut og gusmester, og du er
        altid velkommen, uanset erfaring. Læs mere om de enkelte forløb herunder
        og find den tid, der passer dig.
      </TopImage>

      <BookingFlow />
    </main>
  );
}
