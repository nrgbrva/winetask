function Winefn(props) {
  const { type, year } = props;
  console.log(type);
  return (
    <div>
      <h3>{props.type}</h3>
      <h3>{props.year}</h3>
    </div>
  );
}
export default Winefn;
