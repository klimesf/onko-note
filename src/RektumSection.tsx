import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type RektumSectionProps = {
  histologie: string;
  setHistologie: Dispatch<SetStateAction<string>>;
  histologieJine: string;
  setHistologieJine: Dispatch<SetStateAction<string>>;
  lokalizace: string;
  setLokalizace: Dispatch<SetStateAction<string>>;
  chemoterapie: string;
  setChemoterapie: Dispatch<SetStateAction<string>>;
  chemoterapieJine: string;
  setChemoterapieJine: Dispatch<SetStateAction<string>>;
  odstup: string;
  setOdstup: Dispatch<SetStateAction<string>>;
  odstupJine: string;
  setOdstupJine: Dispatch<SetStateAction<string>>;
  fixace: string;
  setFixace: Dispatch<SetStateAction<string>>;
  fixaceJine: string;
  setFixaceJine: Dispatch<SetStateAction<string>>;
  poloha: string;
  setPoloha: Dispatch<SetStateAction<string>>;
  polohaJine: string;
  setPolohaJine: Dispatch<SetStateAction<string>>;
  zamer: string;
  setZamer: Dispatch<SetStateAction<string>>;
  frakcionace: string;
  setFrakcionace: Dispatch<SetStateAction<string>>;
  frakcionaceJine: string;
  setFrakcionaceJine: Dispatch<SetStateAction<string>>;
  odbery: string;
  setOdbery: Dispatch<SetStateAction<string>>;
  rezim: string;
  setRezim: Dispatch<SetStateAction<string>>;
};

