import { CarouselImageFlipper } from '../../molecules/CarouselImageFlipper';


export default function Certificates({ images }: { images: any[]}) {

    return (
        <div className='flex flex-col items-center '>
            <CarouselImageFlipper width={1000} height={1000} images={images} styling=""></CarouselImageFlipper>
        </div>
    )
}