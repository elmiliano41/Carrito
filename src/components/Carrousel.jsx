import { Carousel } from "@material-tailwind/react";
 
export default function CarouselDeals() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl ">
      <img
        src="https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        alt="image 1"
        className="h-full w-full object-cover max-h-96"
      />
      <img
        src="https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        alt="image 2"
        className="h-full w-full object-cover max-h-96"
      />
      <img
        src="https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        alt="image 3"
        className="h-full w-full object-cover max-h-96"
      />
    </Carousel>
  );
}