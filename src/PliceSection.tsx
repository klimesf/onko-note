import type { Dispatch, SetStateAction } from 'react';
import RadioInput from './inputs/RadioInput';

type PliceSectionProps = {
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
  konkomitantniChemoterapie: string;
  setKonkomitantniChemoterapie: Dispatch<SetStateAction<string>>;
  konkomitantniChemoterapieJine: string;
  setKonkomitantniChemoterapieJine: Dispatch<SetStateAction<string>>;
  vysaditCilenouLecbu: string;
  setVysaditCilenouLecbu: Dispatch<SetStateAction<string>>;
  fuzniPetCt: string;
  setFuzniPetCt: Dispatch<SetStateAction<string>>;
  fuzniMri: string;
  setFuzniMri: Dispatch<SetStateAction<string>>;
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
};

export default function PliceSection(props: PliceSectionProps) {
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
    konkomitantniChemoterapie,
    setKonkomitantniChemoterapie,
    konkomitantniChemoterapieJine,
    setKonkomitantniChemoterapieJine,
    vysaditCilenouLecbu,
    setVysaditCilenouLecbu,
    fuzniPetCt,
    setFuzniPetCt,
    fuzniMri,
    setFuzniMri,
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
  } = props;

  return (
    <>
      <div className="sm:col-span-2">
        <RadioInput
          label="Histologie"
          options={[
            {
              value: 'nemalobuněčný karcinom',
              label: 'Nemalobuněčný karcinom',
              isOther: false,
            },
            {
              value: 'malobuněčný karcinom',
              label: 'Malobuněčný karcinom',
              isOther: false,
            },
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
            { value: 'Pravá', label: 'Pravá', isOther: false },
            { value: 'Levá', label: 'Levá', isOther: false },
            { value: 'Mediastinum', label: 'Mediastinum', isOther: false },
            { value: 'HA-PCI', label: 'HA-PCI', isOther: false },
          ]}
          value={lokalizace}
          setValue={setLokalizace}
        />
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
            {
              value: 'samostatná radikální radioterapie',
              label: 'Samostatná radikální radioterapie',
              isOther: false,
            },
            {
              value: 'samostatná paliativní radioterapie',
              label: 'Samostatná paliativní radioterapie',
              isOther: false,
            },
            {
              value: 'konkomitantní chemoradioterapie',
              label: 'Konkomitantní chemoradioterapie',
              isOther: false,
            },
            {
              value: 'sekvenční chemoradioterapie',
              label: 'Sekvenční chemoradioterapie',
              isOther: false,
            },
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
            { value: '66Gy (33x2Gy)', label: '66Gy (33x2Gy)', isOther: false },
            { value: '70Gy (35x2Gy)', label: '70Gy (35x2Gy)', isOther: false },
            {
              value: '25Gy (10x2,5Gy)',
              label: '25Gy (10x2,5Gy)',
              isOther: false,
            },
            {
              value: '55Gy (20x2,75Gy)',
              label: '55Gy (20x2,75Gy)',
              isOther: false,
            },
            {
              value: '55Gy (22x2,5Gy)',
              label: '55Gy (22x2,5Gy)',
              isOther: false,
            },
            {
              value: '54Gy (30x1,8Gy)',
              label: '54Gy (30x1,8Gy)',
              isOther: false,
            },
            { value: '39Gy (13x3Gy)', label: '39Gy (13x3Gy)', isOther: false },
            { value: '30Gy (10x3Gy)', label: '30Gy (10x3Gy)', isOther: false },
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
          label="Konkomitantní chemoterapie"
          options={[
            {
              value: 'cDDP / etoposid',
              label: 'cDDP / etoposid',
              isOther: false,
            },
            {
              value: 'CBDCA / etoposid',
              label: 'CBDCA / etoposid',
              isOther: false,
            },
            {
              value: 'cDDP / vinorelbin',
              label: 'cDDP / vinorelbin',
              isOther: false,
            },
            {
              value: 'Bez chemoterapie',
              label: 'Bez chemoterapie',
              isOther: false,
            },
            { value: 'jiné', label: 'jiné', isOther: true },
          ]}
          value={konkomitantniChemoterapie}
          setValue={setKonkomitantniChemoterapie}
          otherValue={konkomitantniChemoterapieJine}
          setOtherValue={setKonkomitantniChemoterapieJine}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Vysadit cílenou léčbu/imunoterapii"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={vysaditCilenouLecbu}
          setValue={setVysaditCilenouLecbu}
        />
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <RadioInput
          label="Fúzní PET/CT"
          options={[
            { value: 'ano', label: 'Ano', isOther: false },
            { value: 'ne', label: 'Ne', isOther: false },
          ]}
          value={fuzniPetCt}
          setValue={setFuzniPetCt}
        />
      </div>

      <div className="sm:col-span-4"></div>

      {lokalizace === 'HA-PCI' ? (
        <>
          <div className="sm:col-span-2">
            <RadioInput
              label="Fúzní MRI"
              options={[
                { value: 'ano', label: 'Ano', isOther: false },
                { value: 'ne', label: 'Ne', isOther: false },
              ]}
              value={fuzniMri}
              setValue={setFuzniMri}
            />
          </div>

          <div className="sm:col-span-4"></div>
        </>
      ) : (
        <></>
      )}

      <div className="sm:col-span-2">
        <RadioInput
          label="Fixace"
          options={[
            { value: 'dle-standardu', label: 'Dle standardu', isOther: false },
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
