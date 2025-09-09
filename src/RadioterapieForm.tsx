import {
  Dialog,
  DialogPanel,
  Field,
  Input,
  Label,
  Radio,
  RadioGroup,
  Select,
} from '@headlessui/react';
import { useState, type FormEvent } from 'react';

function RadioterapieForm() {
  const [gender, setGender] = useState<string>('');
  const [osetrujici, setOsetrujici] = useState<string>('');
  const [histologie, setHistologie] = useState<string>('');
  const [lokalizace, setLokalizace] = useState<string>('');
  const [chemoterapie, setChemoterapie] = useState<string>('');
  const [fixace, setFixace] = useState<string>('');
  const [poloha, setPoloha] = useState<string>('');
  const [bolus, setBolus] = useState<string>('');
  const [zamer, setZamer] = useState<string>('');
  const [frakcionace, setFrakcionace] = useState<string>('');
  const [odbery, setOdbery] = useState<string>('');

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  function generateText(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsDialogOpen(true);
  }

  return (
    <form onSubmit={generateText}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="pohlavi"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Pohlaví
                </Label>
                <Select
                  id="pohlavi"
                  name="pohlavi"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="male">Muž</option>
                  <option value="female">Žena</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="osetrujici"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Ošetřující radioterapeut
                </Label>
                <Select
                  id="osetrujici"
                  name="osetrujici"
                  value={osetrujici}
                  onChange={(e) => setOsetrujici(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="lipanova">
                    MUDr.Michaela Klimeš Lipánová
                  </option>
                  <option value="domansky">MUDr. Martin Domanský</option>
                  <option value="neurceno">Neurčeno</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

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
                  htmlFor="lokalizace"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Lokalizace
                </Label>
                <Input
                  id="lokalizace"
                  name="lokalizace"
                  type="text"
                  placeholder="Např. horni končetina, paže"
                  value={lokalizace}
                  onChange={(e) => setLokalizace(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="chemoterapie"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Chemoterapie
                </Label>
                <Input
                  id="chemoterapie"
                  name="chemoterapie"
                  type="text"
                  placeholder="Např. MAI"
                  value={chemoterapie}
                  onChange={(e) => setChemoterapie(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
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
                <Input
                  id="fixace"
                  name="fixace"
                  type="text"
                  placeholder="Např. Vakuová matrace"
                  value={fixace}
                  onChange={(e) => setFixace(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label className="text-sm/6 font-medium text-gray-900">
                  Poloha
                </Label>
                <RadioGroup
                  value={poloha}
                  onChange={setPoloha}
                  className="mt-6 space-y-2"
                >
                  {[
                    { id: 'na-zadech', label: 'Na zádech' },
                    { id: 'na-brise', label: 'Na břiše' },
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
                  htmlFor="bolus"
                  className="block text-sm/6 font-medium text-gray-900"
                >
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

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="frakcionace"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Frakcionace
                </Label>
                <Input
                  id="frakcionace"
                  name="frakcionace"
                  type="text"
                  placeholder="Např. 50Gy (25x2Gy)"
                  value={frakcionace}
                  onChange={(e) => setFrakcionace(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
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
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Vygenerovat
        </button>
      </div>

      <Dialog
        open={isDialogOpen}
        onClose={setIsDialogOpen}
        className="relative z-10"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto p-4">
          <div className="flex items-center justify-center">
            <DialogPanel className="w-full max-w-3xl rounded-md bg-white p-6 shadow-lg">
              <div className="mt-6 text-sm text-gray-600 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Odesílající pracoviště:</strong>
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Anamnéza:</strong>
                    <br />
                    RA: <br />
                    OA: <br />
                    operace: <br />
                    úrazy: <br />
                    FA: <br />
                    AA:
                    <br />
                    EA: <br />
                    GA: <br />
                    SPA: <br />
                    Abusus: <br />
                    NO: <br />
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Provedená vyšetření:</strong>
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Diagnostický souhrn:</strong>
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Status praesens:</strong>
                    <br />
                    Výška: Váha: PS ECOG: <br />
                    Subjektivně: <br />
                    Objektivně:&nbsp;
                    {gender === 'zena'
                      ? 'Orientovaný, spolupracující, afebrilní, KP kompenzovaný, břicho klidné, aperitonální, DKK bez známek HŽT.'
                      : 'Orientovaná, spolupracující, afebrilní, KP kompenzovaná, břicho klidné, aperitonální, DKK bez známek HŽT.'}
                    <br />
                    Status localis: <br />
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Závěr:</strong>
                    <br />
                    <strong>Indikována {zamer} radioterapie</strong>
                    <br />
                    Cílový objem: {histologie} {lokalizace}
                    <br />
                    Plánovaný frakcionační režim: {frakcionace}
                    <br />
                    Navrhovaná poloha a fixace: {poloha}, {fixace}
                    <br />
                    Využití bolusu: {bolus}
                    <br />
                    Kombinace s jinými terapeutickými modalitami: {chemoterapie}
                    <br />
                    Podepsán informovaný souhlas. Péče o ozařovanou oblast dle{' '}
                    <span className="underline">doporučení v IS</span>.
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Doporučení:</strong>
                    <br />
                    <strong>
                      Prosím evidenci o telefonické vyzvání pacienta/ky na
                      plánovací CT, zahájení RT v termínu od ...
                    </strong>
                    <br />
                    Termín 1. frakce radioterapie bude pacientce oznámen při
                    plánovacím CT.
                    <br />
                    Kontroly v průběhu radioterapie 1xtýdně.
                    <br />
                    {odbery === 'ano' ? (
                      <>
                        Dnes provedeny krevní odběry.
                        <br />
                      </>
                    ) : (
                      <></>
                    )}
                    Chronické medikace bez změny.
                    <br />
                    Kontroly u ambulantních specialistů jak zavedeno.
                    <br />
                  </p>
                  <p className="text-md underline">
                    Doporučení péče o ozařovanou oblast:
                  </p>
                  <ul className="list-disc pl-4">
                    <li className="text-md">
                      Kůži v místě ozáření udržovat čistou, omývat ji jemně
                      vlažnou vodou bez použití parfémovaných mýdel či
                      sprchových gelů.
                    </li>
                    <li className="text-md">
                      Vyhnout se tření nebo škrábání ozářené oblasti, pokožku
                      nedrhnout ručníkem, ale pouze jemně osušit poklepem.
                    </li>
                    <li className="text-md">
                      Denně aplikovat doporučený hydratační krém (např.
                      Bepanthen, dle domluvy s radioterapeutem) – ideálně po
                      sprše a 1 hodinu po ozáření, neaplikovat 2-3 hodiny před
                      další frakcí.
                    </li>
                    <li className="text-md">
                      Nenosit těsné oblečení přes ozářenou oblast, upřednostnit
                      volné, prodyšné bavlněné prádlo.
                    </li>
                    <li className="text-md">
                      Nevystavovat ozářené místo slunci, používat mechanickou
                      ochranu (oděv), po skončení radioterapie pak dlouhodobě
                      chránit pokožku opalovacím krémem s vysokým SPF.
                    </li>
                    <li className="text-md">
                      Nepoužívat na pokožku v ozářené oblasti žádné parfémy,
                      deodoranty, alkoholové přípravky, pudry ani jiné
                      kosmetické produkty bez konzultace s ošetřujícím lékařem.
                    </li>
                    <li className="text-md">
                      V případě začervenání, pálení, olupování kůže nebo jiných
                      kožních potíží kontaktovat ošetřujícího lékaře – může být
                      doporučena úprava lokální péče nebo předepsání léčivých
                      mastí.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <strong>Kontakt:</strong>
                    <br />
                    {osetrujici === 'lipanova'
                      ? 'MUDr. Michaela Klimeš Lipánová - tel: 702 221 067, e-mail: michaela.klimes-lipanova@fnmotol.cz'
                      : ''}
                    {osetrujici === 'domansky'
                      ? 'MUDr. Martin Domanský - tel: 724 967 754, e-mail: martin.domansky@fnmotol.cz'
                      : ''}
                    <br />
                    Sesterna: 224 434 764, Evidence: 224 434 777
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    Pacient byl podrobně seznámen s plánovaným postupem
                    onkologické terapie a možnými nežádoucími účinky léčby.
                    Odchází z ambulance bez známek dechové či oběhové
                    nedostatečnosti.
                  </p>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </form>
  );
}

export default RadioterapieForm;
