import React, { useEffect, useState } from 'react'
import type { ImagePreview as ImagePreviewType } from '../../../types/Product'

type ImagePreviewProps = {
  imageUrl: string

  imagePreview?: ImagePreviewType[] | null
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageUrl,

  imagePreview
}) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl)

  useEffect(() => {
    if (imagePreview && imagePreview.length > 0) {
      setSelectedImage(imagePreview[0].img)
    }
  }, [imagePreview])

  const handleChangeImg = (img: string) => {
    setSelectedImage(img)
  }

  return (
    <div>
      <div className={` grid grid-cols-5 grid-flow-row gap-3  w-full`}>
        <div className={` bg-white col-span-5`}>
          <img
            className='h-full w-full object-contain'
            src={selectedImage}
            alt=''
          />
        </div>

        <div className='grid grid-cols-5 col-span-5 gap-2'>
          {imagePreview
            ?.slice(0, 5)
            .map((item) => (
              <img
                key={item.img}
                src={item?.img || ''}
                className='w-full h-full cursor-pointer object-contain'
                onClick={() => handleChangeImg(item?.img)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ImagePreview
