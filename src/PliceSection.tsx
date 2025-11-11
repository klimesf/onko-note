import { Field, Input, Label, Radio, RadioGroup } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';

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
              { id: 'nemalobuněčný karcinom', label: 'Nemalobuněčný karcinom' },
              { id: 'malobuněčný karcinom', label: 'Malobuněčný karcinom' },
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
            {[
              { label: 'Pravá' },
              { label: 'Levá' },
              { label: 'Mediastinum' },
              { label: 'HA-PCI' },
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
              </Radio>
            ))}
          </RadioGroup>
        </Field>
      </div>

      <div className="sm:col-span-4"></div>

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="kardiostimulator"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Kardiostimulátor
          </Label>

          <RadioGroup
            value={kardiostimulator}
            onChange={setKardiostimulator}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'ano', label: 'Ano' },
              { id: 'ne', label: 'Ne' },
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

      {kardiostimulator === 'ano' ? (
        <>
          <div className="sm:col-span-2">
            <Field>
              <Label
                htmlFor="kardiostimulator"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Kardiostimulátor dependentní
              </Label>

              <RadioGroup
                value={kardiostimulatorDependentni}
                onChange={setKardiostimulatorDependentni}
                className="mt-6 space-y-2"
              >
                {[
                  { id: 'ano', label: 'Ano' },
                  { id: 'ne', label: 'Ne' },
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
          <div className="sm:col-span-2">
            <Field>
              <Label
                htmlFor="kardiostimulator"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Kontrola před RT zajištěna
              </Label>

              <RadioGroup
                value={kardiostimulatorKontrolaZajistena}
                onChange={setKardiostimulatorKontrolaZajistena}
                className="mt-6 space-y-2"
              >
                {[
                  { id: 'ano', label: 'Ano' },
                  { id: 'ne', label: 'Ne' },
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
        </>
      ) : (
        <>
          <div className="sm:col-span-4"></div>
        </>
      )}

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
              {
                id: 'samostatná radikální radioterapie',
                label: 'Samostatná radikální radioterapie',
              },
              {
                id: 'samostatná paliativní radioterapie',
                label: 'Samostatná paliativní radioterapie',
              },
              {
                id: 'konkomitantní chemoradioterapie',
                label: 'Konkomitantní chemoradioterapie',
              },
              {
                id: 'sekvenční chemoradioterapie',
                label: 'Sekvenční chemoradioterapie',
              },
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

      <div className="sm:col-span-2">
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
              { label: '66Gy (33x2Gy)' },
              { label: '70Gy (35x2Gy)' },
              { label: '25Gy (10x2,5Gy)' },
              { label: '55Gy (20x2,75Gy)' },
              { label: '55Gy (22x2,5Gy)' },
              { label: '54Gy (30x1,8Gy)' },
              { label: '39Gy (13x3Gy)' },
              { label: '30Gy (10x3Gy)' },
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
          <Label className="text-sm/6 font-medium text-gray-900">
            Konkomitantní chemoterapie
          </Label>
          <RadioGroup
            value={konkomitantniChemoterapie}
            onChange={setKonkomitantniChemoterapie}
            className="mt-6 space-y-2"
          >
            {[
              { label: 'cDDP / etoposid' },
              { label: 'CBDCA / etoposid' },
              { label: 'cDDP / vinorelbin' },
              { label: 'Bez chemoterapie' },
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
                      id="konkomitantni-chemoterapie-jine"
                      name="konkomitantni-chemoterapie-jine"
                      type="text"
                      value={konkomitantniChemoterapieJine}
                      onChange={(e) =>
                        setKonkomitantniChemoterapieJine(e.target.value)
                      }
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
            htmlFor="vysadit-cilenou-lecbu-imunoterapii"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Vysadit cílenou léčbu/imunoterapii
          </Label>

          <RadioGroup
            value={vysaditCilenouLecbu}
            onChange={setVysaditCilenouLecbu}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'ano', label: 'Ano' },
              { id: 'ne', label: 'Ne' },
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

      <div className="sm:col-span-2">
        <Field>
          <Label
            htmlFor="fuzni-pet-ct"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Fúzní PET/CT
          </Label>

          <RadioGroup
            value={fuzniPetCt}
            onChange={setFuzniPetCt}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'ano', label: 'Ano' },
              { id: 'ne', label: 'Ne' },
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

      {lokalizace === 'HA-PCI' ? (
        <>
          <div className="sm:col-span-2">
            <Field>
              <Label
                htmlFor="fuzni-mri"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Fúzní MRI
              </Label>

              <RadioGroup
                value={fuzniMri}
                onChange={setFuzniMri}
                className="mt-6 space-y-2"
              >
                {[
                  { id: 'ano', label: 'Ano' },
                  { id: 'ne', label: 'Ne' },
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
        </>
      ) : (
        <></>
      )}

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
              { id: 'dle-standardu', label: 'Dle standardu' },
              { id: 'jiné', label: 'Jiné' },
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
                {opt.id === 'jiné' ? (
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
                      id="poloha-jine"
                      name="poloha-jine"
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
          <RadioGroup
            value={odbery}
            onChange={setOdbery}
            className="mt-6 space-y-2"
          >
            {[
              { id: 'ano', label: 'Ano' },
              { id: 'ne', label: 'Ne' },
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
    </>
  );
}
