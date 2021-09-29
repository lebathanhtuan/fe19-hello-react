function Item(props) {
  const { name, price, isNew, image } = props

  return (
    <div className="card">
      {isNew && <div className="new">NEW</div>}
      <img src={image} className="image" alt="" />
      <div className="card-content">
        <div>{name}</div>
        <div>{price.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default Item;
