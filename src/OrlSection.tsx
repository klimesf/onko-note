import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type OrlSectionProps = {
  histologie: string;
  setHistologie: Dispatch<SetStateAction<string>>;
  histologieJine: string;
  setHistologieJine: Dispatch<SetStateAction<string>>;
  zamer: string;
  setZamer: Dispatch<SetStateAction<string>>;
  cilovyObjem: string;
  setCilovyObjem: Dispatch<SetStateAction<string>>;
  cilovyObjemJine: string;
  setCilovyObjemJine: Dispatch<SetStateAction<string>>;
  frakcionace: string;
  setFrakcionace: Dispatch<SetStateAction<string>>;
  frakcionaceJine: string;
  setFrakcionaceJine: Dispatch<SetStateAction<string>>;
  chemoterapie: string;
  setChemoterapie: Dispatch<SetStateAction<string>>;
  chemoterapieJine: string;
  setChemoterapieJine: Dispatch<SetStateAction<string>>;
  fixacePoloha: string;
  setFixacePoloha: Dispatch<SetStateAction<string>>;
  fixacePolohaJine: string;
  setFixacePolohaJine: Dispatch<SetStateAction<string>>;
  odbery: string;
  setOdbery: Dispatch<SetStateAction<string>>;
  potrebaZavedeniPEG: string;
  setPotrebaZavedeniPEG: Dispatch<SetStateAction<string>>;
  potrebaDoplneniPETCTMR: string;
  setPotrebaDoplneniPETCTMR: Dispatch<SetStateAction<string>>;
  potrebaZavedeniPICC: string;
  setPotrebaZavedeniPICC: Dispatch<SetStateAction<string>>;
};

