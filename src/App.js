import { useEffect, useState } from "react";
import "./App.css";
import {CharacterList} from "./components/CharacterList";
import { Search } from "./components/Search";
import { Pagination } from "./components/Pagination";
import axios from "axios";

export default function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let [pageNumber, updatePageNumber] = useState(1);
  let [lastPage,setLastPage] = useState(1);

  //console.log(fetchedData.results.length)

  let [search, setSearch] = useState("");
  //console.log(pageNumber);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(api);
      const data = response.data;
  
      updateFetchedData(data);
      //console.log(data);
  
      if (data.info) {
        setLastPage(data.info.pages);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    fetchData();
  }, [api]);

  return (
    <div className="App">
      <h1>Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <CharacterList results={fetchedData.results} />;
      <Pagination
          lastPage={ lastPage }
          currentPage={pageNumber}
          setCurrentPage={updatePageNumber}
      />
    </div>
  );
}
