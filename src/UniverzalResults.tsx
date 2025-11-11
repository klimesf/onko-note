type UniverzalResultsProps = {
  gender: string;
  zamer: string;
  poloha: string;
  polohaJine: string;
  fixace: string;
  fixaceJine: string;
  odbery: string;
};

function UniverzalResults({
  gender,
  zamer,
  poloha,
  polohaJine,
  fixace,
  fixaceJine,
  odbery,
}: UniverzalResultsProps) {
  const getPolohaAFixace = (): string => {
    if (poloha === fixace) {
      return 'Dle standardu';
    }

    const polohaText = poloha === 'jiné' ? polohaJine : 'Dle standardu';

    let fixaceText = '';
    switch (fixace) {
      case 'jiné':
        fixaceText = fixaceJine;
        break;
      case 'dle standardu':
        fixaceText = 'Dle standardu';
        break;
      default:
        break;
    }

    return `${polohaText}, ${fixaceText}`;
  };

  return (
    <>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Provedená vyšetření:</strong>
          <br />
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
            ? 'Orientovaná, spolupracující, afebrilní, KP kompenzovaná, břicho klidné, aperitonální, DKK bez známek HŽT.'
            : 'Orientovaný, spolupracující, afebrilní, KP kompenzovaný, břicho klidné, aperitonální, DKK bez známek HŽT.'}
          <br />
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Závěr:</strong>
          <strong>Indikována {zamer} radioterapie pro ...</strong>
          <br />
          Cílový objem: <br />
          Plánovaný frakcionační režim: <br />
          Navrhovaná poloha a fixace: {getPolohaAFixace()}
          <br />
          Kombinace s jinými terapeutickými modalitami: <br />
          Podepsán informovaný souhlas. Péče o ozařovanou oblast dle{' '}
          <span className="underline">doporučení v IS</span>.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Doporučení:</strong>
          <br />
          {gender === 'zena' ? (
            <>
              <strong>
                Prosím evidenci o telefonické vyzvání pacientky na plánovací CT,
                zahájení RT v termínu od ...
              </strong>
            </>
          ) : (
            <>
              <strong>
                Prosím evidenci o telefonické vyzvání pacienta na plánovací CT,
                zahájení RT v termínu od ...
              </strong>
            </>
          )}
          <br />
          Termín 1. frakce radioterapie bude{' '}
          {gender === 'zena' ? 'pacientce' : 'pacientovi'} oznámen při
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
          Chronická medikace bez změny.
          <br />
          Kontroly u ambulantních specialistů jak zavedeno.
          <br />
        </p>
      </div>
    </>
  );
}

export default UniverzalResults;
