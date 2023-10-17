export const List = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.list.map((listItem) => {
          return <li key={listItem}>{listItem}</li>;
        })}
      </ul>
    </div>
  );
};
