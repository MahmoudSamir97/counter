import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleCountAdd = () => {
    setCount((prev) => prev + step);
  };

  const handleCountDecrease = () => {
    setCount((prev) => prev - step);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
  };

  const getDateFromCount = () => {
    const today = new Date();

    const resultDate = new Date(today);

    resultDate.setDate(today.getDate() + count);

    const formattedDate = resultDate.toDateString();

    return formattedDate;
  };

  return (
    <div className=" text-lg">
      <h1 className="main__header text-cyan-400 text-2xl my-3">Counter</h1>
      <div className="count-container my-4  ">
        <div>
          <input
            type="range"
            min={0}
            max={10}
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span className="mx-3"> {step}</span>
        </div>

        <span className="button" onClick={handleCountDecrease}>
          Decrement
        </span>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="mx-2"
          style={{ border: "1px solid black", padding: "0.12rem" }}
        />
        <span
          className="p-1 cursor-pointer bg-slate-400"
          onClick={handleCountAdd}
        >
          Increment
        </span>
      </div>
      <div className="preview-container">
        <p>
          {count === 0 && `Today is ${getDateFromCount()}`}
          {count < 0 && `${count * -1} days ago is ${getDateFromCount()}`}
          {count > 0 && `${count} days from today is ${getDateFromCount()}`}
        </p>
      </div>
      {count !== 0 && (
        <button className="btn bg-blue-400" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Counter;
