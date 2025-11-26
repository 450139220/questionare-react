interface OriginalComp {
    id: string; // a certain id like "selectSingle"
    label: string; // content for displaying
    component: () => JSX.Element;
}
type SpecificComp<T extends string> = OriginalComp & {
    type: T; // integrated to CompTypes
};
