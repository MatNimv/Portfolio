import Header from "../atoms/texts/Header"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import Link from "next/link"


export const Contact = () => {

    const MailTo = ({ email, subject, body, children } : {
        email: string,
        subject: string,
        body: string,
        children: any
    }) => {
        return (
            <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`} target="_blank">{children}</a>
        );
    };

    return (
        <div className="flex justify-center items-center">
            <div className=" bg-light-blue mb-24 p-6 rounded-md flex flex-col justify-center items-center w-4/5 md:w-2/5 relative z-10">
                <Header text="Is there something you want to see more of? Don’t hesitate to contact me!" size="h5" text_color="dark-blue" styling="text-center mb-3"></Header>
                <MailTo email="matilda.nimvik@gmail.com" subject="A question to Matilda Nimvik" body=""><IoMail className="w-10 h-10 md:h-12 md:w-12 text-beige my-3 hover:text-light-pink transition-all"></IoMail></MailTo>
                <Header text="Find me on my socials" size="h6" text_color="dark-blue" styling="text-center mb-4"></Header>
                <div className="w-5/6 grid grid-cols-3 grid-rows-1 lg:w-3/5">
                    <div className="w-full flex justify-center content-center">
                        <Link href="https://www.linkedin.com/in/matilda-nimvik-43757b21b/" target="_blank"><FaLinkedin className="w-10 h-10 md:h-12 md:w-12 text-beige  hover:text-light-pink transition-all"></FaLinkedin></Link>
                    </div>
                    <div className="w-full flex justify-center content-center">
                        <Link href="https://github.com/MatNimv" target="_blank"><FaGithub className="w-10 h-10 md:h-12 md:w-12 text-beige  hover:text-light-pink transition-all"></FaGithub></Link>
                    </div>
                    <div className="w-full flex justify-center content-center ">
                        <Link href="https://www.youtube.com/channel/UCtx3cfoJfckFgBBddLK5DCQ" target="_blank"><FaYoutube className="w-10 h-10 md:h-12 md:w-12 text-beige  hover:text-light-pink transition-all"></FaYoutube></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