export default function OrlSection(props: OrlSectionProps) {
  const {
    histologie,
    setHistologie,
    histologieJine,
    setHistologieJine,
    zamer,
    setZamer,
    cilovyObjem,
    setCilovyObjem,
    cilovyObjemJine,
    setCilovyObjemJine,
    frakcionace,
    setFrakcionace,
    frakcionaceJine,
    setFrakcionaceJine,
    chemoterapie,
    setChemoterapie,
    chemoterapieJine,
    setChemoterapieJine,
    fixacePoloha,
    setFixacePoloha,
    fixacePolohaJine,
    setFixacePolohaJine,
    odbery,
    setOdbery,
    potrebaZavedeniPEG,
    setPotrebaZavedeniPEG,
    potrebaDoplneniPETCTMR,
    setPotrebaDoplneniPETCTMR,
    potrebaZavedeniPICC,
    setPotrebaZavedeniPICC,
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Histologie"
          options={[
            { value: 'ca orofaryngu', label: 'Ca orofaryngu', isOther: false },
            {
              value: 'ca nasofaryngu',
              label: 'Ca nasofaryngu',
              isOther: false,
            },
            { value: 'ca laryngu', label: 'Ca laryngu', isOther: false },
            { value: 'ca tonsilly', label: 'Ca tonsilly', isOther: false },
            {
              value: 'ca kořene jazyka',
              label: 'Ca kořene jazyka',
              isOther: false,
            },
            {
              value: 'ca hrany jazyka',
              label: 'Ca hrany jazyka',
              isOther: false,
            },
            {
              value: 'ca spodiny dutiny ústní',
              label: 'Ca spodiny dutiny ústní',
              isOther: false,
            },
            {
              value: 'CUP',
              label: 'CUP (ca neznámého primárního ložiska)',
              isOther: false,
            },
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
          label="Záměr"
          options={[
            {
              value: 'adjuvantní samostatná radioterapie',
              label: 'Adjuvantní samostatná radioterapie',
              isOther: false,
            },
            {
              value: 'adjuvantní konkomitantní chemoradioterapie',
              label: 'Adjuvantní konkomitantní chemoradioterapie',
              isOther: false,
            },
            {
              value: 'radikální samostatná radioterapie',
              label: 'Radikální samostatná radioterapie',
              isOther: false,
            },
            {
              value: 'radikální konkomitantní chemoradioterapie',
              label: 'Radikální konkomitantní chemoradioterapie',
              isOther: false,
            },
            {
              value: 'paliativní radioterapie',
              label: 'Paliativní radioterapie',
              isOther: false,
            },
          ]}
          value={zamer}
          setValue={setZamer}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-3">
        <RadioInput
          label="Cílový objem"
          options={[
            {
              value: 'primární tumor',
              label: 'Primární tumor',
              isOther: false,
            },
            {
              value:
                'primární tumor a metastatické LU / lymfatika elektivně ipsilaterálně',
              label:
                'Primární tumor a metastatické LU / lymfatika elektivně ipsilaterálně',
              isOther: false,
            },
            {
              value:
                'primární tumor a metastatické LU / lymfatika elektivně bilaterálně',
              label:
                'Primární tumor a metastatické LU / lymfatika elektivně bilaterálně',
              isOther: false,
            },
            {
              value: 'lůžko po operaci',
              label: 'Lůžko po operaci',
              isOther: false,
            },
            {
              value: 'lůžko po operaci / lymfatika elektivně ipsilaterálně',
              label: 'Lůžko po operaci / lymfatika elektivně ipsilaterálně',
              isOther: false,
            },
            {
              value: 'lůžko po operaci / lymfatika elektivně bilaterálně',
              label: 'Lůžko po operaci / lymfatika elektivně bilaterálně',
              isOther: false,
            },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={cilovyObjem}
          setValue={setCilovyObjem}
          otherValue={cilovyObjemJine}
          setOtherValue={setCilovyObjemJine}
        />
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-4">
        <RadioInput
          label="Frakcionace"
          options={[
            {
              value: 'PTV High 69,96Gy (33fr x 2,12 Gy)',
              label: 'PTV High 69,96Gy (33fr x 2,12 Gy)',
              isOther: false,
            },
            {
              value:
                'PTV High 69,96Gy (33fr x 2,12 Gy) / PTV Low 54,12 Gy (33fr x 1,64 Gy)',
              label:
                'PTV High 69,96Gy (33fr x 2,12 Gy) / PTV Low 54,12 Gy (33fr x 1,64 Gy)',
              isOther: false,
            },
            {
              value:
                'PTV High 69,96Gy (33fr x 2,12 Gy) / PTV Mid 61,05 Gy (33fr x 1,85 Gy) / PTV Low 54,12 Gy (33fr x 1,64 Gy)',
              label:
                'PTV High 69,96Gy (33fr x 2,12 Gy) / PTV Mid 61,05 Gy (33fr x 1,85 Gy) / PTV Low 54,12 Gy (33fr x 1,64 Gy)',
              isOther: false,
            },
            {
              value: 'PTV High 60 Gy (30fr x 2 Gy)',
              label: 'PTV High 60 Gy (30fr x 2 Gy)',
              isOther: false,
            },
            {
              value:
                'PTV High 60 Gy (30fr x 2 Gy) / PTV Low 54 Gy (30fr x 1,8 Gy)',
              label:
                'PTV High 60 Gy (30fr x 2 Gy) / PTV Low 54 Gy (30fr x 1,8 Gy)',
              isOther: false,
            },
            {
              value:
                'PTV High 64,5 Gy (30fr x 2,15 Gy) / PTV Mid 60 Gy (30fr x 2 Gy) / PTV Low 54 Gy (30fr x 1,8 Gy)',
              label:
                'PTV High 64,5 Gy (30fr x 2,15 Gy) / PTV Mid 60 Gy (30fr x 2 Gy) / PTV Low 54 Gy (30fr x 1,8 Gy)',
              isOther: false,
            },
            {
              value: '30 Gy (10fr x 3 Gy)',
              label: '30 Gy (10fr x 3 Gy)',
              isOther: false,
            },
            {
              value: '45 Gy (15fr x 2,5 Gy)',
              label: '45 Gy (15fr x 2,5 Gy)',
              isOther: false,
            },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={frakcionace}
          setValue={setFrakcionace}
          otherValue={frakcionaceJine}
          setOtherValue={setFrakcionaceJine}
        />
      </div>

      <div className="sm:col-span-2"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Chemoterapie"
          options={[
            {
              value: 'konkomitantně cDDP weekly (40mg/m2)',
              label: 'Konkomitantně cDDP weekly (40mg/m2)',
              isOther: false,
            },
            {
              value: 'konkomitantně cDDP Q3W (100mg/m2)',
              label: 'Konkomitantně cDDP Q3W (100mg/m2)',
              isOther: false,
            },
            {
              value: 'konkomitantně CBDCA weekly (1,5 AUC)',
              label: 'Konkomitantně CBDCA weekly (1,5 AUC)',
              isOther: false,
            },
            {
              value: 'bez chemoterapie',
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

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-4">
        <RadioInput
          label="Fixace a poloha"
          options={[
            {
              value: 'standard',
              label:
                'Dle standardu - na zádech, hlava a ramena fixována termoplastickou maskou',
              isOther: false,
            },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={fixacePoloha}
          setValue={setFixacePoloha}
          otherValue={fixacePolohaJine}
          setOtherValue={setFixacePolohaJine}
        />
      </div>

      <div className="sm:col-span-2"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Krevní odběry"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={odbery}
          setValue={setOdbery}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Potřeba zavedení PEG"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={potrebaZavedeniPEG}
          setValue={setPotrebaZavedeniPEG}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Potřeba doplnění PET/CT/MR"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={potrebaDoplneniPETCTMR}
          setValue={setPotrebaDoplneniPETCTMR}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Potřeba zavedení PICC"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={potrebaZavedeniPICC}
          setValue={setPotrebaZavedeniPICC}
        />
      </div>
    </>
  );
}
