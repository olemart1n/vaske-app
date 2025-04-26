import {
  component$,
  useContext,
  useSignal,
  type Signal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { busContext } from "~/context";

export const NumberSearch = component$(
  ({ isFilter }: { isFilter: Signal<boolean> }) => {
    const busNumber = useSignal("8");
    const context = useContext(busContext);
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
      track(() => busNumber.value);
      if (busNumber.value.length !== 4) return;
      const bus = context.all.find(
        (bus) => bus.number === Number(busNumber.value),
      );
      if (bus) {
        context.filtered = [bus];
        isFilter.value = false;
        busNumber.value = "8";
      } else {
        busNumber.value = " - - -";
        setTimeout(() => {
          busNumber.value = "8";
        }, 200);
      }
    });
    return (
      <div class="rounded-sm p-1 outline outline-slate-800">
        <input
          type="text"
          name="bus-number"
          bind:value={busNumber}
          class="m-auto mt-2 w-20 rounded border-none bg-black px-3 text-2xl placeholder:px-2 placeholder:font-medium placeholder:text-slate-600"
        />
        <div class="m-auto mt-2 flex w-fit flex-col gap-1">
          {Array.from({ length: 10 }, (_, index) =>
            NumberButton(index, busNumber),
          )}
        </div>
      </div>
    );
  },
);

const NumberButton = (index: number, number: Signal<string>) => {
  return (
    <button
      onClick$={() => {
        number.value = number.value + index;
      }}
      class="w-8 touch-manipulation rounded bg-black text-2xl outline outline-slate-800 active:bg-slate-600"
    >
      {index}
    </button>
  );
};
