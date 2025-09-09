import { useState, type FormEvent } from 'react';
import {
  Field,
  Label,
  Input,
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
  const [dalsiCyklusAplikovan, setDalsiCyklusAplikovan] = useState<string>('');
  const [bloodDraw, setBloodDraw] = useState<string>('');
  const [growthFactor, setGrowthFactor] = useState<string>('');
  const [antiemetika, setAntiemetika] = useState<{ [key: string]: boolean }>({
    degan: false,
    torecan: false,
    novetron: false,
    granisetron: false,
  });
  const [gpCheck, setGpCheck] = useState<string>('');
  const [restaging, setRestaging] = useState<string>('');
  const [transport, setTransport] = useState<string>('');
  // const [therapy, setTherapy] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [prubehHospitalizace, setPrubehHospitalizace] = useState<string>('');
  const [stavPriPropusteni, setStavPriPropusteni] = useState<string>('');
  const [dalsiCyklusChemoterapie, setDalsiCyklusChemoterapie] =
    useState<string>('');
  const [zpusobDopravy, setZpusobDopravy] = useState<string>('');
  const [rustoveFaktory, setRustoveFaktory] = useState<string>('');
  const [odbery1, setOdbery1] = useState<string>('');
  const [odbery2, setOdbery2] = useState<string>('');

  function toggleAntiemetikum(key: keyof typeof antiemetika) {
    setAntiemetika((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function getNextChemoDate(): Date {
    let nextChemoDate = new Date(cycleStartDate);
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
        break;
    }
    return nextChemoDate;
  }

  function generateOdbery1a2() {
    // datum zahájení cyklu + 10 dní
    // ale nesmí být víkend - pokud vyjde 10 dní na sobotu, tak v pátek, pokud na neděli, tak v pondělí
    let nextOdber1 = new Date(cycleStartDate);
    nextOdber1.setDate(nextOdber1.getDate() + 10);
    if (nextOdber1.getDay() === 6) {
      nextOdber1.setDate(nextOdber1.getDate() - 1); // sobota
    } else if (nextOdber1.getDay() === 0) {
      nextOdber1.setDate(nextOdber1.getDate() + 1); // neděle
    }

    // 2 dny před datumem následujícího cyklu, pokud další cyklus v pondělí, tak odběry ve čtvrtek, pokud v úterý, tak v pátek
    let nextChemoDate = getNextChemoDate();
    let nextOdber2 = new Date(nextChemoDate);
    nextOdber2.setDate(nextOdber2.getDate() - 2);
    if (nextOdber2.getDay() === 6) {
      nextOdber2.setDate(nextOdber2.getDate() - 2); // pondělí - 2 = sobota => odběry čtvrtek
    } else if (nextOdber2.getDay() === 0) {
      nextOdber2.setDate(nextOdber2.getDate() - 2); // úterý - 2 = neděle => odběry pátek
    }

    switch (bloodDraw) {
      case 'v-miste-bydliste':
        if (interval === '3-tydny' || interval === '4-tydny') {
          setOdbery1(`
						<strong>${nextOdber1.toLocaleDateString()}</strong> Kontrolní odběry v místě bydliště (preferenčně EUC, Synlab, Unilabs, Nem. Benešov, Příbram nebo Rakovník).
						Výsledek prosím sdělit mailem luzka.onkologie@fnmotol.cz nebo telefonicky na čísle 22 443 4756/4794.
					`);
        }
        setOdbery2(`
					<strong>${nextOdber2.toLocaleDateString()}</strong> Kontrolní odběry v místě bydliště (preferenčně EUC, Synlab, Unilabs, Nem. Benešov, Příbram nebo Rakovník).
					Výsledek prosím sdělit mailem luzka.onkologie@fnmotol.cz nebo telefonicky na čísle 22 443 4756/4794.
				`);
        break;
      case 've-fnm':
      default:
        if (interval === '3-tydny' || interval === '4-tydny') {
          setOdbery1(`
						<strong>${nextOdber1.toLocaleDateString()}</strong> Kontrolní odběry v místě na onkologické ambulanci FNM - 3.patro uzel D kolem 8hod ráno.
						O výsledky si zavolá telefonicky po 12té hodině na tel. 22 443 4756/4794.
					`);
        }
        setOdbery2(`
					<strong>${nextOdber2.toLocaleDateString()}</strong> Kontrolní odběry v místě na onkologické ambulanci FNM - 3.patro uzel D kolem 8hod ráno.
					O výsledky si zavolá telefonicky po 12té hodině na tel. 22 443 4756/4794.
				`);
        break;
    }
  }

  function generateCyklusChemoterapie() {
    if (!cycleStartDate || !dalsiCyklusAplikovan) {
      return;
    }

    let nextChemoDate = getNextChemoDate();

    if (dalsiCyklusAplikovan === 'za-hospitalizace') {
      setDalsiCyklusChemoterapie(`
        Další cyklus chemoterapie za hospitalizace na 2. lůžkové stanici v plánu <strong>${nextChemoDate.toLocaleDateString()}</strong>.
        Pacient bude stran přesného času příchodu telefonicky informován pracovní den předem po 12té hodině. 
      `);
    } else {
      setDalsiCyklusChemoterapie(`
        Další cyklus chemoterapie bude aplikován ambulantně na stacionáři onkologické kliniky (3.patro, uzel B) <strong>${nextChemoDate.toLocaleDateString()}</strong>.
        Pacient si zavolá na tel. 224 434 745 pracovní den předem po 12té hodině. 
      `);
    }
  }

  function generateText(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsDialogOpen(true);

    setPrubehHospitalizace('');
    setStavPriPropusteni('');
    setDalsiCyklusChemoterapie('');
    setZpusobDopravy('');
    setRustoveFaktory('');
    setOdbery1('');
    setOdbery2('');

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

    // Medikace
    // -- Růstové faktory
    switch (growthFactor) {
      case 'Pelgraz':
        setRustoveFaktory(
          'Pelgraz 6mg inj. s.c. - Pacient si 24h po dokapání chemoterapie aplikuje jednorázovou podkožní injekci Pelgraz.'
        );
        break;
      case 'Lonquex':
        setRustoveFaktory(
          'Lonquex 6mg inj. s.c. - Pacient si 24h po dokapání chemoterapie aplikuje jednorázovou podkožní injekci Lonquex.'
        );
        break;
      case 'Zarzio 3x':
        setRustoveFaktory(
          'Pacient si aplikuje 3x Zarzio subkutánní injekce 24hod od dokapání chemoterapie D1-D5.'
        );
        break;
      case 'Zarzio 5x':
        setRustoveFaktory(
          'Pacient si aplikuje 5x Zarzio subkutánní injekce 24hod od dokapání chemoterapie D1-D5.'
        );
        break;
      case 'Ziextenzo':
        setRustoveFaktory(
          'Ziextenzo 6mg inj. s.c. - Pacient si 24h po dokapání chemoterapie aplikuje jednorázovou podkožní injekci Ziextenzo.'
        );
        break;
      case 'Bez růstových faktorů':
      default:
        setRustoveFaktory('');
        break;
    }
    // -- Antiemetika

    // Odběry
    generateOdbery1a2();

    // Další cyklus chemoterapie
    generateCyklusChemoterapie();

    // Způsob dopravy
    switch (transport) {
      case 'vlastni':
      default:
        setZpusobDopravy('Způsob dopravy: vlastní');
        break;
      case 'sanita':
        setZpusobDopravy('Způsob dopravy: sanitou');
        break;
    }
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
                  Interval chemoterapie
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
                <Label className="text-sm/6 font-medium text-gray-900">
                  Další cyklus bude aplikován
                </Label>
                <RadioGroup
                  value={dalsiCyklusAplikovan}
                  onChange={setDalsiCyklusAplikovan}
                  className="mt-6 space-y-2"
                >
                  {[
                    { id: 'za-hospitalizace', label: 'Za hospitalizace' },
                    { id: 'na-stacionari', label: 'Na stacionáři' },
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
                  <option value="v-miste-bydliste">V místě bydliště</option>
                  <option value="ve-fnm">Ve FNM</option>
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
                  htmlFor="restaging"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Restaging
                </Label>
                <Select
                  id="restaging"
                  name="restaging"
                  value={restaging}
                  onChange={(e) => setRestaging(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="objednan">Objednán</option>
                  <option value="bude-objednano">Bude objednáno.</option>
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
                  <option value="vlastni">Vlastní</option>
                  <option value="sanita">Sanita</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            {/*<div className="sm:col-span-3">
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
            </div>*/}
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
                    <span className="text-lg">PRŮBĚH HOSPITALIZACE:</span>{' '}
                    {prubehHospitalizace}
                  </p>
                </div>
                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <span className="text-lg">
                      STAV PACIENTA PŘI PROPUSTĚNÍ:
                    </span>{' '}
                    {stavPriPropusteni}
                  </p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <p className="text-md">
                    <span className="text-lg">ZÁVĚR:</span>{' '}
                    <span className="italic text-red-500">
                      ... Doplnit: Diagnostický souhrn ...
                    </span>
                  </p>
                </div>

                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg uppercase">DOPORUČENÍ:</h1>
                  <h1 className="text-lg">Medikace:</h1>
                  <p className="text-md">
                    <span className="italic text-red-500">
                      ... Doplnit: Chronická medikace: ...
                    </span>
                  </p>

                  {antiemetika['degan'] ||
                  antiemetika['torecan'] ||
                  antiemetika['novetron'] ||
                  antiemetika['granisetron'] ? (
                    <>
                      <p className="text-md">
                        <span className="underline">Při nevolnosti:</span>
                      </p>
                      <ul className="list-disc pl-4">
                        {antiemetika['degan'] ? (
                          <>
                            <li className="text-md">
                              Degan 10mg tbl. max 3/den, CAVE: neužívat při
                              průjmu
                            </li>
                          </>
                        ) : (
                          <></>
                        )}
                        {antiemetika['torecan'] ? (
                          <>
                            <li className="text-md">
                              Torecan 6,5mg tbl max 3/den
                            </li>
                          </>
                        ) : (
                          <></>
                        )}
                        {antiemetika['novetron'] ? (
                          <>
                            <li className="text-md">
                              Novetron tbl 1 tbl. pod jazyk, vycucat, max 2/den,
                              CAVE: způsobuje zácpu
                            </li>
                          </>
                        ) : (
                          <></>
                        )}
                        {antiemetika['granisetron'] ? (
                          <>
                            <li className="text-md">
                              Granisetron 1mg tbl. max 2/den
                            </li>
                          </>
                        ) : (
                          <></>
                        )}
                      </ul>
                      <br />
                    </>
                  ) : (
                    <></>
                  )}
                  {Array.from(rustoveFaktory).length > 0 ? (
                    <>
                      <p className="text-md">
                        <strong>{rustoveFaktory}</strong>
                      </p>
                      <p className="text-md">
                        Jedná se o růstové faktory,které podporují tvorbu bílých
                        krvinek. Po aplikaci se mohou objevit chřipkovité
                        příznaky (bolest hlavy, kloubů, svalů, zvýšená tělesná
                        teplota), v takovém případě pac. užije volně prodejné
                        protizánětlivé léky (Paralen, Ibalgin).
                        <span className="underline">
                          Do doby aplikace přípravek uchovávejte v lednici.
                        </span>
                      </p>
                      <p className="text-md">
                        Záznam o poučení nakládání s odpadem ze zdravotnické
                        péče
                      </p>
                      <p className="text-md">
                        Pacient (osoba o pacienta pečující) byl poučen o
                        nakládání s ostrým kontaminovaným odpadem, s
                        nepoužitelnými léčivy a dalším odpadem ze zdravotní péče
                        v domácím prostředí.
                      </p>
                      <p className="text-md">
                        Pacient edukován o podávání medikace a injekčním podání
                        léčby.
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="flex flex-col gap-y-2">
                  <h1 className="text-lg">Kontrola lékaře:</h1>
                  <ul className="list-disc pl-4">
                    {gpCheck === 'Ano' ? (
                      <>
                        <li className="text-md">
                          Kontrola u praktického lékaře do 3 dnů od propuštění.
                        </li>
                      </>
                    ) : (
                      <></>
                    )}
                    {Array.from(odbery1).length > 0 ? (
                      <li
                        className="text-md"
                        dangerouslySetInnerHTML={{ __html: odbery1 }}
                      ></li>
                    ) : (
                      <></>
                    )}
                    <li
                      className="text-md"
                      dangerouslySetInnerHTML={{ __html: odbery2 }}
                    ></li>
                    <li
                      className="text-md"
                      dangerouslySetInnerHTML={{
                        __html: dalsiCyklusChemoterapie,
                      }}
                    ></li>
                    {restaging === 'objednan' ? (
                      <li className="text-md">Restaging: Objednán na ...</li>
                    ) : (
                      <></>
                    )}
                    {restaging === 'bude-objednano' ? (
                      <li className="text-md">Restaging: Bude objednáno.</li>
                    ) : (
                      <></>
                    )}
                  </ul>
                  <p className="text-md"></p>
                  <p className="text-md">Plán péče: ...</p>
                  <p className="text-md">{zpusobDopravy}</p>
                  <p className="text-md">
                    V případě komplikací nás kontaktujte na tel.čísle: 224434756
                    nebo 224434794 (lůžková stanice), 224434730 (sesterna),
                    224434760 (ambulance).
                  </p>
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
        </div>
      </Dialog>
    </form>
  );
}

export default ChemoterapieForm;
