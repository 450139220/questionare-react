declare interface SpecificComp {
    id: string;
    name: string;
    comp: () => JSX.Element;
}

declare type ComponentId<T extends readonly SpecificComp[]> = T[number]["id"];
