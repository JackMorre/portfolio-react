import { Introduction } from "./Introduction";
import { List } from "./List";

const lists = [
  { title: "Hobbies", listArr: ["dnd", "gym", "coding"] },
  {
    title: "Types of Pizza",
    listArr: ["Cheese Pizza", "Pepperoni", "Meat Feast"],
  },
];

export const App = () => {
  return (
    <div>
      <Introduction />
      {lists.map((list) => {
        return <List name={list.title} list={list.listArr} key={list.title} />;
      })}
    </div>
  );
};
