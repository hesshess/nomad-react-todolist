import CreateCountry from "./components/CreateCountry";
import { useRecoilValue } from "recoil";
import { sortedCountriesState } from "./atoms";
import Like from "./components/Like";
import Togo from "./components/Togo";
import Visited from "./components/Visited";

export default function App() {
  const [togos, visiteds, likes] = useRecoilValue(sortedCountriesState);

  return (
    <>
      <CreateCountry />
      <h2>Where I want to go</h2>
      <ul>
        {togos.map((togo) => (
          <Togo key={togo.id} {...togo} />
        ))}
      </ul>
      <h2>Where I'vd visited</h2>
      <ul>
        {visiteds.map((visited) => (
          <Visited key={visited.id} {...visited} />
        ))}
      </ul>
      <h2>Where I like</h2>
      <ul>
        {likes.map((like) => (
          <Like key={like.id} {...like} />
        ))}
      </ul>
    </>
  );
}
