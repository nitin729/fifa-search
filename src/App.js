import "./App.css";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import { readString } from "react-papaparse";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";

function App() {
  const [results, setResults] = useState({
    original: [],
    data: [],
    inputTextValue: "",
    columns: [],
  });
  //USE STATe is now an object

  useEffect(() => {
    playerData();
  }, []);

  const playerData = () => {
    const str = `Name,Age,Nationality,Overall,Club,Value,Wage,Preferred Foot,Work Rate,Position,Jersey Number,Joined,Contract Valid Until,Height,Weight,Crossing,Finishing,HeadingAccuracy,ShortPassing,Volleys
    L. Messi,31,Argentina,94,FC Barcelona,€110.5M,€565K,Left,Medium/ Medium,RF,10,1-Jul-04,2021,5'7,159lbs,84,95,70,90,86
    Cristiano Ronaldo,33,Portugal,94,Juventus,€77M,€405K,Right,High/ Low,ST,7,10-Jul-18,2022,6'2,183lbs,84,94,89,81,87
    Neymar Jr,26,Brazil,92,Paris Saint-Germain,€118.5M,€290K,Right,High/ Medium,LW,10,3-Aug-17,2022,5'9,150lbs,79,87,62,84,84
    De Gea,27,Spain,91,Manchester United,€72M,€260K,Right,Medium/ Medium,GK,1,1-Jul-11,2020,6'4,168lbs,17,13,21,50,13
    K. De Bruyne,27,Belgium,91,Manchester City,€102M,€355K,Right,High/ High,RCM,7,30-Aug-15,2023,5'11,154lbs,93,82,55,92,82`;

    const results = readString(str);

    /* console.log("---------------------------");
    console.log(results.data); */
    //const players = results.data.map((item) => console.log(item));
    setResults({
      ...results,
      data: results.data.slice(1, results.data.length - 1),
      original: results.data.slice(1, results.data.length - 1),
      column: results.data[0],
    });
  };

  const inputTextChange = (event) => {
    setResults({ ...results, inputTextValue: event.target.value });
  };

  const searchBtnClick = () => {
    let filteredValue = results.original.filter(
      (item) =>
        item[0].toLowerCase().indexOf(results.inputTextValue.toLowerCase()) > -1
    );
    setResults({ ...results, data: filteredValue });
  };

  const inputClear = () => {
    setResults({ ...results, original: results.data });
  };

  return (
    <div className="App">
      <Search
        playerData={results.data}
        inputTextChange={inputTextChange}
        searchBtnClick={searchBtnClick}
        inputClear={inputClear}
      />
      {results.data?.map((item, index) => {
        return <li>{item[0]}</li>;
      })}
    </div>
  );
}

export default App;
