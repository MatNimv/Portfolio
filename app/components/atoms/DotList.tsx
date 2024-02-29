import Header from "./texts/Header"
import BodyText from "./texts/BodyText"
import Link from "next/link";
import { DotFiller } from "../constants/DotFiller";

export function DotList ({title, bg_color, text_color, items, styling, type} : {
    title: string,
    bg_color: string,
    text_color: string,
    items: any[],
    styling: string,
    type: string
}) {

    let inlinestyling = `bg-${bg_color} ${styling} w-2/5 rounded-md p-3 lg:w-1/5 flex flex-col justify-center items-center`
    if (items.length === 0){return;}
    else if (type === "linklist") {
        return (
            <div className={inlinestyling}>
                <Header text={title} size="h5" text_color={text_color} styling="text-center mb-3"></Header>
                    {items.map((item, index) => (
                        <Link href={item.link} target="_blank" rel="noopener norefferer" key={index}><BodyText styling="mb-2 no-underline hover:underline" text={item.name} text_color={text_color} size="normal"></BodyText></Link>
                    ))}
            </div>
        )
    }
    else {
        return (
            <div className={inlinestyling }>
                <Header text={title} size="h5" text_color={text_color} styling="text-center mb-3"></Header>
                {items.map((item, index) => (
                    <div key={index} className="flex flex-row flex-wrap justify-center items-center mb-3">
                        <DotFiller color="dark-blue" space="none" size="1"></DotFiller><BodyText styling="ml-1" text={item} text_color={text_color} size="normal"></BodyText>
                    </div>
                ))}
            </div>
        )
    }
}
//<li key={index} className={`text-${text_color} w-full `}></li>