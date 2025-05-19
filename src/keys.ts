interface Key {
  label: string;
  value: string;
  action?: KeyAction;
  styles: string;
  colSpan?: number;
}

type KeyAction =
  | "clear"
  | "equals"
  | "operator"
  | "percent"
  | "toggle"
  | undefined;

const commonStyles = 'py-2 px-4 rounded-md'

const keyStyles = {
  slate: `${commonStyles} bg-slate-500 hover:bg-slate-700 focus:bg-slate-700`,
  orange: `${commonStyles} bg-orange-500 hover:bg-orange-700 focus:bg-orange-700`,
  stone: `${commonStyles} bg-stone-500 hover:bg-stone-700 focus:bg-stone-700`,
};

export const keys: Key[] = [
  {
    label: "AC",
    value: "AC",
    action: "clear",
    styles: keyStyles.slate,
  },
  {
    label: "+/-",
    value: "+/-",
    action: "toggle",
    styles: keyStyles.slate,
  },
  {
    label: "%",
    value: "%",
    action: "percent",
    styles: keyStyles.slate,
  },
  {
    label: "÷",
    value: "/",
    action: "operator",
    styles: keyStyles.orange,
  },
  {
    label: "7",
    value: "7",
    styles: keyStyles.stone,
  },
  {
    label: "8",
    value: "8",
    styles: keyStyles.stone,
  },
  {
    label: "9",
    value: "9",
    styles: keyStyles.stone,
  },
  {
    label: "x",
    value: "*",
    action: "operator",
    styles: keyStyles.orange,
  },
  {
    label: "4",
    value: "4",
    styles: keyStyles.stone,
  },
  {
    label: "5",
    value: "5",
    styles: keyStyles.stone,
  },
  {
    label: "6",
    value: "6",
    styles: keyStyles.stone,
  },
  {
    label: "-",
    value: "-",
    action: "operator",
    styles: keyStyles.orange,
  },
  {
    label: "1",
    value: "1",
    styles: keyStyles.stone,
  },
  {
    label: "2",
    value: "2",
    styles: keyStyles.stone,
  },
  {
    label: "3",
    value: "3",
    styles: keyStyles.stone,
  },
  {
    label: "+",
    value: "+",
    action: "operator",
    styles: keyStyles.orange,
  },
  {
    label: "0",
    value: "0",
    styles: keyStyles.stone,
    colSpan: 2,
  },
  {
    label: ".",
    value: ".",
    styles: keyStyles.stone,
  },
  {
    label: "=",
    value: "=",
    action: "equals",
    styles: keyStyles.stone,
  },
];
