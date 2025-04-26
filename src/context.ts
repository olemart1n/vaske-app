import { createContextId } from "@builder.io/qwik";
import type { Bus } from "./bus-list";

interface BusContext {
  all: Bus[];
  filtered: Bus[];
}
export const busContext = createContextId<BusContext>("busContext");
