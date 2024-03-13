import { useSetRecoilState } from "recoil";
import { countriesState, Status, ICountry } from "../atoms";

export default function Togo({ id, name, status }: ICountry) {
  const setList = useSetRecoilState(countriesState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setList((old) => {
      const targetIndex = old.findIndex((country) => country.id === id);
      const newC = { name, id, status: Number(value) };
      return [
        ...old.slice(0, targetIndex),
        newC,
        ...old.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li key={id}>
      {name}
      <button onClick={onClick} value={Status.LIKE}>
        👍
      </button>
      <button onClick={onClick} value={Status.TO_GO}>
        ❌
      </button>
    </li>
  );
}
