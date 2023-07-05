export default function SponsorCard (props){
    const sponsor = props.sponsor
    const classLength = props.classLength
    return (     
            <a href="#" className={`vp-sponsor-grid-link-${classLength}`}>
                <img src={sponsor} alt="Sponsor image" />
            </a>
    )
}