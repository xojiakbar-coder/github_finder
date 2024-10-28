import Item from "./Item";
import Image from "next/image";
import Loading from "./Loading";
import { useState } from "react";
import ENDPOINT_URL from "@/api/api";
import { useFetch } from "@/hooks/useFetch";
import { SearchResult, User } from "@/utils/users";
import resetIcon from "../../assets/icons/reset.svg";
import searchIcon from "../../assets/icons/search.svg";

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [searchUrl, setSearchUrl] = useState<string | null>(null);
  const { data, loading, error, reset } = useFetch<SearchResult>(searchUrl);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchUrl(`${ENDPOINT_URL}${query}`);
    }
  };

  const handleReset = () => {
    reset();
    setQuery("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center gap-[26px] w-full">
        <div className="flex justify-between w-full gap-[24px] mt-[60px] px-[2%]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter github username"
            className="min-w-[200px] min-h-[60px] w-[100%] text-[22px] p-2 rounded-lg px-[16px] outline-none bg-slate-400 text-black placeholder:text-black"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-evenly px-4 py-2 bg-blue-600 h-[60px] min-w-[160px] w-[160px] rounded-lg hover:bg-blue-700 outline-none"
          >
            <p className="text-white text-[22px]">Search</p>
            <Image
              src={searchIcon}
              alt="search icon not found"
              className="w-[27px]"
            />
          </button>
        </div>
        {typeof data?.items.length === "number" && data.items.length > 0 ? (
          <div className="w-full px-[2%]">
            <button
              onClick={handleReset}
              className="flex items-center justify-evenly px-4 py-2 bg-gray-700 h-[60px] min-w-[140px] w-[140px] rounded-lg hover:bg-gray-800 outline-none"
            >
              <p className="text-white text-[22px]">Reset</p>
              <Image
                src={resetIcon}
                alt="reset icon not found"
                className="w-[27px] mt-[3px]"
              />
            </button>
          </div>
        ) : null}
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-[30px] font-semibold text-red-600 mt-[200px]">
          {error}
        </div>
      ) : data?.items ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[20px] w-full my-[50px] px-[2%]">
          {data.items.map((user: User) => (
            <Item
              id={user.id}
              key={user.id}
              login={user.login}
              html_url={user.html_url}
              avatar_url={user.avatar_url}
            />
          ))}
        </div>
      ) : (
        <div className="text-[25px] text-gray-500 mt-[200px]">
          Enter a Github username to search...
        </div>
      )}
    </div>
  );
};

export default Search;
