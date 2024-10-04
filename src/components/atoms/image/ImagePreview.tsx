import React, { useEffect, useState } from 'react'

type ImagePreviewProps = {
  imageUrl: string[]
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    if (imageUrl && imageUrl.length > 0) {
      setSelectedImage(imageUrl[0])
    }
  }, [imageUrl])

  const handleChangeImg = (index: number) => {
    setSelectedImage(imageUrl[index])
  }

  if (!imageUrl || imageUrl.length === 0) {
    return <div>No images available</div>
  }

  return (
    <div>
      <div className={`grid grid-cols-5 grid-flow-row gap-3 w-full`}>
        <div className={`col-span-5`}>
          {selectedImage ? (
            <img
              className=' w-full h-80 object-fit rounded-md'
              src={selectedImage}
              alt='Selected'
            />
          ) : (
            <div>No image selected</div>
          )}
        </div>

        <div className='grid grid-cols-5 col-span-5 gap-2'>
          {imageUrl.slice(0, 5).map((_, index) => (
            <img
              key={index}
              src={imageUrl[index]}
              className='w-full h-full cursor-pointer object-contain'
              onClick={() => handleChangeImg(index)}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImagePreview
