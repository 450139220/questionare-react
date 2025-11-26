import { useEffect, useState } from "react";

interface TableBody {
    id: number;
    createdAt: string;
    title: string;
    questionCount: number;
    updatedAt: string;
}

export default function QuestionareTable() {
    const tableHead: string[] = [
        "Created at",
        "Title",
        "Question count",
        "Updated at",
        "Operations",
    ];

    const testTableBody: TableBody = {
        id: 1,
        createdAt: "2025-11-18 23:00",
        title: "test questionare",
        questionCount: 7,
        updatedAt: "2025-11-18 23:10",
    };
    const testTableBody1: TableBody = {
        id: 2,
        createdAt: "2025-11-18 23:00",
        title: "another test a very long name",
        questionCount: 11,
        updatedAt: "2025-11-18 23:10",
    };
    const [tableBody, setTableBody] = useState<TableBody[]>([]);
    useEffect(() => {
        // Request for the table list
        setTableBody([testTableBody, testTableBody1]);
    }, []);
    // table.thead.tr.th
    // table.tbody.tr.td
    return (
        <div className="mx-4 mt-2">
            <table className="w-full table-fixed border-y-2 border-black text-left">
                <thead className="border-b-2 border-black">
                    <tr>
                        {tableHead.map((t) => (
                            <th key={t.slice(0, 2)}>{t}</th>
                        ))}
                    </tr>
                </thead>
                <tbody
                    onClick={(e: React.MouseEvent<HTMLTableSectionElement>) => {
                        const target = e.target as HTMLElement;
                        const tr = target.closest("tr");
                        const a = target.closest("a");
                        if (!tr || !a) return;
                        console.log(tr.dataset.id, a.dataset.action);
                    }}
                >
                    {tableBody.map((t) => (
                        <tr key={t.id} data-id={t.id}>
                            <td className="truncate">{t.createdAt}</td>
                            <td className="truncate">{t.title}</td>
                            <td>{t.questionCount}</td>
                            <td className="truncate">{t.updatedAt}</td>
                            <td className="flex gap-1">
                                <a
                                    className="relative cursor-pointer text-blue-500 before:invisible before:absolute before:-top-full before:left-0 before:border before:border-gray-300 before:bg-white before:px-1 before:content-['preview'] hover:before:visible"
                                    data-action="preview"
                                >
                                    <i className="ri-eye-2-fill"></i>
                                </a>
                                <a
                                    className="relative cursor-pointer text-yellow-500 before:invisible before:absolute before:-top-full before:left-0 before:border before:border-gray-300 before:bg-white before:px-1 before:content-['edit'] hover:before:visible"
                                    data-action="edit"
                                >
                                    <i className="ri-file-edit-fill"></i>
                                </a>
                                <a
                                    className="relative cursor-pointer text-red-500 before:invisible before:absolute before:-top-full before:left-0 before:border before:border-gray-300 before:bg-white before:px-1 before:content-['delete'] hover:before:visible"
                                    data-action="delete"
                                >
                                    <i className="ri-file-close-fill"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
