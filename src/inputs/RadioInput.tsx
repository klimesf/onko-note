import { Field, Input, Label, Radio, RadioGroup } from '@headlessui/react';
import type { Dispatch, SetStateAction } from 'react';
import type InputOption from './InputOption';

export default function RadioInput(props: {
  label: string;
  options: InputOption[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  otherValue?: string;
  setOtherValue?: Dispatch<SetStateAction<string>>;
}) {
  const { label, options, value, setValue, otherValue, setOtherValue } = props;

  return (
    <Field>
      <Label className="text-sm/6 font-medium text-gray-900">{label}</Label>
      <RadioGroup value={value} onChange={setValue} className="mt-6 space-y-2">
        {options.map((opt) => (
          <Radio
            key={opt.value}
            value={opt.value}
            className="group flex items-center gap-x-3 rounded-md border border-gray-300 bg-white p-2 text-gray-900 data-[checked]:border-indigo-600 data-[checked]:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span
              aria-hidden
              className="size-4 rounded-full border border-gray-300 bg-white group-data-[checked]:border-indigo-600 group-data-[checked]:bg-indigo-600"
            />
            <span className="block text-sm/6 font-normal text-gray-900">
              {opt.label}
            </span>
            {opt.isOther && setOtherValue ? (
              <>
                <Input
                  id="histologie-jine"
                  name="histologie-jine"
                  type="text"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-100 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </>
            ) : (
              <></>
            )}
          </Radio>
        ))}
      </RadioGroup>
    </Field>
  );
}
