import { createContext, useContext, useState, type ReactNode } from 'react';

function useRadioterapieFormState() {
  const [gender, setGender] = useState<string>('');
  const [osetrujici, setOsetrujici] = useState<string>('');
  const [diagnoza, setDiagnoza] = useState<string>('');
  const [histologie, setHistologie] = useState<string>('');
  const [histologieJine, setHistologieJine] = useState<string>('');
  const [lokalizace, setLokalizace] = useState<string>('');
  const [kardiostimulator, setKardiostimulator] = useState<string>('');
  const [kardiostimulatorDependentni, setKardiostimulatorDependentni] =
    useState<string>('');
  const [
    kardiostimulatorKontrolaZajistena,
    setKardiostimulatorKontrolaZajistena,
  ] = useState<string>('');
  const [konkomitantniChemoterapie, setKonkomitantniChemoterapie] =
    useState<string>('');
  const [konkomitantniChemoterapieJine, setKonkomitantniChemoterapieJine] =
    useState<string>('');
  const [vysaditCilenouLecbu, setVysaditCilenouLecbu] = useState<string>('');
  const [fuzniPetCt, setFuzniPetCt] = useState<string>('');
  const [fuzniMri, setFuzniMri] = useState<string>('');
  const [lokalizaceJine, setLokalizaceJine] = useState<string>('');
  const [chemoterapie, setChemoterapie] = useState<string>('');
  const [chemoterapieJine, setChemoterapieJine] = useState<string>('');
  const [imunoterapie, setImunoterapie] = useState<string>('');
  const [imunoterapieJine, setImunoterapieJine] = useState<string>('');
  const [odstup, setOdstup] = useState<string>('');
  const [odstupJine, setOdstupJine] = useState<string>('');
  const [fixace, setFixace] = useState<string>('');
  const [fixaceJine, setFixaceJine] = useState<string>('');
  const [poloha, setPoloha] = useState<string>('');
  const [polohaJine, setPolohaJine] = useState<string>('');
  const [bolus, setBolus] = useState<string>('');
  const [zamer, setZamer] = useState<string>('');
  const [frakcionace, setFrakcionace] = useState<string>('');
  const [frakcionaceJine, setFrakcionaceJine] = useState<string>('');
  const [odbery, setOdbery] = useState<string>('');
  const [rezim, setRezim] = useState<string>('');
  const [boost, setBoost] = useState<string>('');
  const [boostJine, setBoostJine] = useState<string>('');
  const [dibh, setDibh] = useState<string>('');
  const [rozsah, setRozsah] = useState<string>('');
  const [rozsahJine, setRozsahJine] = useState<string>('');
  const [brachyterapie, setBrachyterapie] = useState<string>('');
  const [cilovyObjem, setCilovyObjem] = useState<string>('');
  const [cilovyObjemJine, setCilovyObjemJine] = useState<string>('');
  const [fixacePoloha, setFixacePoloha] = useState<string>('');
  const [fixacePolohaJine, setFixacePolohaJine] = useState<string>('');
  const [potrebaZavedeniPEG, setPotrebaZavedeniPEG] = useState<string>('');
  const [potrebaDoplneniPETCTMR, setPotrebaDoplneniPETCTMR] =
    useState<string>('');
  const [potrebaZavedeniPICC, setPotrebaZavedeniPICC] = useState<string>('');

  return {
    gender,
    setGender,
    osetrujici,
    setOsetrujici,
    diagnoza,
    setDiagnoza,
    histologie,
    setHistologie,
    histologieJine,
    setHistologieJine,
    lokalizace,
    setLokalizace,
    kardiostimulator,
    setKardiostimulator,
    kardiostimulatorDependentni,
    setKardiostimulatorDependentni,
    kardiostimulatorKontrolaZajistena,
    setKardiostimulatorKontrolaZajistena,
    konkomitantniChemoterapie,
    setKonkomitantniChemoterapie,
    konkomitantniChemoterapieJine,
    setKonkomitantniChemoterapieJine,
    vysaditCilenouLecbu,
    setVysaditCilenouLecbu,
    fuzniPetCt,
    setFuzniPetCt,
    fuzniMri,
    setFuzniMri,
    lokalizaceJine,
    setLokalizaceJine,
    chemoterapie,
    setChemoterapie,
    chemoterapieJine,
    setChemoterapieJine,
    imunoterapie,
    setImunoterapie,
    imunoterapieJine,
    setImunoterapieJine,
    odstup,
    setOdstup,
    odstupJine,
    setOdstupJine,
    fixace,
    setFixace,
    fixaceJine,
    setFixaceJine,
    poloha,
    setPoloha,
    polohaJine,
    setPolohaJine,
    bolus,
    setBolus,
    zamer,
    setZamer,
    frakcionace,
    setFrakcionace,
    frakcionaceJine,
    setFrakcionaceJine,
    odbery,
    setOdbery,
    rezim,
    setRezim,
    boost,
    setBoost,
    boostJine,
    setBoostJine,
    dibh,
    setDibh,
    rozsah,
    setRozsah,
    rozsahJine,
    setRozsahJine,
    brachyterapie,
    setBrachyterapie,
    cilovyObjem,
    setCilovyObjem,
    cilovyObjemJine,
    setCilovyObjemJine,
    fixacePoloha,
    setFixacePoloha,
    fixacePolohaJine,
    setFixacePolohaJine,
    potrebaZavedeniPEG,
    setPotrebaZavedeniPEG,
    potrebaDoplneniPETCTMR,
    setPotrebaDoplneniPETCTMR,
    potrebaZavedeniPICC,
    setPotrebaZavedeniPICC,
  };
}

const RadioterapieFormContext = createContext<
  ReturnType<typeof useRadioterapieFormState> | undefined
>(undefined);

export function RadioterapieFormProvider({
  children,
}: {
  children: ReactNode;
}) {
  const state = useRadioterapieFormState();
  return (
    <RadioterapieFormContext.Provider value={state}>
      {children}
    </RadioterapieFormContext.Provider>
  );
}

export function useRadioterapieForm() {
  const context = useContext(RadioterapieFormContext);
  if (context === undefined) {
    throw new Error(
      'useRadioterapieForm must be used within a RadioterapieFormProvider'
    );
  }
  return context;
}
