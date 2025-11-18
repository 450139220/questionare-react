import ColumnSelection from "@/components/basic/ColumnSelection";
import { useState } from "react";
import CompList from "./CompList";
// TODO: finish comp type
export type CompType = "select" | "text";
export default function Market() {
    // Left
    // 1. types
    const compTypeOptions: CompType[] = ["select", "text"];
    const [selectedCompType, setSelectedCompType] = useState<CompType>(
        compTypeOptions[0],
    );
    // 2. content

    // Mid
    // - preview of one selected component

    // Right
    // - 1. contents
    // - 2. styles
    return (
        <div className="flex flex-row">
            <ColumnSelection
                options={compTypeOptions}
                value={selectedCompType}
                onChange={(item) => {
                    setSelectedCompType(item);
                }}
            />
            <CompList selectedType={selectedCompType} />
        </div>
    );
}
