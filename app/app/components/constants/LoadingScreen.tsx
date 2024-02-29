
export const LoadingScreen = ({styling } : {
    styling: string
}) => {

    return (
        <video loop autoPlay muted className={`${styling} transition-all ease-out duration-1000 fixed inset-0 h-screen w-screen backdrop-filter bg-black backdrop-blur-md object-cover  `}>
            <source src={(require('../../media/loading_lights.mp4'))} type="video/mp4"></source>
        </video>
    )
}