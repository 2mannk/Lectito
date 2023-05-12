import Image from "next/image"
import paris from '../../public/img_paris.jpg'

export default function Item() {
  return (
    <div class='border relative w-200 h-200'>
      <Image 
        alt="test image"
        src={paris}
        // fill={true}
        // objectFit='cover'
        class='rounded-lg h-200 w-200'
      />
      <div class='bg-white w-full h-100'>
        <h3>What is Lorem Ipsum?</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic </p>
      </div>
    </div>
  )
}