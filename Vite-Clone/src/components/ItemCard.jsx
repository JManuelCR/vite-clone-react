import ItemCardImage from "./ItemCardImage";

export default function ItemCard(props) {
  const icon = `${props.icon}`;
  const title = `${props.title}`;
  const description = `${props.description}`;

  return (
    <div className="item">
      <span className="VPLink">
        <article className="itemCard">
          <ItemCardImage icon={icon} />
          <h2 className="itemCard-title">{title}</h2>
          <p className="itemCard-text">{description}</p>
        </article>
      </span>
    </div>
  );
}
