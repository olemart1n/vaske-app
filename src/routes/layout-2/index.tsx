import { component$ } from "@builder.io/qwik";

import type { DocumentHead } from "@builder.io/qwik-city";
import { Badge, Button } from "~/components/ui";
import { busList } from "~/bus-list";
export default component$(() => {
  // burde inneholde ( samme info )

  return (
    <div class="flex flex-wrap gap-2">
      {busList.map((buss, i) => (
        <div
          class={
            "my-1 flex w-fit gap-1 rounded border-1 p-1 " +
            (buss.status.isWashed && "bg-green-300")
          }
          key={i}
        >
          <div>
            <div class="flex items-center">
              <p class="text-l">{buss.number}</p>
            </div>
          </div>
          <div class="ml-auto flex flex-col justify-center gap-1">
            {buss.status.isInTraffic && <Badge>I trafikk</Badge>}

            {!buss.status.isWashed && !buss.status.isInTraffic && (
              <Button class="ountline-none h-fit rounded-sm bg-green-300 p-0 p-1 text-sm">
                Start vask
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Vaske app",

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
