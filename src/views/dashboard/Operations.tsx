import Button from "@/components/basic/Button";

export default function Operations() {
    return (
        <div className="mx-4 mt-4 flex gap-2">
            <Button
                onClick={() => {
                    console.log("goto create");
                }}
            >
                Create
            </Button>
            <Button
                onClick={() => {
                    console.log("goto market");
                }}
            >
                Market
            </Button>
        </div>
    );
}
