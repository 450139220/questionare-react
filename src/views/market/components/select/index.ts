import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import { defineComponents } from "../..";

export const selectComponents = defineComponents([
    { id: "singleSelect", name: "single", comp: SingleSelect },
    { id: "multiSelect", name: "multiple", comp: MultiSelect },
] as const);
