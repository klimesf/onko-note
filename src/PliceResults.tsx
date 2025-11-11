type PliceResultsProps = {
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
  konkomitantniChemoterapie: string;
  konkomitantniChemoterapieJine: string;
  odbery: string;
  vysaditCilenouLecbu: string;
  kardiostimulator: string;
  kardiostimulatorKontrolaZajistena: string;
  fuzniPetCt: string;
  fuzniMri: string;
};

function PliceResults({
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
  konkomitantniChemoterapie,
  konkomitantniChemoterapieJine,
  odbery,
  vysaditCilenouLecbu,
  kardiostimulator,
  kardiostimulatorKontrolaZajistena,
  fuzniPetCt,
  fuzniMri,
}: PliceResultsProps) {
  const histologieText = histologie === 'jine' ? histologieJine : histologie;

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
          <br />
          {fuzniMri === 'ano' ? (
            <>
              Fúzní MRI:
              <br />
            </>
          ) : (
            <></>
          )}
          {fuzniPetCt === 'ano' ? (
            <>
              Fúzní PET/CT:
              <br />
            </>
          ) : (
            <></>
          )}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Diagnostický souhrn:</strong>
          <br />
          {histologieText} plic, T N M
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
          {lokalizace === 'Pravá' ? (
            <>
              <strong>
                Indikována {zamer} pro {histologieText} plic
              </strong>
              <br />
              Cílový objem: ložisko pravé plíce
            </>
          ) : (
            <></>
          )}
          {lokalizace === 'Levá' ? (
            <>
              <strong>
                Indikována {zamer} pro {histologieText} plic
              </strong>
              <br />
              Cílový objem: ložisko levé plíce
            </>
          ) : (
            <></>
          )}
          {lokalizace === 'Mediastinum' ? (
            <>
              <strong>
                Indikována {zamer} pro {histologieText} plic
              </strong>
              <br />
              Cílový objem: mediastinum
            </>
          ) : (
            <></>
          )}
          {lokalizace === 'HA-PCI' ? (
            <>
              <strong>
                Indikována HA-PCI pro {histologieText} plic
              </strong>
              <br />
              Cílový objem: kranium
            </>
          ) : (
            <></>
          )}
          <br />
          Plánovaný frakcionační režim:{' '}
          {frakcionace === 'jiné' ? frakcionaceJine : frakcionace}
          <br />
          Navrhovaná poloha a fixace: {getPolohaAFixace()}
          <br />
          Kombinace s jinými terapeutickými modalitami:{' '}
          {konkomitantniChemoterapie === 'jiné'
            ? konkomitantniChemoterapieJine
            : konkomitantniChemoterapie}
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
          {vysaditCilenouLecbu === 'ano' ? (
            <>
              V průběhu radioterapie potřeba vysadit cílenou léčbu/imunoterapii
              - ...
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
          {lokalizace === 'HA-PCI' ? (
            <>
              Rozpis užívání Memantinu (k prevenci zhoršení kognitivních funkcí
              po radioterapii): 1.týden 5 mg ráno, 2.týden 5 mg ráno a večer,
              3.týden 10 mg ráno, 5 mg večer, 4.-24.týden 10 mg ráno a 10 mg
              večer
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

export default PliceResults;
