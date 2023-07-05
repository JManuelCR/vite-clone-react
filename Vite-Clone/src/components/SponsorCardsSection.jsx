import SponsorCard from "./SponsorCard";

export default function SponsorCardsSection(props) {
  const title = `${props.title}`;
  const links = [props.links];

  return (
    <section className="vp-sponsors-section">
      <h3 className="vp-sponsor-tier">{title}</h3>
      <div className="sponsor-grid">
        {links[0].map((x, inx, arr) => {
          return(
            <div 
            className={`vp-sponsor-grid-item-${arr.length}`}
            key = {`sponsor-card-${inx}`}
            >
            <SponsorCard 
            key = {`sponsor-card-anchor${inx}`}
            sponsor={x} 
            classLength={arr.length}
            />
            </div>
          )
        })
        }
        </div>
    </section>
  );
}
