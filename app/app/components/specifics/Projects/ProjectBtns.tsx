import { RxCross1 } from "react-icons/rx";
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

export function ProjectBtns ({left, exit, right}: {
    left: any,
    exit: any,
    right: any
}) {


    return (
        <div className="w-full flex flex-row justify-around my-5">
            <LuArrowLeftCircle className="w-10 h-10" onClick={left}></LuArrowLeftCircle>
            <RxCross1 className="w-10 h-10" onClick={exit}></RxCross1>
            <LuArrowRightCircle className="w-10 h-10" onClick={right}></LuArrowRightCircle>
        </div>
    )
}