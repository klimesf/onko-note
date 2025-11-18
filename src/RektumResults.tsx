import { useRadioterapieForm } from './hooks/useRadioterapieForm';

function RektumResults() {
  const {
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
    chemoterapie,
    chemoterapieJine,
    odbery,
    rezim,
    odstup,
  } = useRadioterapieForm();
  const getIndikace = (): string => {
    const histologieText = histologie === 'jine' ? histologieJine : histologie;

    if (rezim === '4' || rezim === '5' || rezim === '6' || rezim === '7') {
      return `Indikována totální neoadjuvance pro ${histologieText} rekta`;
    }

    switch (lokalizace) {
      case 'horni':
        return `Indikována ${zamer} radioterapie pro ${histologieText} horního rekta`;
      case 'dolni':
        return `Indikována ${zamer} radioterapie pro ${histologieText} dolního rekta`;
      case 'stredni':
        return `Indikována ${zamer} radioterapie pro ${histologieText} středního rekta`;
      default:
        break;
    }

    return '';
  };

  const getCilovyObjem = (): string => {
    if (zamer === 'paliativní') {
      return 'rektum';
    }
    return 'rektum, mezorektum, pánevní lymfatika';
  };

  const getPolohaAFixace = (): string => {
    if (poloha === fixace) {
      return 'Dle standardu';
    }

    const polohaText = poloha === 'jiné' ? polohaJine : 'Dle standardu';

    let fixaceText = '';
    switch (fixace) {
      case 'jine':
        fixaceText = fixaceJine;
        break;
      case 'dle-standardu':
        fixaceText = 'Dle standardu';
        break;
      case 'combifix':
        fixaceText = 'Combifix';
        break;
      default:
        break;
    }

    return `${polohaText}, ${fixaceText}`;
  };

  const getFrakcionace = (): string => {
    switch (frakcionace) {
      case '25':
        return '25Gy (5x5Gy)';
      case '50':
        return '50Gy (25x2Gy)';
      case '45':
        return '45Gy (25x1,8Gy)';
      case 'PTV+SIB':
        return 'PTV low 45Gy (25x1,8Gy) + SIB PTV high 50Gy (25x2Gy)';
      case 'PTV 45':
        return 'PTV low 45Gy (25x1,8Gy) + PTV high 20-24Gy (10-12x2Gy)';
      case 'PTV 46':
        return 'PTV low 46Gy (23x2Gy) + PTV high 20-24Gy (10-12x2Gy)';
      case '30':
        return '30Gy (10x3Gy)';
      case '20':
        return '20Gy (5x4Gy)';
      case '8':
        return '8Gy (1x8Gy)';
      case 'jine':
        return frakcionaceJine;
      default:
        return '';
    }
  };

  const getChemoterapie = (): string => {
    switch (chemoterapie) {
      case 'konkomitantni-chemoterapie':
        return 'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd';
      case 'konkomitantni+capox':
        return 'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + CAPOX 6x po ukončení radioterapie';
      case 'konkomitantni+folfox':
        return 'Konkomitantní chemoterapie Kapecitabin 825mg/m2 2xd + FOLFOX 9x po ukončení radioterapie';
      case 'capox':
        return 'CAPOX 6x po ukončení radioterapie';
      case 'folfox':
        return 'FOLFOX 9x po ukončení radioterapie';
      case 'bez-chemoterapie':
        return 'Bez chemoterapie';
      case 'jine':
        return chemoterapieJine;
      default:
        return '';
    }
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
          Per rectum: <br />
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Závěr:</strong>
          <br />
          <strong>{getIndikace()}</strong>
          <br />
          Cílový objem: {getCilovyObjem()}
          <br />
          Plánovaný frakcionační režim: {getFrakcionace()}
          <br />
          Navrhovaná poloha a fixace: {getPolohaAFixace()}
          <br />
          Kombinace s jinými terapeutickými modalitami: {getChemoterapie()}
          <br />
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
          Chronické medikace bez změny.
          <br />
          Kontroly u ambulantních specialistů jak zavedeno.
          <br />
        </p>

        {gender === 'zena' &&
        (chemoterapie === 'konkomitantni-chemoterapie' ||
          chemoterapie === 'konkomitantni+capox' ||
          chemoterapie === 'konkomitantni+folfox') ? (
          <>
            <p className="text-md">
              <strong>Konkomitantní chemoterapie</strong>
              <br />
              Pacientka bude v průběhu radioterapie užívat chemoterapii
              Kapecitabin - tabletková chemoterapie, užívat tablety dle
              doporučení 2x denně{' '}
              <span className="underline">
                každý den radioterapie včetně soboty a neděle.
              </span>
              <br />
              <br />
              Kapecitabin 500 mg x - 0 - x
              <br />
              Kapecitabin 150 mg x - 0 - x
            </p>
          </>
        ) : (
          <></>
        )}

        {gender === 'muz' &&
        (chemoterapie === 'konkomitantni-chemoterapie' ||
          chemoterapie === 'konkomitantni+capox' ||
          chemoterapie === 'konkomitantni+folfox') ? (
          <>
            <p className="text-md">
              <strong>Konkomitantní chemoterapie</strong>
              <br />
              Pacient bude v průběhu radioterapie užívat chemoterapii
              Kapecitabin - tabletková chemoterapie, užívat tablety dle
              doporučení 2x denně{' '}
              <span className="underline">
                každý den radioterapie včetně soboty a neděle.
              </span>
              <br />
              <br />
              Kapecitabin 500 mg x - 0 - x
              <br />
              Kapecitabin 150 mg x - 0 - x
            </p>
          </>
        ) : (
          <></>
        )}

        {chemoterapie === 'capox' || chemoterapie === 'konkomitantni+capox' ? (
          <>
            <p className="text-md">
              <strong>Chemoterapie CAPOX</strong>
              <br />
              Po skončení radioterapie bude zahájena chemoterapie v režimu
              CAPOX. Celkem je plánováno šest cyklů, každý po třech týdnech.
              <br />
              <br />
              První cyklus chemoterapie v plánu ... Chemoterapie bude aplikována
              ambulantně na stacionáři onkologické kliniky (3.patro, uzel B).{' '}
              Pacient si zavolá na tel. 224 434 745 pracovní den předem po 12té
              hodině stran přesného času aplikace.
            </p>
          </>
        ) : (
          <></>
        )}

        {chemoterapie === 'folfox' ||
        chemoterapie === 'konkomitantni+folfox' ? (
          <>
            <p className="text-md">
              <strong>Chemoterapie FOLFOX</strong>
              <br />
              Po skončení radioterapie bude zahájena chemoterapie v režimu
              FOLFOX. Celkem je plánováno devět cyklů, každý po dvou týdnech.
              <br />
              <br />
              První cyklus chemoterapie v plánu ... Chemoterapie bude aplikována
              ambulantně na stacionáři onkologické kliniky (3.patro, uzel B).{' '}
              Pacient si zavolá na tel. 224 434 745 pracovní den předem po 12té
              hodině stran přesného času aplikace.
            </p>
          </>
        ) : (
          <></>
        )}

        {chemoterapie !== 'bez-chemoterapie' ? (
          <>
            <p className="text-md underline">Při nevolnosti:</p>
            <ul className="list-disc pl-4">
              <li className="text-md">
                Degan 10mg tbl. max 3/den, CAVE: neužívat při průjmu
              </li>
              <li className="text-md">
                Novetron tbl 1 tbl. pod jazyk, vycucat, max 2/den, CAVE:
                způsobuje zácpu
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}

        {odstup === 'standardni' ? (
          <>
            <p className="text-md">
              Operace bude naplánována 6-8 týdnů po ukončení neoadjuvance. Před
              výkonem budou provedena restagingová vyšetření.
            </p>
          </>
        ) : (
          <></>
        )}

        {odstup === 'kratky' ? (
          <>
            <p className="text-md">
              Operace bude naplánována 2-4 týdny po ukončení neoadjuvance. Před
              výkonem budou provedena restagingová vyšetření.
            </p>
          </>
        ) : (
          <></>
        )}

        <p className="text-md underline">Doporučení během radioterapie:</p>
        <p className="text-md">
          <strong>Příprava na ozařování a plánovací CT:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li className="text-md">
            30 minut před plánovacím CT a každým ozařováním se{' '}
            <strong>vymočte</strong>, poté{' '}
            <strong>vypijte cca 500 ml vody (půl litru)</strong>.
          </li>
          <li className="text-md">
            Od této chvíle <strong>nechoďte na toaletu</strong>, aby močový
            měchýř zůstal naplněný.
          </li>
        </ul>
        <p className="text-md">
          <strong>Strava během ozařování:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li className="text-md">
            Dodržujte <strong>šetřící dietu</strong> - jezte častěji menší
            porce, pijte alespoň <strong>1,5-2 l tekutin denně</strong>.
          </li>
          <li className="text-md">
            <strong>Nevhodné potraviny:</strong> nadýmavá zelenina, luštěniny,
            tučná a smažená jídla, celozrnné výrobky, syrová zelenina a ovoce se
            slupkou, sladkosti, alkohol, perlivé nápoje.
          </li>
        </ul>
        <p className="text-md">
          <strong>Péče o kůži v ozařované oblasti:</strong>
        </p>
        <ul className="list-disc pl-4">
          <li className="text-md">
            Ozařovanou oblast <strong>myjte jemně vlažnou vodou</strong>, bez
            parfémovaných přípravků.
          </li>
          <li className="text-md">
            <strong>Kůži netřete</strong>, pouze lehce osušte.
          </li>
          <li className="text-md">
            Noste <strong>volné bavlněné prádlo</strong>, chraňte kůži před
            sluncem a teplem.
          </li>
          <li className="text-md">
            <strong>Nepoužívejte krémy ani masti</strong> bez doporučení lékaře.
          </li>
        </ul>
      </div>
    </>
  );
}

export default RektumResults;
