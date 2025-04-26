import { component$, useContext } from "@builder.io/qwik";
import { busContext } from "~/context";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  const context = useContext(busContext);
  return (
    <>
      {context.filtered.map((buss, i) => (
        <div class="my-1 flex w-full rounded border-1" key={i}>
          <img
            src={
              buss.length === 12
                ? "/12m.png"
                : buss.length === 18
                  ? "/18m.png"
                  : "/metro.png"
            }
            width={70}
            height={70}
            alt={buss.length.toString() + " buss"}
          />
          <div>
            <p class="text-l">{buss.number}</p>
            <p class="font-thin">
              {buss.brand}
              <span> {buss.engine}</span>
            </p>
          </div>
        </div>
      ))}
    </>
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
