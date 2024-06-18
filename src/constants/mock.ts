import mouse from "../assets/images/mouse.png";
export const user = {
  username: "user",
};

export const newProduct: {
  type?: "sale" | "default" | "favorite" | "cart";
  sale?: number;
  url: string;
  name: string;
  oldPrice?: number;
  newPrice?: number;
  rating?: number;
}[] = [
  {
    type: "default",
    url: mouse,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    newPrice: 2535.0,
    rating: 4.8,
  },
  {
    type: "favorite",
    url: mouse,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    newPrice: 2535.0,
    rating: 4.8,
  },
  {
    type: "default",
    url: mouse,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    newPrice: 2535.0,
    rating: 4.8,
  },
  {
    type: "default",
    url: mouse,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    newPrice: 2535.0,
    rating: 4.8,
  },
];
