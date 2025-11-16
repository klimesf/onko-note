import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type MammaeSectionProps = {
  histologie: string;
  setHistologie: Dispatch<SetStateAction<string>>;
  histologieJine: string;
  setHistologieJine: Dispatch<SetStateAction<string>>;
  lokalizace: string;
  setLokalizace: Dispatch<SetStateAction<string>>;
  kardiostimulator: string;
  setKardiostimulator: Dispatch<SetStateAction<string>>;
  kardiostimulatorDependentni: string;
  setKardiostimulatorDependentni: Dispatch<SetStateAction<string>>;
  kardiostimulatorKontrolaZajistena: string;
  setKardiostimulatorKontrolaZajistena: Dispatch<SetStateAction<string>>;
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
  rozsah: string;
  setRozsah: Dispatch<SetStateAction<string>>;
  rozsahJine: string;
  setRozsahJine: Dispatch<SetStateAction<string>>;
  boost: string;
  setBoost: Dispatch<SetStateAction<string>>;
  boostJine: string;
  setBoostJine: Dispatch<SetStateAction<string>>;
  dibh: string;
  setDibh: Dispatch<SetStateAction<string>>;
};

export default function MammaeSection(props: MammaeSectionProps) {
  const {
    histologie,
    setHistologie,
    histologieJine,
    setHistologieJine,
    lokalizace,
    setLokalizace,
    kardiostimulator,
    setKardiostimulator,
    kardiostimulatorDependentni,
    setKardiostimulatorDependentni,
    kardiostimulatorKontrolaZajistena,
    setKardiostimulatorKontrolaZajistena,
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
    rozsah,
    setRozsah,
    rozsahJine,
    setRozsahJine,
    boost,
    setBoost,
    boostJine,
    setBoostJine,
    dibh,
    setDibh,
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Histologie"
          options={[
            {
              value: 'invazní NST ca',
              label: 'Invazní NST ca',
              isOther: false,
            },
            {
              value: 'invazivní lobulární ca',
              label: 'Invazivní lobulární ca',
              isOther: false,
            },
            { value: 'DCIS', label: 'DCIS', isOther: false },
            { value: 'jine', label: 'Jiné', isOther: true },
          ]}
          value={histologie}
          setValue={setHistologie}
          otherValue={histologieJine}
          setOtherValue={setHistologieJine}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Lokalizace"
          options={[
            {
              value: 'pravá',
              label: 'Pravá',
              isOther: false,
            },
            {
              value: 'levá',
              label: 'Levá',
              isOther: false,
            },
          ]}
          value={lokalizace}
          setValue={setLokalizace}
        ></RadioInput>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Kardiostimulátor"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={kardiostimulator}
          setValue={setKardiostimulator}
        />
      </div>

      {kardiostimulator === 'ano' ? (
        <>
          <div className="sm:col-span-2">
            <RadioInput
              label="Kardiostimulátor dependentní"
              options={[
                { value: 'ano', label: 'Ano', isOther: false },
                { value: 'ne', label: 'Ne', isOther: false },
              ]}
              value={kardiostimulatorDependentni}
              setValue={setKardiostimulatorDependentni}
            />
          </div>
          <div className="sm:col-span-2">
            <RadioInput
              label="Kontrola před RT zajištěna"
              options={[
                { value: 'ano', label: 'Ano', isOther: false },
                { value: 'ne', label: 'Ne', isOther: false },
              ]}
              value={kardiostimulatorKontrolaZajistena}
              setValue={setKardiostimulatorKontrolaZajistena}
            />
          </div>
        </>
      ) : (
        <>
          <div className="sm:col-span-4"></div>
        </>
      )}

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
          label="Rozsah"
          options={[
            { value: 'celý prs', label: 'Celý prs', isOther: false },
            {
              value: 'celý prs + spádová lymfatika',
              label: 'Celý prs + spádová lymfatika',
              isOther: false,
            },
            { value: 'hrudní stěna', label: 'Hrudní stěna', isOther: false },
            {
              value: 'hrudní stěna + spádová lymfatika',
              label: 'Hrudní stěna + spádová lymfatika',
              isOther: false,
            },
            { value: 'jiné', label: 'Jiné', isOther: true },
          ]}
          value={rozsah}
          setValue={setRozsah}
          otherValue={rozsahJine}
          setOtherValue={setRozsahJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Frakcionace"
          options={[
            {
              value: '26Gy (5x5,2Gy)',
              label: '26Gy (5x5,2Gy)',
              isOther: false,
            },
            {
              value: '40,05Gy (15x2,67Gy)',
              label: '40,05Gy (15x2,67Gy)',
              isOther: false,
            },
            { value: 'jiné', label: 'Jiné', isOther: true },
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
          label="Boost na lůžko"
          options={[
            { value: '10Gy (5x2Gy)', label: '10Gy (5x2Gy)', isOther: false },
            { value: '20Gy (10x2Gy)', label: '20Gy (10x2Gy)', isOther: false },
            { value: 'bez boostu', label: 'Bez boostu', isOther: false },
            { value: 'jiné', label: 'Jiné', isOther: true },
          ]}
          value={boost}
          setValue={setBoost}
          otherValue={boostJine}
          setOtherValue={setBoostJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="DIBH"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={dibh}
          setValue={setDibh}
        />
      </div>

      <div className="sm:col-span-4"></div>
      <div className="sm:col-span-2">
        <RadioInput
          label="Fixace"
          options={[
            { value: 'breastboard', label: 'Breastboard', isOther: false },
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
        />
      </div>

      <div className="sm:col-span-4"></div>
    </>
  );
}
