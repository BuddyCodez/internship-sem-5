import React from 'react'

const Gallery = () => {
const imageUrls = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/250/350",
  "https://picsum.photos/300/400",
  "https://picsum.photos/350/450",
  "https://picsum.photos/400/500",
  "https://picsum.photos/450/550",
  "https://picsum.photos/500/600",
  "https://picsum.photos/550/650",
  "https://picsum.photos/600/700",
  "https://picsum.photos/650/750"
];
  return (
      <>
          <div class="hero min-h-screen bg-base-200 p-10 my" id='Gallery'>
              <div className='w-full flex flex-col justify-center items-center gap-4 mt-7'>
                  <h1 className='text-3xl fontC text-white font-bold'>Gallery</h1>
              <div className='flex flex-wrap justify-center gap-2'>
                  {imageUrls.map((url, index) => (
                      <div style={{ width: "250px"}} className='Img' key={index}>
                          <img src={url} alt='gallery' className='w-full h-full object-cover' />
                      </div>
                    ))}
              </div>
                    </div>
              </div>
        </>
  )
}

export default Gallery