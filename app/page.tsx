import Image from "next/image";
import {
  Cross,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Users,
  Youtube,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap heroGrid">
          <div className="copy">
          <Image
  src="/jesus-found-me-official-logo.png"
  alt="Jesus Found Me"
  width={1000}
  height={600}
  priority
  className="heroLogo"
/>

            <h1>
              Real stories.
              <br />
              Real people.
              <br />
              Real change.
            </h1>

                      <div className="coming">
              <span>HE'S COMING SOON</span>
              <i />
            </div>

            <p className="desc">
            "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." - Isaiah 40:31
            </p>

           
          </div>

          <div className="visual">
  <div className="video">
    <video controls poster="/video-poster.png" className="videoPlayer">
      <source src="/coming-soon.mp4" type="video/mp4"  />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
        </div>
      </section>

      <section className="pillars">
        <div className="wrap pillarGrid">
          <Pillar icon={<Users />} title="Real People Real Stories">
            Authentic testimonies from every walk of life.
          </Pillar>

          <Pillar icon={<MapPin />} title="Cities Nationwide">
            Stories planted in cities, neighborhoods, and communities.
          </Pillar>

          <Pillar icon={<Heart />} title="Go Ye Therefore">
            Your changed heart has the power to open the eyes of someone else.
          </Pillar>

          <Pillar icon={<Cross />} title="Jesus Still Finds People">
            And He will find you too.
          </Pillar>
        </div>
      </section>

      <section className="closing">
        <h2>Someone powerful is coming.</h2>
       
        {/* <div className="socials">
          <a href="#" aria-label="Instagram">
            <Instagram />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube />
          </a>
        </div> */}
      </section>
    </main>
  );
}

function Pillar({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="pillar">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}