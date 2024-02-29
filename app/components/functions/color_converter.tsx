
function color_converter({ color }: { color: string }) {

    let converted_color = ""

    switch (color) {
        case "black-blue":
            console.log("rgb(13, 30, 46)");
            break;
        case "dark-blue":
            console.log("rgb(11, 30, 73)");
            break;
        case "medium-blue":
            console.log("rgb(33, 59, 84)");
            break;
        case "light-blue":
            console.log("rgb(135, 169, 207)");
            break;
        case "light-pink":
            console.log("rgb(193, 143, 180)");
            break;
        case "beige":
            console.log("rgb(225, 203, 215)");
            break;
        default:
            console.log("No such color exists!");
            break;
        }
    return converted_color;
}

export default color_converter;