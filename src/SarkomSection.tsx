import { Field, Input, Label, Radio, RadioGroup, Select } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';

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
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">Histologie</Label>
          <RadioGroup value={histologie} onChange={setHistologie} className="mt-6 space-y-2">
            {[
              { id: 'Myxoidní liposarkom', label: 'Myxoidní liposarkom' },
              { id: 'Liposarkom', label: 'Liposarkom' },
              { id: 'Myxofibrosarkom', label: 'Myxofibrosarkom' },
              { id: 'Rhabdomyosarkom', label: 'Rhabdomyosarkom' },
              { id: 'Ewingův sarkom', label: 'Ewingův sarkom' },
              { id: 'UPS', label: 'UPS' },
              { id: 'Leiomyosarkom', label: 'Leiomyosarkom' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label htmlFor="lokalizace" className="block text-sm/6 font-medium text-gray-900">
            Lokalizace
          </Label>
          <RadioGroup value={lokalizace} onChange={setLokalizace} className="mt-6 space-y-2">
            {[
              { label: 'horní končetina' },
              { label: 'dolní končetina' },
              { label: 'retroperitoneum' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
                {opt.label === 'jiné' ? (
                  <>
                    <Input
                      id="lokalizace-jine"
                      name="lokalizace-jine"
                      type="text"
                      value={lokalizaceJine}
                      onChange={(e) => setLokalizaceJine(e.target.value)}
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
          <Label htmlFor="chemoterapie" className="block text-sm/6 font-medium text-gray-900">
            Chemoterapie
          </Label>

          <RadioGroup value={chemoterapie} onChange={setChemoterapie} className="mt-6 space-y-2">
            {[
              { id: 'ne', label: 'ne' },
              { id: 'chemoterapie - MAI', label: 'MAI' },
              { id: 'jiné', label: 'jiné' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
                {opt.label === 'jiné' ? (
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

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label htmlFor="fixace" className="block text-sm/6 font-medium text-gray-900">
            Fixace
          </Label>
          <RadioGroup value={fixace} onChange={setFixace} className="mt-6 space-y-2">
            {[
              { label: 'Vakuová matrace' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
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
          <RadioGroup value={poloha} onChange={setPoloha} className="mt-6 space-y-2">
            {[
              { id: 'na-zadech', label: 'Na zádech' },
              { id: 'na-brise', label: 'Na břiše' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label htmlFor="bolus" className="block text-sm/6 font-medium text-gray-900">
            Bolus
          </Label>
          <Select
            id="bolus"
            name="bolus"
            value={bolus}
            onChange={(e) => setBolus(e.target.value)}
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

      <div className="sm:col-span-2">
        <Field>
          <Label className="text-sm/6 font-medium text-gray-900">Záměr radioterapie</Label>
          <RadioGroup value={zamer} onChange={setZamer} className="mt-6 space-y-2">
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label htmlFor="frakcionace" className="block text-sm/6 font-medium text-gray-900">
            Frakcionace
          </Label>
          <RadioGroup value={frakcionace} onChange={setFrakcionace} className="mt-6 space-y-2">
            {[
              { label: '50Gy (25x2Gy)' },
              { label: '60Gy(30x2Gy)' },
              { label: '36Gy(18x2Gy)' },
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
                <span className="block text-sm/6 font-normal text-gray-900">{opt.label}</span>
                {opt.label === 'jiné' ? (
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

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label htmlFor="krevni-odbery" className="block text-sm/6 font-medium text-gray-900">
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


