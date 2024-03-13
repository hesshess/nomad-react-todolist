import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { countriesState, ICountry, Status } from '../atoms';

interface ICountryname {
  name: string;
}

export default function CreateCountry() {
  const setCountries = useSetRecoilState(countriesState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICountryname>();

  const handleValid = ({ name }: ICountryname) => {
    setCountries((prev) => [
      ...prev,
      { id: Date.now(), name, status: Status.TO_GO },
    ]);
    setValue('name', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('name', { required: '👹 Do not leave this empty!' })}
        placeholder="Where do you want to go?"
      />
      <div>{errors?.name?.message}</div>

      <button>Let's go travel✈️</button>
    </form>
  );
}
