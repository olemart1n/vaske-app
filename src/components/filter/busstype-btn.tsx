import { component$ } from "@builder.io/qwik";

export const BusstypeBtn = component$(() => {
  return (
    <button class="rounded-2xl bg-yellow-600">
      12m <span class="text-xs font-thin">MAN</span>
    </button>
  );
});
