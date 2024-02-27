const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" onChange={props.onChange} checked={props.state} />
      <label>{props.title}</label>
    </div>
  );
};

export default Checkbox;
