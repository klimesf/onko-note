import { useState, type FormEvent } from 'react';
import {
  Field,
  Label,
  Input,
  Textarea,
  Select,
  RadioGroup,
  Radio,
  Checkbox,
  Dialog,
  DialogPanel,
} from '@headlessui/react';

function ChemoterapieForm() {
  const [gender, setGender] = useState<string>('');
  const [chemoType, setChemoType] = useState<string>('');
  const [cycleNumber, setCycleNumber] = useState<string>('');
  const [cycleStartDate, setCycleStartDate] = useState<string>('');
  const [interval, setInterval] = useState<string>('');
  const [bloodDraw, setBloodDraw] = useState<string>('');
  const [growthFactor, setGrowthFactor] = useState<string>('');
  const [antiemetika, setAntiemetika] = useState<{ [key: string]: boolean }>({
    degan: false,
    torecan: false,
    novetron: false,
    granisetron: false,
  });
  const [gpCheck, setGpCheck] = useState<string>('');
  const [transport, setTransport] = useState<string>('');
  const [therapy, setTherapy] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [prubehHospitalizace, setPrubehHospitalizace] = useState<string>('');
  const [stavPriPropusteni, setStavPriPropusteni] = useState<string>('');
  const [kontrolaLekare, setKontrolaLekare] = useState<string>('');

  function toggleAntiemetikum(key: keyof typeof antiemetika) {
    setAntiemetika((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function generateKontrolaLekare() {
    console.log(cycleStartDate);
    if (!cycleStartDate) {
      return;
    }

    let nextChemoDate = new Date(cycleStartDate);
    console.log(interval);
    switch (interval) {
      case '1-tyden':
        nextChemoDate.setDate(nextChemoDate.getDate() + 7);
        break;
      case '2-tydny':
        nextChemoDate.setDate(nextChemoDate.getDate() + 14);
        break;
      case '3-tydny':
        nextChemoDate.setDate(nextChemoDate.getDate() + 21);
        break;
      case '4-tydny':
        nextChemoDate.setDate(nextChemoDate.getDate() + 28);
        break;
      case 'jine':
      default:
        // Not supported
        return;
    }

    setKontrolaLekare(`
			Další cyklus chemoterapie za hospitalizace v plánu ${nextChemoDate.toLocaleDateString()} -
			pacient si zavolá den předem po 12té hodině na tel 22443 4756/94 stran výsledku krevních odběrů a času nástupu k hospitalizaci.
		`);
  }

  function generateText(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsDialogOpen(true);

    // Průběh hospitalizace
    switch (gender) {
      case 'male':
      default:
        setPrubehHospitalizace(`
					Pacient přijat k aplikaci ${cycleNumber}. cyklu chemoterapie v režimu ${chemoType}, odběry k podání chemoterapie vyhovující.
					Léčba vykapala bez komplikací. Pacienta dimitujeme do domácího prostředí s plánem další péče.
				`);
        break;
      case 'female':
        setPrubehHospitalizace(`
					Pacientka přijata k aplikaci ${cycleNumber}. cyklu chemoterapie v režimu ${chemoType}, odběry k podání chemoterapie vyhovující.
					Léčba vykapala bez komplikací. Pacientku dimitujeme do domácího prostředí s plánem další péče.
				`);
        break;
    }

    // Stav při propuštění
    switch (gender) {
      case 'male':
      default:
        setStavPriPropusteni(`
					Orientovaný, spolupracující, afebrilní, KP kompenzovaný, břicho klidné, aperitonální, DKK bez známek HŽT.
				`);
        break;
      case 'female':
        setStavPriPropusteni(`
					Orientovaná, spolupracující, afebrilní, KP kompenzovaná, břicho klidné, aperitonální, DKK bez známek HŽT.
				`);
        break;
    }

    // Kontrola lékaře
    generateKontrolaLekare();
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

            <div className="sm:col-span-3">
              <Field>
                <Label
                  htmlFor="typ-chemoterapie"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Typ chemoterapie
                </Label>
                <Input
                  id="typ-chemoterapie"
                  name="typ-chemoterapie"
                  type="text"
                  placeholder="Např. cDDP + etoposid"
                  value={chemoType}
                  onChange={(e) => setChemoType(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>

            <div className="sm:col-span-1">
              <Field>
                <Label
                  htmlFor="cislo-cyklu"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Číslo cyklu
                </Label>
                <Input
                  id="cislo-cyklu"
                  name="cislo-cyklu"
                  type="number"
                  value={cycleNumber}
                  onChange={(e) => setCycleNumber(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="datum-zahajeni-cyklu"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Datum zahájení cyklu
                </Label>
                <Input
                  id="datum-zahajeni-cyklu"
                  name="datum-zahajeni-cyklu"
                  type="date"
                  value={cycleStartDate}
                  onChange={(e) => setCycleStartDate(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>

            <div className="sm:col-span-2">
              <Field>
                <Label className="text-sm/6 font-medium text-gray-900">
                  Inverval chemoterapie
                </Label>
                <RadioGroup
                  value={interval}
                  onChange={setInterval}
                  className="mt-6 space-y-2"
                >
                  {[
                    { id: '1-tyden', label: '1 týden' },
                    { id: '2-tydny', label: '2 týdny' },
                    { id: '3-tydny', label: '3 týdny' },
                    { id: '4-tydny', label: '4 týdny' },
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
                    </Radio>
                  ))}
                </RadioGroup>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="odbery"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Odběry
                </Label>
                <Select
                  id="odbery"
                  name="odbery"
                  value={bloodDraw}
                  onChange={(e) => setBloodDraw(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="V místě bydliště">V místě bydliště</option>
                  <option value="Ve FNM">Ve FNM</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label className="text-sm/6 font-medium text-gray-900">
                  Růstové faktory
                </Label>
                <RadioGroup
                  value={growthFactor}
                  onChange={setGrowthFactor}
                  className="mt-6 space-y-2"
                >
                  {[
                    'Pelgraz',
                    'Lonquex',
                    'Zarzio 3x',
                    'Zarzio 5x',
                    'Ziextenzo',
                    'Bez růstových faktorů',
                  ].map((label) => (
                    <Radio
                      key={label}
                      value={label}
                      className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <span
                        aria-hidden
                        className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
                      />
                      <span className="block text-sm/6 font-normal text-gray-900">
                        {label}
                      </span>
                    </Radio>
                  ))}
                </RadioGroup>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-3">
              <Field>
                <Label className="text-sm/6 font-semibold text-gray-900">
                  Antiemetika
                </Label>
                <div className="mt-6 space-y-2">
                  {[
                    { id: 'degan', label: 'Degan' },
                    { id: 'torecan', label: 'Torecan' },
                    { id: 'novetron', label: 'Novetron' },
                    { id: 'granisetron', label: 'Granisetron' },
                  ].map((opt) => (
                    <div key={opt.id} className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <Checkbox
                          id={opt.id}
                          name={opt.id}
                          checked={antiemetika[opt.id] || false}
                          onChange={() =>
                            toggleAntiemetikum(
                              opt.id as keyof typeof antiemetika
                            )
                          }
                          className="group size-4 rounded-sm border border-gray-300 bg-white data-[checked]:border-indigo-600 data-[checked]:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none size-3.5 stroke-white group-data-[checked]:block hidden"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Checkbox>
                      </div>
                      <div className="text-sm/6">
                        <Label
                          htmlFor={opt.id}
                          className="font-normal text-gray-900"
                        >
                          {opt.label}
                        </Label>
                      </div>
                    </div>
                  ))}
                </div>
              </Field>
            </div>

            <div className="sm:col-span-3"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="kontrola-u-praktickeho-lekare"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Kontrola u praktického lékaře
                </Label>
                <Select
                  id="kontrola-u-praktickeho-lekare"
                  name="kontrola-u-praktickeho-lekare"
                  value={gpCheck}
                  onChange={(e) => setGpCheck(e.target.value)}
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
                <Label
                  htmlFor="zpusob-dopravy"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Způsob dopravy
                </Label>
                <Select
                  id="zpusob-dopravy"
                  name="zpusob-dopravy"
                  value={transport}
                  onChange={(e) => setTransport(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="Vlastní">Vlastní</option>
                  <option value="Sanita">Sanita</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-3">
              <Field>
                <Label
                  htmlFor="terapie"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Terapie
                </Label>
                <Textarea
                  id="terapie"
                  name="terapie"
                  rows={4}
                  value={therapy}
                  onChange={(e) => setTherapy(e.target.value)}
                  className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </Field>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Smazat
        </button>
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
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-3xl rounded-md bg-white p-6 shadow-lg">
            <div className="mt-6 text-sm text-gray-600 flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg uppercase">Průběh hospitalizace</h1>
                <p className="text-md">{prubehHospitalizace}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg uppercase">
                  Stav pacienta při propuštění:
                </h1>
                <p className="text-md">{stavPriPropusteni}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg uppercase">Kontrola lékaře:</h1>
                <p className="text-md">{kontrolaLekare}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                className="rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-300"
                onClick={() => setIsDialogOpen(false)}
              >
                Zavřít
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </form>
  );
}

export default ChemoterapieForm;
