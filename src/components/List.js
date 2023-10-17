export const List = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.list.map((listItem) => {
          return <li>{listItem}</li>;
        })}
      </ul>
    </div>
  );
};
