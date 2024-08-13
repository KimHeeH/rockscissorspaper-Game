const box = (props) => {
  let resultColor = props.color;
  console.log(props);
  return (
    <div className="box" style={{ borderColor: resultColor }}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt={props.item ? props.item.name : ""}
      />
      <h2>{props.result}</h2>
    </div>
  );
};
export default box;
