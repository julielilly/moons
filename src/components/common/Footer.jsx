import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-green">
      <div className="section text-background">
        <div className="pt-2xl pb-xl gap-m grid sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-background mb-xs">Kontaktinformation</h4>
            <p>
              <span className="font-semibold">Moons</span> <br />
              Adresse navn <br /> XXXX Bynavn
            </p>
            <p>
              <a href="tel:+4500000000">Tlf:00 00 00 00</a> <br />
              <a href="mailto:mail@mail.com">Mail: mail@mail.com</a>
            </p>
            <p>CVR: 00000000</p>
            <div className="gap-2xs mt-s flex">
              <a target="blank" href="https://www.instagram.com/moons._____/">
                <Image
                  src="/icons/instagram-icon.svg"
                  alt="Instagram logo"
                  width={20}
                  height={20}
                />
              </a>
              <a
                target="blank"
                href="https://www.facebook.com/profile.php?id=1428230594"
              >
                <Image
                  src="/icons/facebook-icon.svg"
                  alt="Facebook logo"
                  width={20}
                  height={20}
                />
              </a>
              <a
                target="blank"
                href="https://open.spotify.com/user/113370700?si=1ae60158d81a484d"
              >
                <Image
                  src="/icons/spotify-icon.svg"
                  alt="Spotify logo"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-background mb-xs">Ydelser</h4>
            <ul>
              <li>
                <Link href="saunagus">Saunagus</Link>
              </li>
              <li>
                <Link href="traumeterapi">Traumeterapi</Link>
              </li>
              <li>
                <Link href="naturterapi">Naturterapi</Link>
              </li>
              <li>
                <Link href="breathwork">Breathwork</Link>
              </li>
              <li>
                <Link href="shop">Shop saunahuer</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-background mb-xs">Andet</h4>
            <ul>
              <li>
                <Link href="om">Om Moons</Link>
              </li>
              <li>
                <Link href="booking">Bookingkalender</Link>
              </li>
              <li>
                <Link href="kontakt">Kontakt</Link>
              </li>
              <li>
                <Link href="politik">Politikker og betingelser</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-background mb-xs">Sprog</h4>
          </div>
        </div>
        <div className="border-green py-2xs border-t">
          <Link href="/cookiepolitik">Cookiepolitik </Link>|
          <Link href="/persondatapolitik"> Persondatapolitik </Link>|
          <Link href="/"> www.moons.dk </Link>| Alle rettigheder forbeholdes
        </div>
      </div>
    </footer>
  );
};

export default Footer;
