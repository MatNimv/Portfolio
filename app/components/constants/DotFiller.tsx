import { GoDotFill } from "react-icons/go";


export function DotFiller ({color, space, size } : {
    color: string,
    space: string,
    size: string

}) {

    let space_height = ""
    switch (space) {
        case "none":
            space_height = "my-0";
            break;
        case "small":
            space_height = "my-5";
            break;
        case "medium":
            space_height = "my-16";
            break;
        case "large":
            space_height = "my-28"
        default:
            space_height = "my-16";
            break;
        }

    return (
        <div className={`flex flex-row justify-center ${space_height}`}>
            <GoDotFill className={`text-${color} w-${size} h-${size}`}></GoDotFill>
        </div>
    )
}