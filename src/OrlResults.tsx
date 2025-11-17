type OrlResultsProps = {
  gender: string;
  zamer: string;
  histologie: string;
  histologieJine: string;
  cilovyObjem: string;
  cilovyObjemJine: string;
  frakcionace: string;
  frakcionaceJine: string;
  chemoterapie: string;
  chemoterapieJine: string;
  fixacePoloha: string;
  fixacePolohaJine: string;
  odbery: string;
  potrebaZavedeniPEG: string;
  potrebaDoplneniPETCTMR: string;
  potrebaZavedeniPICC: string;
};

function OrlResults({
  gender,
  zamer,
  histologie,
  histologieJine,
  cilovyObjem,
  cilovyObjemJine,
  frakcionace,
  frakcionaceJine,
  chemoterapie,
  chemoterapieJine,
  fixacePoloha,
  fixacePolohaJine,
  odbery,
  potrebaZavedeniPEG,
  potrebaDoplneniPETCTMR,
  potrebaZavedeniPICC,
}: OrlResultsProps) {
  const histologieText = histologie === 'jine' ? histologieJine : histologie;
  const cilovyObjemText =
    cilovyObjem === 'jine' ? cilovyObjemJine : cilovyObjem;
  const frakcionaceText =
    frakcionace === 'jine' ? frakcionaceJine : frakcionace;
  const chemoterapieText =
    chemoterapie === 'jine' ? chemoterapieJine : chemoterapie;
  const fixacePolohaText =
    fixacePoloha === 'jine'
      ? fixacePolohaJine
      : 'Dle standardu - na zádech, hlava a ramena fixována termoplastickou maskou';

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
          {histologieText} T N M, p16 +/-
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Status praesens:</strong>
          <br />
          Výška: Váha: PS ECOG:
          <br />
          Subjektivně:
          <br />
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
          Indikována {zamer} pro {histologieText}.
          <br />
          Cílový objem: {cilovyObjemText}
          <br />
          Plánovaný frakcionační režim: {frakcionaceText}
          <br />
          Kombinace s jinými terapeutickými modalitami: {chemoterapieText}
          <br />
          Navrhovaná poloha a fixace: {fixacePolohaText}
          <br />
          Podepsán informovaný souhlas. Péče o ozařovanou oblast a sliznice
          dutiny ústní dle doporučení v IS.
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-md">
          <strong>Doporučení:</strong>
        </p>
        {gender === 'zena' ? (
          <p className="text-md">
            Prosím evidenci o telefonické vyzvání pacientky na plánovací CT,
            zahájení RT v termínu od ...
          </p>
        ) : (
          <p className="text-md">
            Prosím evidenci o telefonické vyzvání pacienta na plánovací CT,
            zahájení RT v termínu od ...
          </p>
        )}
        <br />
        Termín 1. frakce radioterapie bude oznámen při plánovacím CT.
        <br />
        Kontroly v průběhu radioterapie 1xtýdně.
        <br />
        {odbery === 'ano' ? (
          <p className="text-md">
            Dnes provedeny krevní odběry (KO+diff a BCh + TSH a fT4). Při
            radioterapii odběry 1x týdně. <br />
          </p>
        ) : (
          <></>
        )}
        Chronická medikace bez změny. Kontroly u ambulantních specialistů jak
        zavedeno.
        <br />
        Vhodná sanace chrupu před radioterapií - potvrzení od stomatologa prosím
        přinést k plánovacímu CT vyšetření.
        <br />
        {chemoterapie === 'konkomitantně cDDP weekly (40mg/m2)' ? (
          <p className="text-md">
            <strong>Konkomitantní chemoterapie cDDP weekly:</strong>
            <br />V průběhu radioterapie bude aplikována 1x týdně chemoterapie
            nitrožilně (cisplatina). První cyklus chemoterapie v plánu ...{' '}
            <br />
            Celkem v plánu cca 6 cyklů dle tolerance. <br />
            Chemoterapie bude aplikována ambulantně na stacionáři onkologické
            kliniky (3.patro, uzel B). Pacient si zavolá na tel. 224 434 745
            pracovní den předem po 12té hodině stran přesného času aplikace.
            Informovaný souhlas s chemoterapií podepsán.
            <br />
          </p>
        ) : (
          <></>
        )}
        {chemoterapie === 'konkomitantně cDDP Q3W (100mg/m2)' ? (
          <p className="text-md">
            <strong>Konkomitantní chemoterapie cDDP Q3W:</strong>
            <br />V průběhu radioterapie bude aplikována á 3 týdny chemoterapie
            nitrožilně (cisplatina). První cyklus chemoterapie v plánu ...{' '}
            <br />
            Podání přibližně 1., 22. a 43. den RT dle tolerance. <br />
            Chemoterapie bude aplikována ambulantně na stacionáři onkologické
            kliniky (3.patro, uzel B). Pacient si zavolá na tel. 224 434 745
            pracovní den předem po 12té hodině stran přesného času aplikace.
            Informovaný souhlas s chemoterapií podepsán.
            <br />
          </p>
        ) : (
          <></>
        )}
        {chemoterapie === 'konkomitantně CBDCA weekly (1,5 AUC)' ? (
          <p className="text-md">
            <strong>Konkomitantní chemoterapie CBDCA weekly:</strong>
            <br />V průběhu radioterapie bude aplikována 1x týdně chemoterapie
            nitrožilně (karboplatina). První cyklus chemoterapie v plánu ...{' '}
            <br />
            Celkem v plánu 4-5 cyklů dle tolerance. <br />
            Chemoterapie bude aplikována ambulantně na stacionáři onkologické
            kliniky (3.patro, uzel B). Pacient si zavolá na tel. 224 434 745
            pracovní den předem po 12té hodině stran přesného času aplikace.
            Informovaný souhlas s chemoterapií podepsán.
            <br />
          </p>
        ) : (
          <></>
        )}
        {chemoterapie !== 'bez chemoterapie' && chemoterapie !== '' ? (
          <p className="text-md">
            <strong>Při nevolnosti:</strong>
            <br />
            Degan 10mg tbl. max 3/den, CAVE: neužívat při průjmu
            <br />
            Novetron tbl 1 tbl. pod jazyk, vycucat, max 2/den, CAVE: způsobuje
            zácpu
            <br />
          </p>
        ) : (
          <></>
        )}
        {potrebaZavedeniPEG === 'ano' ? (
          <p className="text-md">
            <strong>
              Doporučeno zavedení PEG (výživová sonda do žaludku).
            </strong>
            <br />
            Indikováno z důvodu předpokládané poruchy polykání a rizika
            malnutrice v průběhu radioterapie. Výkon objednán na ..., v celkové
            anestezii na Interní klinice FN Motol. <br />
            Předem hospitalizace na 2. lůžkové stanici Onkologické kliniky
            (nástup k hospitalizaci dne ... cestou příjmové ambulance - 3. patro
            uzel C). Do té doby zajistit interní předoperační vyšetření cestou
            praktického lékaře.
            <br />
          </p>
        ) : (
          <></>
        )}
        {potrebaDoplneniPETCTMR === 'ano' ? (
          <p className="text-md">
            <strong>Doplníme PET/CT/MR</strong> - objednáno na ... v PET Centru
            Nemocnice na Homolce. Dostavit se nalačno, v den vyšetření hodně pít
            neslazené tekutiny. Žádanku, kartičku pojišťovny a výsledky odběrů
            krve s sebou (urea+kreatinin).
            <br />
          </p>
        ) : (
          <></>
        )}
        {potrebaZavedeniPICC === 'ano' ? (
          <p className="text-md">
            Před zahájením chemoterapie bude zaveden PICC (centrální žilní
            katetr). <br />
            Termín zavedení PICC ... - poukaz vydán.
            <br />
          </p>
        ) : (
          <></>
        )}
        <p className="text-md underline">Doporučení během radioterapie:</p>
        <ul className="list-disc pl-4">
          <li className="text-md">
            Kůži krku promazávejte 2-3x denně (PO ozáření) doporučenými
            hydratačními krémy (viz informovaný souhlas). Ozařovanou oblast
            myjte jemně vlažnou vodou, vyvarujte se holení žiletkou, chraňte
            před sluncem.
          </li>
          <li className="text-md">
            Kloktejte a proplachujte dutinu ústní minimálně 3x denně šalvějovým
            roztokem či heřmánkovým čajem po jídle. Při bolesti lze použít
            výplachy 3-5x denně "kouzelným roztokem", pastilky Tantum Verde, či
            Algifen 30-30-30 kapek.
          </li>
          <li className="text-md">
            Dostatečná hydratace - alespoň 2l tekutin denně, zanechat kouření,
            nutná abstinence alkoholu.
          </li>
          <li className="text-md">
            Neztrácet váhu - sipping (Fresubin / Nutridrink) 3-5x denně,
            Protifar do jídla, zapisovat váhu
          </li>
        </ul>
      </div>
    </>
  );
}

export default OrlResults;
