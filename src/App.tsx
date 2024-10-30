import  { useEffect, useState } from 'react'
import ImageList from './comp/imageList';
import CardDetails from './comp/CardDetails';
export interface Image {
  id: string;
  urls: {
    raw: string;
    regular: string;
    small:string
    full: string;
  };
}
const App = () => {
  const [photos,setPhotos] = useState<Image[]>([])
  const [selctedPhoto,setSelctedPhoto] = useState<Image | null>(null)
  const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string>("")
  useEffect(() => {
    const fatchPhotos = async () => {
      try {
        const res = await fetch(
          "https://api.unsplash.com/photos/random/?client_id=NO4RsGkg25KwT3_tAE-Bohw6gxxIwIoNMk167VrDA7g&count=30"
        );
        if (!res.ok) {
          throw new Error("baddd");
        }
        const result = await res.json();

        setPhotos(result);
      } catch (error) {
        
        setError("bad request")
      }finally{
        setLoading(false)
      }
    };
    fatchPhotos();
  }, []);
  const imageClick = (img:Image) =>{
    setSelctedPhoto(img)
  }
  const closeDetails = () =>{
    setSelctedPhoto(null)
  }
  return (
    <div>
      {loading ?(
      <p>loading...</p>
      ):error ? (<p>{error}</p>) :(
        <>
        <ImageList images={photos} imageClick={imageClick}/>
        {selctedPhoto &&
        <CardDetails img={selctedPhoto} closeDet={closeDetails} />} </>
      ) }
    </div>
  )
}

export default App

