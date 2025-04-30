import {
  useVisibleTask$,
  component$,
  useSignal,
  useContext,
} from "@builder.io/qwik";
import { Button } from "../../components/ui";
import { busContext } from "~/context";
import { type Bus, slugs, busList } from "~/bus-list";
import { NumberSearch } from "./number-search";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  const context = useContext(busContext);
  const numberSearchSig = useSignal("8");
  const nav = useNavigate();
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => numberSearchSig.value);
    if (numberSearchSig.value.length !== 4) return;
    context.filtered = [];

    const number = Number(numberSearchSig.value);
    const bus = busList.find((bus) => bus.number === Number(number));

    numberSearchSig.value = "8";
    if (bus) {
      context.filtered = [bus];
      nav("/");
    } else {
      console.log("no bus found. bus variable: ", bus);
    }
  });

  return (
    <div class="flex h-full gap-2 rounded p-2 font-thin">
      <div class="flex w-1/2 flex-col items-start gap-1 border-e-2 border-slate-600 md:w-1/3">
        {slugs.map((name, index) => (
          <Button
            key={index}
            onClick$={() => {
              context.filtered = filterBusses(busList, name);
              nav("/");
            }}
            class="h-10"
          >
            {name}
          </Button>
        ))}
      </div>
      <div class="w-1/2 rounded-sm p-1 md:w-2/3">
        <NumberSearch numberSearchSig={numberSearchSig} />
      </div>
    </div>
  );
});

const filterBusses = (busList: Bus[], slug: string) => {
  return busList.filter((bus) => bus.slug === slug);
};

export const head: DocumentHead = {
  title: "Finn buss(er)",

  meta: [
    {
      name: "Buss-vask",
      content: "vaske app",
    },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
};
