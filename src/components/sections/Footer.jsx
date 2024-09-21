import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return ( 
        <footer
            className={`h-12 flex justify-center items-center rounded-tl-3xl rounded-tr-3xl border-t ${
                theme === "dark" ? "bg-gray-900 text-slate-300 border-slate-700" : "bg-white text-black border-gray-200"
            }`}
        >
            <h5 className="text-sm flex items-center">
                <span className="text-xl mr-2">&copy;</span>
                All rights reserved by Ibrahim el Mailoudi
            </h5>
        </footer>
    );
}
 
export default Footer;
