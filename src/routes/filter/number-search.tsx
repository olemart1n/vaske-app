import { component$, type Signal } from "@builder.io/qwik";

export const NumberSearch = component$(
  ({ numberSearchSig }: { numberSearchSig: Signal<string> }) => {
    return (
      <>
        <p class="m-auto mt-2 h-8 w-20 rounded border-none px-3 text-2xl shadow-md placeholder:px-2 placeholder:font-medium placeholder:text-slate-600">
          {numberSearchSig.value}
        </p>
        <div class="m-auto mt-2 flex w-fit flex-wrap gap-1.5">
          {Array.from({ length: 10 }, (_, index) => (
            <NumberButton index={index} number={numberSearchSig} key={index} />
          ))}
        </div>
      </>
    );
  },
);

const NumberButton = ({
  index,
  number,
}: {
  index: number;
  number: Signal<string>;
}) => {
  return (
    <button
      type="button"
      onClick$={() => {
        number.value = number.value + index;
      }}
      class={
        "w-8 touch-manipulation rounded-sm text-2xl outline outline-slate-500 active:bg-slate-600"
      }
    >
      {index}
    </button>
  );
};
