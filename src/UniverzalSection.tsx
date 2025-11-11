import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type UniverzalSectionProps = {
  zamer: string;
  setZamer: Dispatch<SetStateAction<string>>;
  fixace: string;
  setFixace: Dispatch<SetStateAction<string>>;
  fixaceJine: string;
  setFixaceJine: Dispatch<SetStateAction<string>>;
  poloha: string;
  setPoloha: Dispatch<SetStateAction<string>>;
  polohaJine: string;
  setPolohaJine: Dispatch<SetStateAction<string>>;
  odbery: string;
  setOdbery: Dispatch<SetStateAction<string>>;
};

export default function UniverzalSection(props: UniverzalSectionProps) {
  const {
    zamer,
    setZamer,
    fixace,
    setFixace,
    fixaceJine,
    setFixaceJine,
    poloha,
    setPoloha,
    polohaJine,
    setPolohaJine,
    odbery,
    setOdbery,
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Záměr radioterapie"
          options={[
            { value: 'neoadjuvantní', label: 'Neoadjuvantní', isOther: false },
            { value: 'adjuvantní', label: 'Adjuvantní', isOther: false },
            { value: 'radikální', label: 'Radikální', isOther: false },
            { value: 'paliativní', label: 'Paliativní', isOther: false },
          ]}
          value={zamer}
          setValue={setZamer}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Fixace"
          options={[
            { value: 'dle standardu', label: 'Dle standardu', isOther: false },
            { value: 'jiné', label: 'Jiné', isOther: true },
          ]}
          value={fixace}
          setValue={setFixace}
          otherValue={fixaceJine}
          setOtherValue={setFixaceJine}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Poloha"
          options={[
            { value: 'dle standardu', label: 'Dle standardu', isOther: false },
            { value: 'jiné', label: 'Jiné', isOther: true },
          ]}
          value={poloha}
          setValue={setPoloha}
          otherValue={polohaJine}
          setOtherValue={setPolohaJine}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Krevní odběry"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={odbery}
          setValue={setOdbery}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>
    </>
  );
}
