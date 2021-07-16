const colors = [
  "hsl(205, 86%, 17%)",
  "hsl(209, 61%, 16%)",
  "hsl(360, 67%, 44%)",
  "hsl(205, 77%, 27%)",
  "hsl(211, 39%, 23%)",
  "hsl(360, 71%, 66%)",
  "hsl(205, 72%, 37%)",
  "hsl(209, 34%, 30%)",
  "hsl(125, 67%, 44%)",
  "hsl(205, 63%, 48%)",
  "hsl(209, 28%, 39%)",
  "hsl(125, 71%, 66%)",
  "hsl(205, 78%, 60%)",
  "hsl(210, 22%, 49%)",
  "hsl(205, 89%, 70%)",
  "hsl(209, 23%, 60%)",
  "#000080",
  "#00008B",
  "#0000CD",
  "#0000FF",
  "#006400",
  "#008000",
  "#00FFFF",
  "#00FFFF",
  "#191970",
  "#1E90FF",
  "#20B2AA",
  "#228B22",
  "#2E8B57",
  "#2F4F4F",
  "#2F4F4F",
  "#5F9EA0",
  "#6495ED",
  "#663399",
  "#66CDAA",
  "#696969",
  "#696969",
  "#6A5ACD",
  "#6B8E23",
  "#708090",
  "#708090",
  "#778899",
  "#778899",
  "#7B68EE",
  "#7CFC00",
  "#7FFF00",
  "#7FFFD4",
  "#9ACD32",
  "#A0522D",
  "#A52A2A",
  "#A9A9A9",
  "#A9A9A9",
  "#ADD8E6",
  "#ADFF2F",
  "#FF6347",
  "#FFDEAD",
  "#FFE4B5",
  "#FFE4C4",
  "#FFE4E1",
  "#FFEBCD",
  "#FFEFD5",
  "#FFF0F5",
  "#FFF5EE",
  "#FFF8DC",
  "#FFFACD",
  "#FFFAF0",
  "#FFFAFA",
  "#FFFF00",
  "#FFFFE0",
  "#FFFFF0",
  "#FFFFFF",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});


getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
