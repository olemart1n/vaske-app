import {
  useVisibleTask$,
  component$,
  useSignal,
  type Signal,
  useContext,
} from "@builder.io/qwik";
import { Button } from "../ui";
import { busContext } from "~/context";
import { type Bus, slugs } from "~/bus-list";
import { NumberSearch } from "./number-search";
export const Filter = component$(
  ({ isFilter }: { isFilter: Signal<boolean> }) => {
    const context = useContext(busContext);

    const numberSearchSig = useSignal("8");
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
      track(() => numberSearchSig.value);
      if (numberSearchSig.value.length === 2) context.filtered = [];
      if (numberSearchSig.value.length !== 4) return;
      context.filtered = [];

      const number = Number(numberSearchSig.value);
      const bus = context.all.find((bus) => bus.number === Number(number));

      numberSearchSig.value = "8";
      if (bus) {
        context.filtered = [bus];
        isFilter.value = false;
      } else {
        console.log("no bus found. bus variable: ", bus);
      }
    });

    return (
      <div
        class={
          "fixed flex w-9/12 gap-2 rounded bg-slate-800 p-2 font-thin text-slate-100 transition-all duration-300" +
          (isFilter.value
            ? " translate-0 opacity-100"
            : " -translate-x-12/10 opacity-50")
        }
      >
        <div class="flex flex-col items-start gap-1">
          {slugs.map((name, index) => (
            <Button
              key={index}
              onClick$={() => {
                context.filtered = filterBusses(context.all, name);
                isFilter.value = false;
              }}
              class="h-10 border-1"
            >
              {name}
            </Button>
          ))}
        </div>
        <NumberSearch numberSearchSig={numberSearchSig} />
      </div>
    );
  },
);

const filterBusses = (busList: Bus[], slug: string) => {
  return busList.filter((bus) => bus.slug === slug);
};
