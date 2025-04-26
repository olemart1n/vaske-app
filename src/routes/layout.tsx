import {
  component$,
  Slot,
  useSignal,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Filter } from "~/components/filter";
import { Button } from "~/components/ui";
import { busList as list } from "~/bus-list";
import { busContext } from "~/context";
export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const busList = useStore({ all: list, filtered: list });
  useContextProvider(busContext, busList);
  const isFilter = useSignal(false);

  return (
    <>
      <header class="fixed flex w-full flex-col bg-white p-1">
        <Button
          class="ms-auto border"
          size="sm"
          onClick$={() => {
            isFilter.value = !isFilter.value;
          }}
        >
          Filter
        </Button>
        {/* {isFilter.value && <Filter isFilter={isFilter} />} */}
        <Filter isFilter={isFilter} />
      </header>

      <main class="bg-slate-100 p-1">
        <div class="h-8"></div>
        <Slot />
      </main>
    </>
  );
});
