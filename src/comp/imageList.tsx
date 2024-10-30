
import { Image } from '../App'
import Card from './Card'
interface Props{
    images:Image[]
    imageClick:(img:Image)=> void

}
const ImageList = ({images,imageClick}:Props) => {
  return (
    <>
     <h1>Art-Gallery</h1>
    <div className='grid'>
       
      {images.map((img) => (
        <Card key={img.id} image={img} onClick={imageClick} />
      ))}
    </div>
    </>
  )
}

export default ImageList
