import ColumnSelection from "@/components/basic/ColumnSelection";
import { useState } from "react";
import CompList from "./CompList";
import type { AllCompId } from "./CompList";
import SelectedCompPreview from "./SelectedCompPreview";
import SelectedCompStyles from "./SelectedCompStyles";
// TODO: finish comp type
export type CompType = "select" | "text";
export default function Market() {
    // Left
    // 1. types
    // 2. content
    const compTypeOptions: CompType[] = ["select", "text"];
    const [selectedCompType, setSelectedCompType] = useState<CompType>(
        compTypeOptions[0],
    );

    // Mid
    // - preview of one selected component
    const [selectedComp, setSelectedComp] = useState<AllCompId | null>(null);

    // Right
    // 1. contents
    // 2. styles
    // Some styles are reusable
    return (
        <div className="flex justify-between">
            <div className="flex flex-row">
                <ColumnSelection
                    options={compTypeOptions}
                    value={selectedCompType}
                    onChange={(item) => {
                        setSelectedCompType(item);
                    }}
                />
                <CompList
                    selectedType={selectedCompType}
                    onClick={(compId) => {
                        setSelectedComp(compId);
                    }}
                />
            </div>
            <div>
                <SelectedCompPreview selectedComp={selectedComp} />
            </div>
            <div>
                <SelectedCompStyles />
            </div>
        </div>
    );
}

export function defineComponents<T extends SpecificComp>(components: T[]) {
    return components;
}
