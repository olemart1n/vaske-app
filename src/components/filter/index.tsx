import { component$, type Signal, useContext } from "@builder.io/qwik";
import { Button } from "../ui";
import { busContext } from "~/context";
import { type Bus, slugs } from "~/bus-list";
import { NumberSearch } from "./number-search";
export const Filter = component$(
  ({ isFilter }: { isFilter: Signal<boolean> }) => {
    const context = useContext(busContext);
    return (
      <div
        class={
          "fixed flex flex-col rounded bg-slate-800 p-2 font-thin text-slate-100 transition-all duration-300" +
          (isFilter.value
            ? " translate-0 opacity-100"
            : " -translate-y-12/10 opacity-50")
        }
      >
        <NumberSearch isFilter={isFilter} />
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
      </div>
    );
  },
);

const filterBusses = (busList: Bus[], slug: string) => {
  return busList.filter((bus) => bus.slug === slug);
};
