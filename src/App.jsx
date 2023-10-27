import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [isGreen, setIsGreen] = useState(false);

  const colorChangeHandler = () => {
    alert("This is blue box");
    setIsGreen(true);
  };

  const inputHandler = (event) => {
    setInputData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setData((prev) => [...prev, inputData]);
    setInputData("");
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="absolute top-[70%] right-[10%]">
          <div className="relative">
            <div className="absolute z-50 h-[80px] w-[80px] bg-red-500 rounded-full"></div>
            <div
              className={`absolute h-[120px]  w-[120px] ${
                isGreen ? "bg-green-500" : `bg-blue-500`
              }`}
              onClick={colorChangeHandler}
            ></div>
          </div>
        </div>
        <div className="mt-[50px] flex flex-col gap-10 justify-center items-center">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={inputData}
              placeholder="enter anything"
              className="bg-gray-200 px-4 py-2"
              onChange={inputHandler}
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2">
              Submit
            </button>
          </form>

          <div>
            <table className="border">
              <thead>
                <tr className="border">
                  <th className="border px-5">SL No</th>
                  <th className="border px-5">Data</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((eachData, index) => (
                  <tr key={index} className="border">
                    <td className="border px-5">{index + 1}</td>
                    <td className="border px-5">{eachData}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
