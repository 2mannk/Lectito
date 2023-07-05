import Image from "next/image"
import paris from '../../public/img_paris.jpg'

export default function Item() {
  return (
    <div class='relative w-200 h-fit flex-col flex-nowrap bg-white rounded-lg'>
      <Image alt="test image" src={paris} class='rounded-t-lg h-200 w-200' />
      <div class='bg-white w-full h-100'>
        <div class='font-bold'>What is Lorem Ipsum?</div>
        <div class=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </div>
      </div>
    </div>
  )
}