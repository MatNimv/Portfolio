const Hamburger = ({ isOpen, onClick }:
    {
        isOpen: boolean,
        onClick: () => void
    }) => {

    return (
        <div onClick={onClick} className="relative z-20 w-16 h-16 flex justify-center item-end ">
            <button className="text-dark-blue w-16 h-16 relative focus:outline-none bottom-2">
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'translate-y-2'
                            }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-1.5' : 'translate-y-4'
                            }`}
                    ></span>
                </div>
            </button>
        </div>
    );
};

export default Hamburger;