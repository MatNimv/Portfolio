import {motion} from 'framer-motion';
import { useState } from 'react';
import Header from '../atoms/texts/Header';

export const NavbarItem = ({ title, hasSub, subLinks, id, toggleNavbar }:
    {
        title: string,
        hasSub: boolean,
        subLinks: any,
        id: any,
        toggleNavbar: any
    }) => {
    

    const [isSubItemOpen, setIsSubItemOpen] = useState(false);

    function handleSubNavbar(titleid:any){
        if (isSubItemOpen) setIsSubItemOpen(false);
        else setIsSubItemOpen(true);
        
        if(titleid !== undefined){
            document.getElementById(`${id}`)!.scrollIntoView();
        }
    }

    const style = `ml-2 mr-2 p-2 pt-4 pb-4 hover:bg-blueHover rounded-md`;
    return (
        <div className={style}>
            <div className='w-full h-1/6 relative flex justify-center items-center'>
                <motion.div
                    className="w-72 z-20 flex justify-center items-center text-dark-blue bg-light-blue text-4xl pl-1 pr-1 pt-16 font-semibold relative"
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    onClick={() => {
                        {id !== undefined ? toggleNavbar() : console.log();
                        handleSubNavbar(id);
                        }
                    }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <Header text={title} text_color='dark-blue' styling='cursor-pointer' size="h2"></Header>
                </motion.div>
            </div>
        </div>
    );
};