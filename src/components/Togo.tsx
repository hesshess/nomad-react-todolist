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
      let arr = [];
      if (Number(value) === Status.DELETE) {
        arr = [...old.slice(0, targetIndex), ...old.slice(targetIndex + 1)];
      } else {
        arr = [
          ...old.slice(0, targetIndex),
          newC,
          ...old.slice(targetIndex + 1),
        ];
      }
      return arr;
    });
  };
  return (
    <li key={id}>
      {name}
      <button value={Status.VISITED} onClick={onClick}>
        ✅
      </button>
      <button value={Status.DELETE} onClick={onClick}>
        🗑
      </button>
    </li>
  );
}
