import { component$ } from "@builder.io/qwik";
// import { busContext } from "~/context";
import type { DocumentHead } from "@builder.io/qwik-city";
export default component$(() => {
  //   const context = useContext(busContext);
  return <>Siden for pågående vaskerr</>;
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
