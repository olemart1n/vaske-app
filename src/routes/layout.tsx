import {
  component$,
  Slot,
  useSignal,
  useStore,
  useContextProvider,
  useContext,
} from "@builder.io/qwik";
import { Link, useLocation, type RequestHandler } from "@builder.io/qwik-city";
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
  const loc = useLocation();
  console.log(loc.url.pathname);
  const busList = useStore({ all: list, filtered: list });
  useContextProvider(busContext, busList);
  const context = useContext(busContext, busList);
  const isFilter = useSignal(false);

  return (
    <>
      <header class="fixed flex w-full bg-white p-1">
        <a
          href="/"
          class={
            "my-auto h-fit text-sm " + (loc.url.pathname === "/" && "underline")
          }
        >
          Vaskeliste
        </a>
        <span class="mx-2 text-xl text-slate-200">|</span>
        <Link
          href="/pågående-vasker"
          class={
            "my-auto h-fit text-sm " +
            (loc.url.pathname === "/p%C3%A5g%C3%A5ende-vasker/" && "underline")
          }
        >
          Pågående vasker
        </Link>

        <Button
          class={"ms-auto " + (isFilter.value ? "border-2" : "border")}
          size="sm"
          onClick$={() => {
            context.filtered = [];
            isFilter.value = !isFilter.value;
          }}
        >
          Filter
        </Button>

        <Filter isFilter={isFilter} />
      </header>

      <main class="bg-slate-100 p-3">
        <div class="h-8"></div>
        <Slot />
      </main>
    </>
  );
});
