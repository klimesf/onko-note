type SarkomResultsProps = {
  gender: string;
  zamer: string;
  histologie: string;
  lokalizace: string;
  lokalizaceJine: string;
  frakcionace: string;
  frakcionaceJine: string;
  poloha: string;
  fixace: string;
  fixaceJine: string;
  bolus: string;
  chemoterapie: string;
  chemoterapieJine: string;
  odbery: string;
};

function SarkomResults({
  gender,
  zamer,
  histologie,
  lokalizace,
  lokalizaceJine,
  frakcionace,
  frakcionaceJine,
  poloha,
  fixace,
  fixaceJine,
  bolus,
  chemoterapie,
  chemoterapieJine,
  odbery,
}: SarkomResultsProps) {
  return (
    <>
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
            ? 'Orientovaná, spolupracující, afebrilní, KP kompenzovaná, břicho klidné, aperitonální, DKK bez známek HŽT.'
            : 'Orientovaný, spolupracující, afebrilní, KP kompenzovaný, břicho klidné, aperitonální, DKK bez známek HŽT.'}
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
          Cílový objem: {histologie}{' '}
          {lokalizace === 'jiné' ? lokalizaceJine : lokalizace}
          <br />
          Plánovaný frakcionační režim:{' '}
          {frakcionace === 'jiné' ? frakcionaceJine : frakcionace}
          <br />
          Navrhovaná poloha a fixace: {poloha},{' '}
          {fixace === 'jiné' ? fixaceJine : fixace}
          <br />
          Využití bolusu: {bolus}
          <br />
          Kombinace s jinými terapeutickými modalitami:{' '}
          {chemoterapie === 'jiné' ? chemoterapieJine : chemoterapie}
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
            Prosím evidenci o telefonické vyzvání pacienta/ky na plánovací CT,
            zahájení RT v termínu od ...
          </strong>
          <br />
          Termín 1. frakce radioterapie bude pacientce oznámen při plánovacím
          CT.
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
            Kůži v místě ozáření udržovat čistou, omývat ji jemně vlažnou vodou
            bez použití parfémovaných mýdel či sprchových gelů.
          </li>
          <li className="text-md">
            Vyhnout se tření nebo škrábání ozářené oblasti, pokožku nedrhnout
            ručníkem, ale pouze jemně osušit poklepem.
          </li>
          <li className="text-md">
            Denně aplikovat doporučený hydratační krém (např. Bepanthen, dle
            domluvy s radioterapeutem) – ideálně po sprše a 1 hodinu po ozáření,
            neaplikovat 2-3 hodiny před další frakcí.
          </li>
          <li className="text-md">
            Nenosit těsné oblečení přes ozářenou oblast, upřednostnit volné,
            prodyšné bavlněné prádlo.
          </li>
          <li className="text-md">
            Nevystavovat ozářené místo slunci, používat mechanickou ochranu
            (oděv), po skončení radioterapie pak dlouhodobě chránit pokožku
            opalovacím krémem s vysokým SPF.
          </li>
          <li className="text-md">
            Nepoužívat na pokožku v ozářené oblasti žádné parfémy, deodoranty,
            alkoholové přípravky, pudry ani jiné kosmetické produkty bez
            konzultace s ošetřujícím lékařem.
          </li>
          <li className="text-md">
            V případě začervenání, pálení, olupování kůže nebo jiných kožních
            potíží kontaktovat ošetřujícího lékaře – může být doporučena úprava
            lokální péče nebo předepsání léčivých mastí.
          </li>
        </ul>
      </div>
    </>
  );
}

export default SarkomResults;
