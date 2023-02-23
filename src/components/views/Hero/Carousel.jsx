import React from 'react'
import { Carousel } from 'react-carousel-minimal';
const Carousele = () => {
    const data = [
        {
          image: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg",
          caption: "Fresh"
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/01/14/10/57/woman-1979272_960_720.jpg",
          caption: "Cooking"
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/07/24/23/04/paprika-1539491_960_720.jpg",
          caption: "Green Paprika"
        },
        {
          image: "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_960_720.jpg",
          caption: "salad"
        },
        {
          image: "https://cdn.pixabay.com/photo/2018/12/07/00/19/savoy-cabbage-3860933_960_720.jpg",
          caption: "Savoy Cabbage"
        },
        {
          image: "https://cdn.pixabay.com/photo/2019/01/08/18/19/salad-3921790_960_720.jpg",
          caption: "Nutrition"
        },
        {
          image: "https://cdn.pixabay.com/photo/2019/03/07/19/32/mozzarella-4040896_960_720.jpg",
          caption: "Juicy Tomatos"
        },
        {
          image: "https://cdn.pixabay.com/photo/2016/11/08/05/25/steak-1807532_960_720.jpg",
          caption: "Self made"
        },
        {
          image: "https://cdn.pixabay.com/photo/2018/04/13/17/12/vegetable-skewer-3317055_960_720.jpg",
          caption: "Vegetable Skewer"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
  return (
    <>
    <div>
    <Carousel
            data={data}
            time={2050}
            width="112.12rem"
            height="42.5rem"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100.87rem",
              maxHeight: "45rem",
              margin: "60px auto",
            }}
          />
    </div>
    </>
  )
}

export default Carousele;