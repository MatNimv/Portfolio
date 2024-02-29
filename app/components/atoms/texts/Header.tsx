import React from "react";

function Header({ text, text_color, size, styling }: 
    { 
        text: string, 
        text_color: string,
        size: string,
        styling: string,
    }) {

    let converted_size = ""

    switch (size) {
        case "h1":
            converted_size = "text-5xl lg:text-7xl xl:text-8xl";
            break;
        case "h2":
            converted_size = "text-4xl lg:text-6xl xl:text-7xl";
            break;
        case "h3":
            converted_size = "text-3xl lg:text-5xl xl:text-6xl";
            break;
        case "h4":
            converted_size = "text-2xl lg:text-4xl xl:text-5xl";
            break;
        case "h5":
            converted_size = "text-xl lg:text-3xl xl:text-4xl";
            break;
        case "h6":
            converted_size = "text-lg lg:text-2xl xl:text-3xl";
            break;
        default:
            converted_size = "text-base lg:text-xl xl:text-2xl";
            break;
        }

    const inline_styling = `text-${text_color} ${converted_size} ${styling}`;
    
    return (
        <p className={`${inline_styling} font-semibold`}>{text}</p>
    );
}

export default Header;