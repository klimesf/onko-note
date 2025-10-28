import {
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
} from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';

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
  } = props;

  const onRezimChange = (rezim: string) => {
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
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">
            Histologie
          </Label>
          <RadioGroup
            value={histologie}
            onChange={setHistologie}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'adenokarcinom', label: 'Adenokarcinom' },
              { id: 'jine', label: 'Jiné' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.id === 'jine' ? (
                  <>
                    <Input
                      id="histologie-jine"
                      name="histologie-jine"
                      type="text"
                      value={histologieJine}
                      onChange={(e) => setHistologieJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="lokalizace"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Lokalizace
          </Label>
          <RadioGroup
            value={lokalizace}
            onChange={setLokalizace}
            className="mt-6 space-y-2"
          >
            {[{ label: 'Horní' }, { label: 'Střední' }, { label: 'Dolní' }].map(
              (opt) => (
                <Radio
                  key={opt.label}
                  value={opt.label}
                  className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <span
                    aria-hidden
                    className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                  />
                  <span className="block text-sm/6 font-normal text-gray-900">
                    {opt.label}
                  </span>
                </Radio>
              )
            )}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-3">
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">Režim</Label>
          <RadioGroup onChange={onRezimChange} className="mt-6 space-y-2">
            {[
              {
                id: '1',
                label:
                  'Neoadjuvance - Samostatná akcelerovaná radioterapie + standardní odstup operace',
              },
              {
                id: '2',
                label:
                  'Neoadjuvance - Samostatná akcelerovaná radioterapie + krátký odstup operace',
              },
              {
                id: '3',
                label: 'Neoadjuvance - Konkomitantní chemoradioterapie',
              },
              {
                id: '4',
                label:
                  'Totální neoadjuvance - akcelerovaná radioterapie + 6x CAPOX ',
              },
              {
                id: '5',
                label:
                  'Totální neoadjuvance - akcelerovaná radioterapie + 9x FOLFOX ',
              },
              {
                id: '6',
                label: 'Totální neoadjuvance - chemoradioterapie + 6x CAPOX ',
              },
              {
                id: '7',
                label: 'Totální neoadjuvance - chemoradioterapie + 9x FOLFOX ',
              },
              { id: '8', label: 'Adjuvantní chemoradioterapie' },
              { id: '9', label: 'Adjuvantní chemoradioterapie SIB' },
              { id: '10', label: 'Radikální  chemoradioterapie' },
              { id: '11', label: 'Radikální samostatná radioterapie' },
              { id: '12', label: 'Paliativní radioterapie' },
              { id: '13', label: 'Jiná možnost' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">
            Záměr radioterapie
          </Label>
          <RadioGroup
            value={zamer}
            onChange={setZamer}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'adjuvantní', label: 'Adjuvantní' },
              { id: 'neoadjuvantní', label: 'Neoadjuvantní' },
              { id: 'radikální', label: 'Radikální' },
              { id: 'paliativní', label: 'Paliativní' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-3">
        <Field>
          <Label
            htmlFor="frakcionace"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Frakcionace
          </Label>
          <RadioGroup
            value={frakcionace}
            onChange={setFrakcionace}
            className="mt-6 space-y-2"
          >
            {[
              { id: '25', label: '25Gy (5x5Gy)' },
              { id: '50', label: '50Gy (25x2Gy)' },
              { id: '45', label: '45Gy (25x1,8Gy)' },
              {
                id: 'PTV+SIB',
                label: 'PTV low 45Gy (25x1,8Gy) + SIB PTV high 50Gy (25x2Gy)',
              },
              {
                id: 'PTV 45',
                label: 'PTV low 45Gy (25x1,8Gy) + PTV high 20-24Gy (10-12x2Gy)',
              },
              {
                id: 'PTV 46',
                label: 'PTV low 46Gy (23x2Gy) + PTV high 20-24Gy (10-12x2Gy)',
              },
              { id: '30', label: '30Gy (10x3Gy)' },
              { id: '20', label: '20Gy (5x4Gy)' },
              { id: '8', label: '8Gy (1x8Gy)' },
              { id: 'jine', label: 'Jiné' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.id === 'jine' ? (
                  <>
                    <Input
                      id="frakcionace-jine"
                      name="frakcionace-jine"
                      type="text"
                      value={frakcionaceJine}
                      onChange={(e) => setFrakcionaceJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-3">
        <Field>
          <Label
            htmlFor="chemoterapie"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Chemoterapie
          </Label>

          <RadioGroup
            value={chemoterapie}
            onChange={setChemoterapie}
            className="mt-6 space-y-2"
          >
            {[
              {
                id: 'konkomitantni-chemoterapie',
                label: 'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd',
              },
              {
                id: 'konkomitantni+capox',
                label:
                  'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + CAPOX 6x po ukončení radioterapie',
              },
              {
                id: 'konkomitantni+folfox',
                label:
                  'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + FOLFOX 9x po ukončení radioterapie',
              },
              { id: 'capox', label: 'CAPOX 6x po ukončení radioterapie' },
              { id: 'folfox', label: 'FOLFOX 9x po ukončení radioterapie' },
              { id: 'bez-chemoterapie', label: 'Bez chemoterapie' },
              { id: 'jine', label: 'Jiné' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.id === 'jine' ? (
                  <>
                    <Input
                      id="chemoterapie-jine"
                      name="chemoterapie-jine"
                      type="text"
                      value={chemoterapieJine}
                      onChange={(e) => setChemoterapieJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-3"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="odstup"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Odstup operace
          </Label>
          <RadioGroup
            value={odstup}
            onChange={setOdstup}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'standardni', label: 'Standardní (6-8 týdnů)' },
              { id: 'kratky', label: 'Krátký (2-4 týdny)' },
              { id: 'bez', label: 'Bez operace' },
              { id: 'jine', label: 'Jiné' },
            ].map((opt) => (
              <Radio
                key={opt.id}
                value={opt.id}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.id === 'jine' ? (
                  <>
                    <Input
                      id="odstup-jine"
                      name="odstup-jine"
                      type="text"
                      value={odstupJine}
                      onChange={(e) => setOdstupJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="fixace"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Fixace
          </Label>
          <RadioGroup
            value={fixace}
            onChange={setFixace}
            className="mt-6 space-y-2"
          >
            {[
              { label: 'Dle standardu' },
              { label: 'Combifix' },
              { label: 'jiné' },
            ].map((opt) => (
              <Radio
                key={opt.label}
                value={opt.label}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.label === 'jiné' ? (
                  <>
                    <Input
                      id="fixace-jine"
                      name="fixace-jine"
                      type="text"
                      value={fixaceJine}
                      onChange={(e) => setFixaceJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">Poloha</Label>
          <RadioGroup
            value={poloha}
            onChange={setPoloha}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'dle-standardu', label: 'Dle standardu' },
              { id: 'jine', label: 'Jiné' },
            ].map((opt) => (
              <Radio
                key={opt.label}
                value={opt.label}
                className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span
                  aria-hidden
                  className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                />
                <span className="block text-sm/6 font-normal text-gray-900">
                  {opt.label}
                </span>
                {opt.id === 'jine' ? (
                  <>
                    <Input
                      id="fixace-jine"
                      name="fixace-jine"
                      type="text"
                      value={polohaJine}
                      onChange={(e) => setPolohaJine(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </>
                ) : (
                  <></>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="krevni-odbery"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Krevní odběry
          </Label>
          <Select
            id="krevni-odbery"
            name="krevni-odbery"
            value={odbery}
            onChange={(e) => setOdbery(e.target.value)}
            className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="" disabled>
              Vyberte jednu z možností
            </option>
            <option value="Ano">Ano</option>
            <option value="Ne">Ne</option>
          </Select>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>
    </>
  );
}
