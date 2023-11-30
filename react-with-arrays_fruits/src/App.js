import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍏 Apple",
      color: "green",
    },
    {
      id: 2,
      name: "🍍 Pineapple",
      color: "yellow",
    },
    {
      id: 3,
      name: "🍓 Strawbeery",
      color: "red",
    },
    {
      id: 4,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 5,
      name: "🍉 Watermelon",
      color: "pink",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card name={fruit.name} />;
      })}
    </div>
  );
}
