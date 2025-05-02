import {
  component$,
  Slot,
  useStore,
  useContextProvider,
} from "@builder.io/qwik";
import { Link, useLocation, type RequestHandler } from "@builder.io/qwik-city";

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
  const filteredStore = useStore({ filtered: list });
  useContextProvider(busContext, filteredStore);

  return (
    <>
      <header class="fixed flex w-full justify-evenly bg-white p-1.5 text-lg text-slate-900">
        <a
          href="/"
          class={
            "my-auto h-fit border border-transparent " +
            (loc.url.pathname === "/" && "border-b-slate-600")
          }
        >
          Vaskeliste
        </a>
        <span class="mx-2 text-xl text-slate-200">|</span>
        <Link
          href="/pågående-vasker"
          class={
            "my-auto h-fit border border-transparent " +
            (loc.url.pathname === "/p%C3%A5g%C3%A5ende-vasker/" &&
              " border-b-slate-600")
          }
        >
          Pågående vasker
        </Link>
        <span class="mx-2 text-xl text-slate-200">|</span>
        <Link
          href="/layout-2"
          class={
            "my-auto h-fit p-0.5 " +
            (loc.url.pathname === "/layout-2/" &&
              "rounded bg-slate-300 outline-1 outline-sky-300")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-table-icon lucide-table"
          >
            <path d="M12 3v18" />
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M3 15h18" />
          </svg>
        </Link>
        <span class="mx-2 text-xl text-slate-200">|</span>
        <Link
          class={
            "my-auto h-fit p-0.5 " +
            (loc.url.pathname === "/filter/" &&
              "rounded bg-slate-300 outline-1 outline-sky-300")
          }
          href="/filter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-file-search-icon lucide-file-search"
          >
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" />
            <path d="m9 18-1.5-1.5" />
            <circle cx="5" cy="14" r="3" />
          </svg>
        </Link>
      </header>

      <main class="bg-slate-100 p-3">
        <div class="h-8"></div>
        <Slot />
      </main>
    </>
  );
});
