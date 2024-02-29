import Header from "../../atoms/texts/Header"
import BodyText from "../../atoms/texts/BodyText"
import { DotFiller } from "../../constants/DotFiller"

export function ProjectText({
    body_text_description,
    body_text_was_fun,
    body_text_was_hard,
    body_text_was_learned,
    text_color,
    styling
}: {
    body_text_description: string,
    body_text_was_fun: string,
    body_text_was_hard: string,
    body_text_was_learned: string,
    text_color: string,
    styling: string,
}) {


    let inlinestyling = `${styling}`

    return (
        <div className="flex flex-col items-center ">
            {body_text_description !== "" && <div className="w-5/6 ">
                <Header text_color={text_color} text="Description" size="h6" styling=""></Header>
                <BodyText text_color={text_color} text={body_text_description} styling="" size=""></BodyText>
            </div>}
            <DotFiller space="medium" color="" size=""></DotFiller>
            <div className="flex flex-col items-center lg:flex-row lg:w-5/6 justify-center lg:items-start">
                {body_text_was_fun !== "" && <div className="w-5/6 lg:w-full lg:mr-10 lg:flex lg:flex-col lg:items-start">
                    <Header text_color={text_color} text="What I thought was fun" size="h6" styling=""></Header>
                    <BodyText text_color={text_color} text={body_text_was_fun} styling="" size=""></BodyText>
                </div>}
                {body_text_was_hard !== "" && <div className="w-5/6 mt-5 lg:mt-0 lg:w-full lg:mr-10 lg:flex lg:flex-col lg:items-start">
                    <Header text_color={text_color} text="What I thought was hard" size="h6" styling=""></Header>
                    <BodyText text_color={text_color} text={body_text_was_hard} size="" styling=""></BodyText>
                </div>}
                {body_text_was_learned !== "" && <div className="w-5/6 mt-5 lg:mt-0 lg:w-full lg:flex lg:flex-col lg:items-start">
                    <Header text_color={text_color} text="What I learned" size="h6" styling=""></Header>
                    <BodyText text_color={text_color} text={body_text_was_learned} styling="" size=""></BodyText>
                </div>}
            </div>
            <DotFiller space="medium" color="" size=""></DotFiller>
            <div className="w-5/6">
                <Header text_color="light-pink" text="Behind the scenes" size="h6" styling=""></Header>
            </div>
        </div>
    )
}