import { useState } from "react";

interface props {
    title: string;
    children: React.ReactNode;
}
function Accordion({ title, children }: props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-100">
            <div className="mb-1 pointer" onClick={() => setIsOpen(prevState => !prevState)}>
                {isOpen ? "v" : ">"} <b>{title}</b>
            </div>
            <hr className="mt-0 mb-1"/>
            {isOpen &&
                <>
                    <div>
                        {children}
                    </div>
                </>
            }
        </div>
    );
}

export default Accordion;