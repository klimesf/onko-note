import { ChevronDownIcon } from '@heroicons/react/16/solid'

function ChemoterapieForm() {
  return (
		<form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-2">
              <label htmlFor="pohlavi" className="block text-sm/6 font-medium text-gray-900">
                Pohlaví
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="pohlavi"
                  name="pohlavi"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
									<option value="" disabled selected>Vyberte jednu z možností</option>
                  <option>Muž</option>
                  <option>Žena</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

						<div className="sm:col-span-4"></div>

            <div className="sm:col-span-3">
              <label htmlFor="typ-chemoterapie" className="block text-sm/6 font-medium text-gray-900">
                Typ chemoterapie
              </label>
              <div className="mt-2">
                <input
                  id="typ-chemoterapie"
                  name="typ-chemoterapie"
                  type="text"
									placeholder="Např. cDDP + etoposid"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="cislo-cyklu" className="block text-sm/6 font-medium text-gray-900">
                Číslo cyklu
              </label>
              <div className="mt-2">
                <input
                  id="cislo-cyklu"
                  name="cislo-cyklu"
                  type="number"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

						<div className="sm:col-span-2">
							<label htmlFor="datum-zahajeni-cyklu" className="block text-sm/6 font-medium text-gray-900">
								Datum zahájení cyklu
							</label>
							<div className="mt-2">
								<input
									id="datum-zahajeni-cyklu"
									name="datum-zahajeni-cyklu"
									type="date"
									className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<fieldset>
								<legend className="text-sm/6 font-medium text-gray-900">Inverval chemoterapie</legend>
								<div className="mt-6 space-y-2">
									<div className="flex items-center gap-x-3">
										<input
											id="1-tyden"
											name="push-notifications"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="1-tyden" className="block text-sm/6 font-normal text-gray-900">
											1 týden
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="2-tydny"
											name="push-notifications"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="2-tydny" className="block text-sm/6 font-normal text-gray-900">
											2 týdny
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="3-tydny"
											name="push-notifications"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="3-tydny" className="block text-sm/6 font-normal text-gray-900">
											3 týdny
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="4-tydny"
											name="push-notifications"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="4-tydny" className="block text-sm/6 font-normal text-gray-900">
											4 týdny
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="jine"
											name="push-notifications"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="jine" className="block text-sm/6 font-normal text-gray-900">
											Jiné
										</label>
									</div>
								</div>
							</fieldset>
						</div>

						<div className="sm:col-span-3"></div>

						<div className="sm:col-span-2">
							<label htmlFor="odbery" className="block text-sm/6 font-medium text-gray-900">
								Odběry
							</label>
							<div className="mt-2 grid grid-cols-1">
								<select
									id="odbery"
									name="odbery"
									className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								>
									<option value="" disabled selected>Vyberte jednu z možností</option>
									<option>V místě bydliště</option>
									<option>Ve FNM</option>
								</select>
								<ChevronDownIcon
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
								/>
							</div>
						</div>

						<div className="sm:col-span-4"></div>

						<div className="sm:col-span-3">
							<fieldset>
								<legend className="text-sm/6 font-medium text-gray-900">Růstové faktory</legend>
								<div className="mt-6 space-y-2">
									<div className="flex items-center gap-x-3">
										<input
											id="pelgraz"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="pelgraz" className="block text-sm/6 font-normal text-gray-900">
											Pelgraz
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="Lonquex"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="Lonquex" className="block text-sm/6 font-normal text-gray-900">
											Lonquex
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="zarzio-3x"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="zarzio-3x" className="block text-sm/6 font-normal text-gray-900">
											Zarzio 3x
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="zarzio-5x"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="zarzio-5x" className="block text-sm/6 font-normal text-gray-900">
											Zarzio 5x
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="ziextenzo"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="ziextenzo" className="block text-sm/6 font-normal text-gray-900">
											Ziextenzo
										</label>
									</div>
									<div className="flex items-center gap-x-3">
										<input
											id="bez-rustovych-faktoru"
											name="rustove-faktory"
											type="radio"
											className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
										/>
										<label htmlFor="bez-rustovych-faktoru" className="block text-sm/6 font-normal text-gray-900">
											Bez růstových faktorů
										</label>
									</div>
								</div>
							</fieldset>
						</div>

						<div className="sm:col-span-3"></div>

						<div className="sm:col-span-3">
							<fieldset>
								<legend className="text-sm/6 font-semibold text-gray-900">Antiemetika</legend>
								<div className="mt-6 space-y-2">
									<div className="flex gap-3">
										<div className="flex h-6 shrink-0 items-center">
											<div className="group grid size-4 grid-cols-1">
												<input
													id="degan"
													name="degan"
													type="checkbox"
													aria-describedby="degan-description"
													className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
												/>
												<svg
													fill="none"
													viewBox="0 0 14 14"
													className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
												>
													<path
														d="M3 8L6 11L11 3.5"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-checked:opacity-100"
													/>
													<path
														d="M3 7H11"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-indeterminate:opacity-100"
													/>
												</svg>
											</div>
										</div>
										<div className="text-sm/6">
											<label htmlFor="degan" className="font-normal text-gray-900">
												Degan
											</label>
										</div>
									</div>
									<div className="flex gap-3">
										<div className="flex h-6 shrink-0 items-center">
											<div className="group grid size-4 grid-cols-1">
												<input
													id="torecan"
													name="torecan"
													type="checkbox"
													aria-describedby="torecan-description"
													className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
												/>
												<svg
													fill="none"
													viewBox="0 0 14 14"
													className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
												>
													<path
														d="M3 8L6 11L11 3.5"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-checked:opacity-100"
													/>
													<path
														d="M3 7H11"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-indeterminate:opacity-100"
													/>
												</svg>
											</div>
										</div>
										<div className="text-sm/6">
											<label htmlFor="torecan" className="font-normal text-gray-900">
												Torecan
											</label>
										</div>
									</div>
									<div className="flex gap-3">
										<div className="flex h-6 shrink-0 items-center">
											<div className="group grid size-4 grid-cols-1">
												<input
													id="novetron"
													name="novetron"
													type="checkbox"
													aria-describedby="novetron-description"
													className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
												/>
												<svg
													fill="none"
													viewBox="0 0 14 14"
													className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
												>
													<path
														d="M3 8L6 11L11 3.5"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-checked:opacity-100"
													/>
													<path
														d="M3 7H11"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-indeterminate:opacity-100"
													/>
												</svg>
											</div>
										</div>
										<div className="text-sm/6">
											<label htmlFor="novetron" className="font-normal text-gray-900">
												Novetron
											</label>
										</div>
									</div>
									<div className="flex gap-3">
										<div className="flex h-6 shrink-0 items-center">
											<div className="group grid size-4 grid-cols-1">
												<input
													id="granisetron"
													name="granisetron"
													type="checkbox"
													aria-describedby="granisetron-description"
													className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
												/>
												<svg
													fill="none"
													viewBox="0 0 14 14"
													className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
												>
													<path
														d="M3 8L6 11L11 3.5"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-checked:opacity-100"
													/>
													<path
														d="M3 7H11"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round"
														className="opacity-0 group-has-indeterminate:opacity-100"
													/>
												</svg>
											</div>
										</div>
										<div className="text-sm/6">
											<label htmlFor="granisetron" className="font-normal text-gray-900">
												Granisetron
											</label>
										</div>
									</div>
								</div>
							</fieldset>
						</div>

						<div className="sm:col-span-3"></div>

						<div className="sm:col-span-2">
              <label htmlFor="kontrola-u-praktickeho-lekare" className="block text-sm/6 font-medium text-gray-900">
                Kontrola u praktického lékaře
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="kontrola-u-praktickeho-lekare"
                  name="kontrola-u-praktickeho-lekare"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
									<option value="" disabled selected>Vyberte jednu z možností</option>
                  <option>Ano</option>
                  <option>Ne</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

						<div className="sm:col-span-4"></div>

						<div className="sm:col-span-2">
							<label htmlFor="zpusob-dopravy" className="block text-sm/6 font-medium text-gray-900">
								Způsob dopravy
							</label>
							<div className="mt-2 grid grid-cols-1">
								<select
									id="zpusob-dopravy"
									name="zpusob-dopravy"
									className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								>
									<option value="" disabled selected>Vyberte jednu z možností</option>
									<option>Vlastní</option>
									<option>Sanita</option>
								</select>
								<ChevronDownIcon
									aria-hidden="true"
									className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
								/>
							</div>
						</div>

						<div className="sm:col-span-4"></div>

            <div className="sm:col-span-3">
              <label htmlFor="terapie" className="block text-sm/6 font-medium text-gray-900">
                Terapie
              </label>
              <div className="mt-2">
                <textarea
                  id="terapie"
                  name="terapie"
									rows={4}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                ></textarea>
              </div>
            </div>
					</div>
        </div>
			</div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Smazat
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Vygenerovat
        </button>
      </div>
    </form>
	);
}

export default ChemoterapieForm;
