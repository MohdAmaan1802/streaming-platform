import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Cricket",
  "FootBall",
  "Formula 1",
  "Cooking",
  "News",
  "Computer Progamming",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name) => (
        <Button name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
