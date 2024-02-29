import Header from '../atoms/texts/Header';
import {motion} from 'framer-motion';

export const SubNavbar = ({ text, styling, id, toggleNavbar, handleSubNavbar }: 
    { 
        text: string,
        styling: string,
        id: string,
        toggleNavbar: any,
        handleSubNavbar: any
    }) => {

    const inline_styling = `w-full flex justify-center items-center`;
    
    return (
        <motion.div className={inline_styling}
                        whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                    }}
                    onClick={() => {
                        {
                            id !== undefined ? toggleNavbar() : console.log();
                            handleSubNavbar(id);
                        }
                    }}>
            <Header text={text} text_color="dark-blue" size="h5" styling={styling}></Header>
        </motion.div>
    );
}