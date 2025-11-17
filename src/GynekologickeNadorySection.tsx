import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type GynekologickeNadorySectionProps = {
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
  chemoterapie: string;
  setChemoterapie: Dispatch<SetStateAction<string>>;
  chemoterapieJine: string;
  setChemoterapieJine: Dispatch<SetStateAction<string>>;
  imunoterapie: string;
  setImunoterapie: Dispatch<SetStateAction<string>>;
  imunoterapieJine: string;
  setImunoterapieJine: Dispatch<SetStateAction<string>>;
  frakcionace: string;
  setFrakcionace: Dispatch<SetStateAction<string>>;
  frakcionaceJine: string;
  setFrakcionaceJine: Dispatch<SetStateAction<string>>;
  brachyterapie: string;
  setBrachyterapie: Dispatch<SetStateAction<string>>;
};

export default function GynekologickeNadorySection(
  props: GynekologickeNadorySectionProps,
) {
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
    chemoterapie,
    setChemoterapie,
    chemoterapieJine,
    setChemoterapieJine,
    imunoterapie,
    setImunoterapie,
    imunoterapieJine,
    setImunoterapieJine,
    frakcionace,
    setFrakcionace,
    frakcionaceJine,
    setFrakcionaceJine,
    brachyterapie,
    setBrachyterapie,
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Záměr radioterapie"
          options={[
            { value: 'adjuvantní', label: 'Adjuvantní', isOther: false },
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
          label="Fixace"
          options={[
            { value: 'dle-standardu', label: 'Dle standardu', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
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
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-4">
        <RadioInput
          label="Chemoterapie"
          options={[
            {
              value: 'cDDP 40mg/m2 q1W 5 cyklů',
              label: 'cDDP 40mg/m2 q1W 5 cyklů',
              isOther: false,
            },
            {
              value: 'cDDP 50mg/m2 W1 a W4',
              label: 'cDDP 50mg/m2 W1 a W4',
              isOther: false,
            },
            {
              value:
                'cDDP 50mg/m2 W1 a W4, následně 4 cykly adjuvantní chemoterapie CBDCA AUC5 + Paclitaxel q3W',
              label:
                'cDDP 50mg/m2 W1 a W4, následně 4 cykly adjuvantní chemoterapie CBDCA AUC5 + Paclitaxel q3W',
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

      <div className="sm:col-span-2"></div>

      <div className="sm:col-span-4">
        <RadioInput
          label="Imunoterapie"
          options={[
            {
              value:
                'Pembrolizumab 200mg q3W 5 cyklů, následně dále 15 cyklů Pembrolizumab 400mg q6W',
              label:
                'Pembrolizumab 200mg q3W 5 cyklů, následně dále 15 cyklů Pembrolizumab 400mg q6W',
              isOther: false,
            },
            {
              value: 'Durvalumab 1500mg q4W',
              label: 'Durvalumab 1500mg q4W',
              isOther: false,
            },
            {
              value: 'bez imunoterapie',
              label: 'Bez imunoterapie',
              isOther: false,
            },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={imunoterapie}
          setValue={setImunoterapie}
          otherValue={imunoterapieJine}
          setOtherValue={setImunoterapieJine}
        />
      </div>

      <div className="sm:col-span-2"></div>

      <div className="sm:col-span-4">
        <RadioInput
          label="Frakcionace"
          options={[
            {
              value: 'PTV low 45Gy/25fr./1,8Gy',
              label: 'PTV low 45Gy/25fr./1,8Gy',
              isOther: false,
            },
            {
              value: 'PTV low 45Gy/25fr./1,8Gy + SIB PTV high 55Gy/25fr./2,2Gy',
              label: 'PTV low 45Gy/25fr./1,8Gy + SIB PTV high 55Gy/25fr./2,2Gy',
              isOther: false,
            },
            {
              value: 'PTV low 48,6Gy/27fr./1,8Gy',
              label: 'PTV low 48,6Gy/27fr./1,8Gy',
              isOther: false,
            },
            {
              value:
                'PTV low 45Gy/25fr./1,8Gy + SIB PTVmid 55Gy/25fr./2,2Gy + SIB PTV high 57,5Gy/25fr./2,3Gy',
              label:
                'PTV low 45Gy/25fr./1,8Gy + SIB PTVmid 55Gy/25fr./2,2Gy + SIB PTV high 57,5Gy/25fr./2,3Gy',
              isOther: false,
            },
            { value: '30Gy/10fr./3Gy', label: '30Gy/10fr./3Gy', isOther: false },
            { value: '20Gy/5fr./4Gy', label: '20Gy/5fr./4Gy', isOther: false },
            { value: '8Gy/1fr./8Gy', label: '8Gy/1fr./8Gy', isOther: false },
            { value: '16Gy/2fr./8Gy', label: '16Gy/2fr./8Gy', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={frakcionace}
          setValue={setFrakcionace}
          otherValue={frakcionaceJine}
          setOtherValue={setFrakcionaceJine}
        />
      </div>

      <div className="sm:col-span-2"></div>

      <div className="sm:col-span-3">
        <RadioInput
          label="Brachyterapie"
          options={[
            {
              value:
                'HDR vaginální brachyterapie - válec, 2x5Gy v 0,5cm od povrchu válce',
              label:
                'HDR vaginální brachyterapie - válec, 2x5Gy v 0,5cm od povrchu válce',
              isOther: false,
            },
            {
              value:
                'HDR vaginální brachyterapie - ovoidy, 2x5Gy v 0,5cm od povrchu ovoidů',
              label:
                'HDR vaginální brachyterapie - ovoidy, 2x5Gy v 0,5cm od povrchu ovoidů',
              isOther: false,
            },
            {
              value: 'HDR uterovaginální brachyterapie - 4x7Gy na oblast HR-CTV',
              label: 'HDR uterovaginální brachyterapie - 4x7Gy na oblast HR-CTV',
              isOther: false,
            },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={brachyterapie}
          setValue={setBrachyterapie}
        />
      </div>
    </>
  );
}
