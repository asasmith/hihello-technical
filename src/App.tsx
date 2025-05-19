import { useState } from "react";
import "./App.css";
import { keys } from "./keys";
import { calculate } from "./calculate";

function App() {
  const [input, setInput] = useState<string>("0");
  const [isComplete, setIsComplete] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { action, value } = (e.target as HTMLButtonElement).dataset;
    const isOperator = action === "operator";

    if (action === "clear") {
      setInput("0");
      setIsComplete(false);
      return;
    }

    if (action === "equals") {
      const resultStr = `${calculate(input)}`;
      setInput(resultStr);
      setIsComplete(true);
      return;
    }

    if (input === "0" && isOperator) {
      setInput(`0${value}`);
      return;
    }

    if (input === "0") {
      setInput(`${value}`);
      return;
    }

    if (isComplete) {
      if (isOperator) {
        setInput(`${input}${value}`);
        setIsComplete(false);
        return;
      } else {
        setInput(`${value}`);
        setIsComplete(false);
        return;
      }
    }

    setInput(`${input}${value}`);
  };

  return (
    <div className="grid grid-cols-4 gap-4 text-2xl max-w-[304.467px]">
      <p className="bg-white col-span-full rounded py-2 px-4 overflow-y-scroll text-right text-black min-h-[48px]">
        {input}
      </p>
      {keys.length &&
        keys.map((key) => {
          const { action, styles, colSpan, label, value } = key;

          const colSpanClass = colSpan ? `col-span-${colSpan}` : "";
          const classes = `${styles} ${colSpanClass}`;

          if (action) {
            return (
              <button
                className={classes}
                onClick={handleClick}
                data-value={value}
                data-action={action}
                key={value}
              >
                {label}
              </button>
            );
          }
          return (
            <button
              className={classes}
              onClick={handleClick}
              data-value={value}
              key={value}
            >
              {label}
            </button>
          );
        })}
    </div>
  );
}

export default App;
