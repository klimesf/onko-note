import { useRadioterapieForm } from './hooks/useRadioterapieForm';

function GynekologickeNadoryResults() {
  const {
    gender,
    zamer,
    fixace,
    fixaceJine,
    poloha,
    polohaJine,
    odbery,
    chemoterapie,
    chemoterapieJine,
    imunoterapie,
    imunoterapieJine,
    frakcionace,
    frakcionaceJine,
    brachyterapie,
  } = useRadioterapieForm();
  const frakcionaceText =
    frakcionace === 'jine' ? frakcionaceJine : frakcionace;
  const chemoterapieText =
    chemoterapie === 'jine' ? chemoterapieJine : chemoterapie;
  const imunoterapieText =
    imunoterapie === 'jine' ? imunoterapieJine : imunoterapie;

  const getPolohaAFixace = (): string => {
    if (poloha === fixace) {
      return 'Dle standardu';
    }

    const polohaText = poloha === 'jine' ? polohaJine : 'Dle standardu';

    let fixaceText = '';
    switch (fixace) {
      case 'jine':
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

  const getBrachyterapieText = (): string => {
    if (brachyterapie === 'ne' || brachyterapie === '') {
      return '';
    }

    if (
      brachyterapie ===
      'HDR vaginální brachyterapie - válec, 2x5Gy v 0,5cm od povrchu válce'
    ) {
      return 'Válec';
    }

    if (
      brachyterapie ===
      'HDR vaginální brachyterapie - ovoidy, 2x5Gy v 0,5cm od povrchu ovoidů'
    ) {
      return 'ovoidy';
    }

    return '';
  };

  const isBrachyterapieValeckOvoidy = (): boolean => {
    return (
      brachyterapie ===
        'HDR vaginální brachyterapie - válec, 2x5Gy v 0,5cm od povrchu válce' ||
      brachyterapie ===
        'HDR vaginální brachyterapie - ovoidy, 2x5Gy v 0,5cm od povrchu ovoidů'
    );
  };

  const isBrachyterapieUterovaginalni = (): boolean => {
    return (
      brachyterapie ===
      'HDR uterovaginální brachyterapie - 4x7Gy na oblast HR-CTV'
    );
  };

  const hasChemoterapie = (): boolean => {
    return chemoterapie !== 'bez chemoterapie' && chemoterapie !== '';
  };

  const hasImunoterapie = (): boolean => {
    return imunoterapie !== 'bez imunoterapie' && imunoterapie !== '';
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
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Závěr:</strong>
          <br />
          <strong>Indikována {zamer} radioterapie pro ...</strong>
          <br />
          Cílový objem: <br />
          Plánovaný frakcionační režim: {frakcionaceText}
          <br />
          Navrhovaná poloha a fixace: {getPolohaAFixace()}
          <br />
          Kombinace s jinými terapeutickými modalitami: <br />
          {isBrachyterapieValeckOvoidy() ? (
            <>
              {getBrachyterapieText()}. Indikována {brachyterapie}. První
              aplikace v plánu... , na oddělení brachyterapie, budova pro
              dospělé, uzel A, minus 3. patro.
              <br />
            </>
          ) : (
            <></>
          )}
          {isBrachyterapieUterovaginalni() ? (
            <>
              Uvag: Indikována {brachyterapie}. První aplikace v krátké celkové
              anestezii proběhne za hospitalizace na 2. lůžkové stanici
              onkologické kliniky (3.patro, uzel B). Příjem k hospitalizaci
              ....., čas příjmu bude pacientce sdělen telefonicky den předem. S
              sebou interní předoperační vyšetření, pacientka si zajistí cestou
              praktického lékaře.
              <br />
            </>
          ) : (
            <></>
          )}
          {hasChemoterapie() ? (
            <>
              Indikována konkomitantní chemoterapie v režimu: {chemoterapieText}
              <br />
              První cyklus chemoterapie v plánu ------- Chemoterapie bude
              aplikována ambulantně na stacionáři onkologické kliniky (3.patro,
              uzel B). Pacientka si zavolá na tel. 224 434 745 pracovní den
              předem po 12té hodině stran přesného času aplikace.
              <br />
            </>
          ) : (
            <></>
          )}
          {hasImunoterapie() ? (
            <>
              Indikována konkomitantní imunoterapie v režimu: {imunoterapieText}
              <br />
              První cyklus imunoterapie v plánu ------- Imunoterapie bude
              aplikována ambulantně na stacionáři onkologické kliniky (3.patro,
              uzel B). Pacientka si zavolá na tel. 224 434 745 pracovní den
              předem po 12té hodině stran přesného času aplikace.
              <br />
            </>
          ) : (
            <></>
          )}
          {hasChemoterapie() || hasImunoterapie() ? (
            <>
              Při nevolnosti:
              <br />
              • Degan 10mg tbl. max 3/den, CAVE: neužívat při průjmu
              <br />
              • Novetron tbl 1 tbl. pod jazyk, vycucat, max 2/den, CAVE:
              způsobuje zácpu
              <br />
            </>
          ) : (
            <></>
          )}
          <br />
          Podepsán informovaný souhlas. Péče o ozařovanou oblast dle doporučení
          v IS.
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
          Termín 1. frakce radioterapie bude oznámen při plánovacím CT.
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
          <br />
          <span className="underline">Doporučení během radioterapie:</span>
          <br />
          <strong>Příprava na ozařování a plánovací CT:</strong>
          <br />
          30 minut před plánovacím CT a každým ozařováním se vymočte, poté
          vypijte cca 500 ml vody (půl litru).
          <br />
          Od této chvíle nechoďte na toaletu, aby močový měchýř zůstal naplněný.
          <br />
          <strong>Strava během ozařování:</strong>
          <br />
          Dodržujte šetřící dietu – jezte častěji menší porce, pijte alespoň
          1,5–2 l tekutin denně.
          <br />
          Nevhodné potraviny: nadýmavá zelenina, luštěniny, tučná a smažená
          jídla, celozrnné výrobky, syrová zelenina a ovoce se slupkou,
          sladkosti, alkohol, perlivé nápoje.
          <br />
          <strong>Péče o kůži v ozařované oblasti:</strong>
          <br />
          Ozařovanou oblast myjte jemně vlažnou vodou, bez parfémovaných
          přípravků.
          <br />
          Kůži netřete, pouze lehce osušte.
          <br />
          Noste volné bavlněné prádlo, chraňte kůži před sluncem a teplem.
          <br />
          Nepoužívejte krémy ani masti bez doporučení lékaře.
        </p>
      </div>
    </>
  );
}

export default GynekologickeNadoryResults;
