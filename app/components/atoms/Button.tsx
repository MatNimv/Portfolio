import React, { MouseEventHandler } from "react";
import BodyText from "./texts/BodyText";

function Button({ text, bg_color, disabled, handleClick, href, text_color, styling }: 
    { 
        text: string, 
        bg_color: string,
        disabled: boolean,
        handleClick: () => void,
        href: string,
        text_color: string,
        styling: string,
    }) {

    const inline_styling =`bg-${bg_color} rounded-md flex p-4 ${styling} hover:bg-light-pink hover:text-dark-blue ${disabled ? ' opacity-50 cursor-not-allowed pointer-events-none ' : 'transition duration-300 ease-in-out'}`;
    
    return (
        <button onClick={() => handleClick()} className={inline_styling}>
            {href !== '' ? (
                <a href={href} target="_blank" rel="noreferrer">
                    <BodyText text={text} styling="" text_color={text_color} size="small"></BodyText>
                </a>
            ) : (
                <BodyText text={text} styling="" text_color={text_color} size="small"></BodyText>
            )}
        </button>
    );
}

export default Button;