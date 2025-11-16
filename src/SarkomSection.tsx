import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type SarkomSectionProps = {
  histologie: string;
  setHistologie: Dispatch<SetStateAction<string>>;
  lokalizace: string;
  setLokalizace: Dispatch<SetStateAction<string>>;
  lokalizaceJine: string;
  setLokalizaceJine: Dispatch<SetStateAction<string>>;
  chemoterapie: string;
  setChemoterapie: Dispatch<SetStateAction<string>>;
  chemoterapieJine: string;
  setChemoterapieJine: Dispatch<SetStateAction<string>>;
  fixace: string;
  setFixace: Dispatch<SetStateAction<string>>;
  fixaceJine: string;
  setFixaceJine: Dispatch<SetStateAction<string>>;
  poloha: string;
  setPoloha: Dispatch<SetStateAction<string>>;
  bolus: string;
  setBolus: Dispatch<SetStateAction<string>>;
  zamer: string;
  setZamer: Dispatch<SetStateAction<string>>;
  frakcionace: string;
  setFrakcionace: Dispatch<SetStateAction<string>>;
  frakcionaceJine: string;
  setFrakcionaceJine: Dispatch<SetStateAction<string>>;
  odbery: string;
  setOdbery: Dispatch<SetStateAction<string>>;
};

export default function SarkomSection(props: SarkomSectionProps) {
  const {
    histologie,
    setHistologie,
    lokalizace,
    setLokalizace,
    lokalizaceJine,
    setLokalizaceJine,
    chemoterapie,
    setChemoterapie,
    chemoterapieJine,
    setChemoterapieJine,
    fixace,
    setFixace,
    fixaceJine,
    setFixaceJine,
    poloha,
    setPoloha,
    bolus,
    setBolus,
    zamer,
    setZamer,
    frakcionace,
    setFrakcionace,
    frakcionaceJine,
    setFrakcionaceJine,
    odbery,
    setOdbery,
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Histologie"
          options={[
            { value: 'Myxoidní liposarkom', label: 'Myxoidní liposarkom', isOther: false },
            { value: 'Liposarkom', label: 'Liposarkom', isOther: false },
            { value: 'Myxofibrosarkom', label: 'Myxofibrosarkom', isOther: false },
            { value: 'Rhabdomyosarkom', label: 'Rhabdomyosarkom', isOther: false },
            { value: 'Ewingův sarkom', label: 'Ewingův sarkom', isOther: false },
            { value: 'UPS', label: 'UPS', isOther: false },
            { value: 'Leiomyosarkom', label: 'Leiomyosarkom', isOther: false },
          ]}
          value={histologie}
          setValue={setHistologie}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Lokalizace"
          options={[
            { value: 'horní končetina', label: 'horní končetina', isOther: false },
            { value: 'dolní končetina', label: 'dolní končetina', isOther: false },
            { value: 'retroperitoneum', label: 'retroperitoneum', isOther: false },
            { value: 'jiné', label: 'jiné', isOther: true },
          ]}
          value={lokalizace}
          setValue={setLokalizace}
          otherValue={lokalizaceJine}
          setOtherValue={setLokalizaceJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Chemoterapie"
          options={[
            { value: 'ne', label: 'ne', isOther: false },
            { value: 'chemoterapie - MAI', label: 'MAI', isOther: false },
            { value: 'jiné', label: 'jiné', isOther: true },
          ]}
          value={chemoterapie}
          setValue={setChemoterapie}
          otherValue={chemoterapieJine}
          setOtherValue={setChemoterapieJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Fixace"
          options={[
            { value: 'Vakuová matrace', label: 'Vakuová matrace', isOther: false },
            { value: 'Combifix', label: 'Combifix', isOther: false },
            { value: 'jiné', label: 'jiné', isOther: true },
          ]}
          value={fixace}
          setValue={setFixace}
          otherValue={fixaceJine}
          setOtherValue={setFixaceJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Poloha"
          options={[
            { value: 'na-zadech', label: 'Na zádech', isOther: false },
            { value: 'na-brise', label: 'Na břiše', isOther: false },
          ]}
          value={poloha}
          setValue={setPoloha}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Bolus"
          options={[
            { value: 'Ano', label: 'Ano', isOther: false },
            { value: 'Ne', label: 'Ne', isOther: false },
          ]}
          value={bolus}
          setValue={setBolus}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Záměr radioterapie"
          options={[
            { value: 'adjuvantní', label: 'Adjuvantní', isOther: false },
            { value: 'neoadjuvantní', label: 'Neoadjuvantní', isOther: false },
            { value: 'radikální', label: 'Radikální', isOther: false },
            { value: 'paliativní', label: 'Paliativní', isOther: false },
          ]}
          value={zamer}
          setValue={setZamer}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Frakcionace"
          options={[
            { value: '50Gy (25x2Gy)', label: '50Gy (25x2Gy)', isOther: false },
            { value: '60Gy(30x2Gy)', label: '60Gy(30x2Gy)', isOther: false },
            { value: '36Gy(18x2Gy)', label: '36Gy(18x2Gy)', isOther: false },
            { value: 'jiné', label: 'jiné', isOther: true },
          ]}
          value={frakcionace}
          setValue={setFrakcionace}
          otherValue={frakcionaceJine}
          setOtherValue={setFrakcionaceJine}
        />
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
