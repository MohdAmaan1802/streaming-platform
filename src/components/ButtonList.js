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
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
