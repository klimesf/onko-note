import { Dialog, DialogPanel, Field, Label, Select } from '@headlessui/react';
import { useState, type FormEvent } from 'react';
import PliceResults from './PliceResults';
import PliceSection from './PliceSection';
import RektumResults from './RektumResults';
import RektumSection from './RektumSection';
import SarkomResults from './SarkomResults';
import SarkomSection from './SarkomSection';
import UniverzalResults from './UniverzalResults';
import UniverzalSection from './UniverzalSection';
import MammaeSection from './MammaeSection';
import MammaeResults from './MammaeResults';
import OrlSection from './OrlSection';
import OrlResults from './OrlResults';
import GynekologickeNadorySection from './GynekologickeNadorySection';
import GynekologickeNadoryResults from './GynekologickeNadoryResults';
import {
  RadioterapieFormProvider,
  useRadioterapieForm,
} from './hooks/useRadioterapieForm';

function RadioterapieFormContent() {
  const {
    gender,
    setGender,
    osetrujici,
    setOsetrujici,
    diagnoza,
    setDiagnoza,
  } = useRadioterapieForm();

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
                  <option value="muz">Muž</option>
                  <option value="zena">Žena</option>
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
                    MUDr. Michaela Klimeš Lipánová
                  </option>
                  <option value="domansky">MUDr. Martin Domanský</option>
                  <option value="neurceno">Neurčeno</option>
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            <div className="sm:col-span-2">
              <Field>
                <Label
                  htmlFor="diagnoza"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Výběr diagnózy
                </Label>
                <Select
                  id="diagnoza"
                  name="diagnoza"
                  value={diagnoza}
                  onChange={(e) => setDiagnoza(e.target.value)}
                  className="mt-2 w-full rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option value="" disabled>
                    Vyberte jednu z možností
                  </option>
                  <option value="sarkom">Sarkom</option>
                  <option value="rektum">Rektum</option>
                  <option value="plice">Plíce</option>
                  <option value="univerzal">Univerzál</option>
                  <option value="mammae">Mammae</option>
                  <option value="orl">ORL</option>
                  <option value="gynekologicke-nadory">
                    Gynekologické nádory
                  </option>
                  {/*<option value="anus">Anus</option>*/}
                </Select>
              </Field>
            </div>

            <div className="sm:col-span-4"></div>

            {diagnoza === 'sarkom' ? <SarkomSection /> : <></>}
            {diagnoza === 'rektum' ? <RektumSection /> : <></>}
            {diagnoza === 'plice' ? <PliceSection /> : <></>}
            {diagnoza === 'univerzal' ? <UniverzalSection /> : <></>}
            {diagnoza === 'mammae' ? <MammaeSection /> : <></>}
            {diagnoza === 'orl' ? <OrlSection /> : <></>}
            {diagnoza === 'gynekologicke-nadory' ? (
              <GynekologickeNadorySection />
            ) : (
              <></>
            )}
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
                {diagnoza === 'sarkom' ? <SarkomResults /> : <></>}
                {diagnoza === 'rektum' ? <RektumResults /> : <></>}
                {diagnoza === 'plice' ? <PliceResults /> : <></>}
                {diagnoza === 'univerzal' ? <UniverzalResults /> : <></>}
                {diagnoza === 'mammae' ? <MammaeResults /> : <></>}
                {diagnoza === 'orl' ? <OrlResults /> : <></>}
                {diagnoza === 'gynekologicke-nadory' ? (
                  <GynekologickeNadoryResults />
                ) : (
                  <></>
                )}
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

function RadioterapieForm() {
  return (
    <RadioterapieFormProvider>
      <RadioterapieFormContent />
    </RadioterapieFormProvider>
  );
}

export default RadioterapieForm;
