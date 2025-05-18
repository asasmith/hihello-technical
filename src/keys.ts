interface Key {
    value: string;
    action?: string;
    classes: string;
}

export const keys: Key[] = [
  {
    value: "AC",
    action: "clear",
    classes: "bg-slate-500 hover:bg-slate-700 focus:bg-slate-700",
  },
  {
    value: "+/-",
    action: "",
    classes: "bg-slate-500 hover:bg-slate-700 focus:bg-slate-700",
  },
  {
    value: "%",
    action: "",
    classes: "bg-slate-500 hover:bg-slate-700 focus:bg-slate-700",
  },
  {
    value: "÷",
    action: "/",
    classes: "bg-orange-500 hover:bg-orange-700 focus:bg-orange-700",
  },
  {
    value: "7",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "8",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "9",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "x",
    action: "*",
    classes: "bg-orange-500 hover:bg-orange-700 focus:bg-orange-700",
  },
  {
    value: "4",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "5",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "6",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "-",
    action: "-",
    classes: "bg-orange-500 hover:bg-orange-700 focus:bg-orange-700",
  },
  {
    value: "1",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "2",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "3",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "+",
    action: "+",
    classes: "bg-orange-500 hover:bg-orange-700 focus:bg-orange-700",
  },
  {
    value: "0",
    classes:
      "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700 col-start-1 col-end-3",
  },
  {
    value: ".",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
  {
    value: "=",
    action: "=",
    classes: "bg-stone-500 hover:bg-stone-700 focus:bg-stone-700",
  },
];
