import { useNavigate, useLocation } from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const backToDashboard = () => {
        navigate("/");
    };
    const location = useLocation();

    return (
        <header className="flex h-10 items-center justify-between bg-gray-300 px-2">
            <div className="w-5">
                {location.pathname !== "/" && (
                    <i
                        className="ri-arrow-go-back-fill cursor-pointer text-center align-middle text-xl"
                        onClick={backToDashboard}
                    ></i>
                )}
            </div>
            <h1>QUESTIONARE</h1>
            <a className="cursor-pointer">
                <img
                    src="http://cham.archivemodel.cn/static/logo2D-high.PNG"
                    className="h-6 w-6 rounded-md"
                />
            </a>
        </header>
    );
}
