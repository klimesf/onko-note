type MammaeResultsProps = {
  gender: string;
  zamer: string;
  histologie: string;
  histologieJine: string;
  lokalizace: string;
  frakcionace: string;
  frakcionaceJine: string;
  poloha: string;
  polohaJine: string;
  fixace: string;
  fixaceJine: string;
  odbery: string;
  kardiostimulator: string;
  kardiostimulatorKontrolaZajistena: string;
  boost: string;
  boostJine: string;
  dibh: string;
  rozsah: string;
  rozsahJine: string;
};

function MammaeResults({
  gender,
  zamer,
  histologie,
  histologieJine,
  lokalizace,
  frakcionace,
  frakcionaceJine,
  poloha,
  polohaJine,
  fixace,
  fixaceJine,
  odbery,
  kardiostimulator,
  kardiostimulatorKontrolaZajistena,
  boost,
  boostJine,
  dibh,
  rozsah,
  rozsahJine,
}: MammaeResultsProps) {
  const histologieText = histologie === 'jine' ? histologieJine : histologie;
  const rozsahText = rozsah === 'jiné' ? rozsahJine : rozsah;
	const boostText = boost === 'jiné' ? boostJine : boost;

  const getPolohaAFixace = (): string => {
    if (poloha === fixace) {
      return 'Dle standardu';
    }

    const polohaText = poloha === 'jine' ? polohaJine : 'Dle standardu';

    let fixaceText = '';
    switch (fixace) {
      case 'jiné':
        fixaceText = fixaceJine;
        break;
      case 'dle-standardu':
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
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Diagnostický souhrn:</strong>
          <br />
          {lokalizace === 'pravá' ? (
            <>
              {histologieText} mammae l.dx, ER %, PR %, Ki-67 %, Her2/neu, T N M
              <br />- st.p. biopsii
            </>
          ) : (
            <></>
          )}
          {lokalizace === 'levá' ? (
            <>
              {histologieText} mammae l.sin, ER %, PR %, Ki-67 %, Her2/neu, T N
              M<br />- st.p. biopsii
            </>
          ) : (
            <></>
          )}
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
          <strong>
            Indikována {zamer} radioterapie pro {histologieText} mammae I.
            {lokalizace === 'pravá' ? <>dx</> : <>sin</>}.
          </strong>
          <br />
          Cílový objem: {rozsahText}
          <br />
          Plánovaný frakcionační režim:{' '}
          {frakcionace === 'jiné' ? frakcionaceJine : frakcionace}{' '}
					{boost !== 'bez boostu' ? <>+ boost {boostText}{' '}</> : <></>}
          {dibh === 'ano' ? <>v DIBH</> : <></>}
          <br />
          Navrhovaná poloha a fixace: {getPolohaAFixace()}
          <br />
          Kombinace s jinými terapeutickými modalitami: <br />
          Podepsán informovaný souhlas. Péče o ozařovanou oblast dle{' '}
          <span className="underline">doporučení v IS</span>.
          {dibh === 'ano' && lokalizace === 'pravá' ? (
            <>
              <br />
              Indikace v DIBH z důvodů snížení dávek na OaR, fixaci cílového
              objemu při použití konformních technik a akcelerované RT.
            </>
          ) : (
            <></>
          )}
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
          {kardiostimulator === 'ano' &&
          kardiostimulatorKontrolaZajistena === 'ano' ? (
            <>
              Kontrola kardiostimulátoru před RT zajištěna.
              <br />
            </>
          ) : (
            <></>
          )}
          {kardiostimulator === 'ano' &&
          kardiostimulatorKontrolaZajistena === 'ne' ? (
            <>
              Potřeba zajistit kontrolu kardiostimulátoru před zahájením RT -
              vydána žádanka ke kardiologovi.
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
      </div>
    </>
  );
}

export default MammaeResults;
