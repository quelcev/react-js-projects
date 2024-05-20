import { v4 as uuidv4 } from "uuid";

export const tabBtns = [
  {
    id: uuidv4(),
    label: "History",
    dataId: "history",
  },
  {
    id: uuidv4(),
    label: "Vision",
    dataId: "vision",
  },
  {
    id: uuidv4(),
    label: "Goals",
    dataId: "goals",
  },
];
export const tabContents = [
  {
    id: uuidv4(),
    dataId: "history",
    heading: "History",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aut suscipit nam numquam! Illum unde ducimus reiciendis sequi saepe similique, consectetur officiis porro debitis quidem, numquam impedit, enim culpa dolorem.",
  },
  {
    id: uuidv4(),
    dataId: "vision",
    heading: "Vision",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis numquam fuga ipsam vero non repellendus libero provident, facilis deserunt eum vel modi sapiente in perspiciatis. Optio repellat neque totam.",
    list: [
      "1Lorem ipsum dolor sit.",
      "2Lorem ipsum dolor sit.",
      "3Lorem ipsum dolor sit.",
      "4Lorem ipsum dolor sit.",
    ],
  },
  {
    id: uuidv4(),
    dataId: "goals",
    heading: "Goals",
    para: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis eaque atque repellendus maxime consequatur esse, obcaecati fuga iste porro sed officia placeat corrupti nostrum asperiores laudantium maiores expedita neque.",
  },
];
