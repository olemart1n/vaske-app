import { createContextId } from "@builder.io/qwik";
import type { Bus } from "./bus-list";

interface BusContext {
  filtered: Bus[];
}
export const busContext = createContextId<BusContext>("busContext");