export default function RektumSection(props: RektumSectionProps) {
  const {
    histologie,
    setHistologie,
    histologieJine,
    setHistologieJine,
    lokalizace,
    setLokalizace,
    chemoterapie,
    setChemoterapie,
    chemoterapieJine,
    setChemoterapieJine,
    odstup,
    setOdstup,
    odstupJine,
    setOdstupJine,
    fixace,
    setFixace,
    fixaceJine,
    setFixaceJine,
    poloha,
    setPoloha,
    polohaJine,
    setPolohaJine,
    zamer,
    setZamer,
    frakcionace,
    setFrakcionace,
    frakcionaceJine,
    setFrakcionaceJine,
    odbery,
    setOdbery,
    rezim,
    setRezim,
  } = props;

  const onRezimChange = (rezim: string) => {
    setRezim(rezim);
    switch (rezim) {
      case '1':
        setZamer('neoadjuvantní');
        setFrakcionace('25');
        setChemoterapie('bez-chemoterapie');
        setOdstup('standardni');
        break;
      case '2':
        setZamer('neoadjuvantní');
        setFrakcionace('25');
        setChemoterapie('bez-chemoterapie');
        setOdstup('kratky');
        break;
      case '3':
        setZamer('neoadjuvantní');
        setFrakcionace('PTV+SIB');
        setChemoterapie('konkomitantni-chemoterapie');
        setOdstup('standardni');
        break;
      case '4':
        setZamer('neoadjuvantní');
        setFrakcionace('25');
        setChemoterapie('capox');
        setOdstup('kratky');
        break;
      case '5':
        setZamer('neoadjuvantní');
        setFrakcionace('25');
        setChemoterapie('folfox');
        setOdstup('kratky');
        break;
      case '6':
        setZamer('neoadjuvantní');
        setFrakcionace('PTV+SIB');
        setChemoterapie('konkomitantni+capox');
        setOdstup('kratky');
        break;
      case '7':
        setZamer('neoadjuvantní');
        setFrakcionace('PTV+SIB');
        setChemoterapie('konkomitantni+folfox');
        setOdstup('kratky');
        break;
      case '8':
        setZamer('adjuvantní');
        setFrakcionace('45');
        setChemoterapie('konkomitantni-chemoterapie');
        setOdstup('bez');
        break;
      case '9':
        setZamer('adjuvantní');
        setFrakcionace('PTV+SIB');
        setChemoterapie('konkomitantni-chemoterapie');
        setOdstup('bez');
        break;
      case '10':
        setZamer('radikální');
        setFrakcionace('PTV 45');
        setChemoterapie('konkomitantni-chemoterapie');
        setOdstup('bez');
        break;
      case '11':
        setZamer('radikální');
        setFrakcionace('PTV 46');
        setChemoterapie('bez-chemoterapie');
        setOdstup('bez');
        break;
      case '12':
        setZamer('radikální');
        setFrakcionace('');
        setChemoterapie('bez-chemoterapie');
        setOdstup('bez');
        break;
      case '13':
      default:
        setZamer('');
        setFrakcionace('');
        setChemoterapie('');
        setOdstup('');
        break;
    }
  };

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Histologie"
          options={[
            { value: 'adenokarcinom', label: 'Adenokarcinom', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={histologie}
          setValue={setHistologie}
          otherValue={histologieJine}
          setOtherValue={setHistologieJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Lokalizace"
          options={[
            { value: 'horni', label: 'Horní', isOther: false },
            { value: 'stredni', label: 'Střední', isOther: false },
            { value: 'dolni', label: 'Dolní', isOther: false },
          ]}
          value={lokalizace}
          setValue={setLokalizace}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-3">
        <RadioInput
          label="Režim"
          options={[
            {
              value: '1',
              label:
                'Neoadjuvance - Samostatná akcelerovaná radioterapie + standardní odstup operace',
              isOther: false,
            },
            {
              value: '2',
              label:
                'Neoadjuvance - Samostatná akcelerovaná radioterapie + krátký odstup operace',
              isOther: false,
            },
            {
              value: '3',
              label: 'Neoadjuvance - Konkomitantní chemoradioterapie',
              isOther: false,
            },
            {
              value: '4',
              label:
                'Totální neoadjuvance - akcelerovaná radioterapie + 6x CAPOX ',
              isOther: false,
            },
            {
              value: '5',
              label:
                'Totální neoadjuvance - akcelerovaná radioterapie + 9x FOLFOX ',
              isOther: false,
            },
            {
              value: '6',
              label: 'Totální neoadjuvance - chemoradioterapie + 6x CAPOX ',
              isOther: false,
            },
            {
              value: '7',
              label: 'Totální neoadjuvance - chemoradioterapie + 9x FOLFOX ',
              isOther: false,
            },
            {
              value: '8',
              label: 'Adjuvantní chemoradioterapie',
              isOther: false,
            },
            {
              value: '9',
              label: 'Adjuvantní chemoradioterapie SIB',
              isOther: false,
            },
            {
              value: '10',
              label: 'Radikální  chemoradioterapie',
              isOther: false,
            },
            {
              value: '11',
              label: 'Radikální samostatná radioterapie',
              isOther: false,
            },
            { value: '12', label: 'Paliativní radioterapie', isOther: false },
            { value: '13', label: 'Jiná možnost', isOther: false },
          ]}
          value={rezim}
          setValue={onRezimChange}
        />
      </div>

      <div className="sm:col-span-3"></div>

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

      <div className="sm:col-span-3">
        <RadioInput
          label="Frakcionace"
          options={[
            { value: '25', label: '25Gy (5x5Gy)', isOther: false },
            { value: '50', label: '50Gy (25x2Gy)', isOther: false },
            { value: '45', label: '45Gy (25x1,8Gy)', isOther: false },
            {
              value: 'PTV+SIB',
              label: 'PTV low 45Gy (25x1,8Gy) + SIB PTV high 50Gy (25x2Gy)',
              isOther: false,
            },
            {
              value: 'PTV 45',
              label: 'PTV low 45Gy (25x1,8Gy) + PTV high 20-24Gy (10-12x2Gy)',
              isOther: false,
            },
            {
              value: 'PTV 46',
              label: 'PTV low 46Gy (23x2Gy) + PTV high 20-24Gy (10-12x2Gy)',
              isOther: false,
            },
            { value: '30', label: '30Gy (10x3Gy)', isOther: false },
            { value: '20', label: '20Gy (5x4Gy)', isOther: false },
            { value: '8', label: '8Gy (1x8Gy)', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={frakcionace}
          setValue={setFrakcionace}
          otherValue={frakcionaceJine}
          setOtherValue={setFrakcionaceJine}
        />
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-3">
        <RadioInput
          label="Chemoterapie"
          options={[
            {
              value: 'konkomitantni-chemoterapie',
              label: 'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd',
              isOther: false,
            },
            {
              value: 'konkomitantni+capox',
              label:
                'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + CAPOX 6x po ukončení radioterapie',
              isOther: false,
            },
            {
              value: 'konkomitantni+folfox',
              label:
                'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + FOLFOX 9x po ukončení radioterapie',
              isOther: false,
            },
            {
              value: 'capox',
              label: 'CAPOX 6x po ukončení radioterapie',
              isOther: false,
            },
            {
              value: 'folfox',
              label: 'FOLFOX 9x po ukončení radioterapie',
              isOther: false,
            },
            {
              value: 'bez-chemoterapie',
              label: 'Bez chemoterapie',
              isOther: false,
            },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={chemoterapie}
          setValue={setChemoterapie}
          otherValue={chemoterapieJine}
          setOtherValue={setChemoterapieJine}
        />
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Odstup operace"
          options={[
            {
              value: 'standardni',
              label: 'Standardní (6-8 týdnů)',
              isOther: false,
            },
            { value: 'kratky', label: 'Krátký (2-4 týdny)', isOther: false },
            { value: 'bez', label: 'Bez operace', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={odstup}
          setValue={setOdstup}
          otherValue={odstupJine}
          setOtherValue={setOdstupJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Fixace"
          options={[
            { value: 'dle-standardu', label: 'Dle standardu', isOther: false },
            { value: 'combifix', label: 'Combifix', isOther: false },
            { value: 'jiné', label: 'Jiné', isOther: true },
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
            { value: 'dle-standardu', label: 'Dle standardu', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={poloha}
          setValue={setPoloha}
          otherValue={polohaJine}
          setOtherValue={setPolohaJine}
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
