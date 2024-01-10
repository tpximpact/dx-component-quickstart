import React, { ReactElement, ReactNode, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.scss';
import '../Card/Card.scss';

export interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps): ReactElement {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <ul className="embla__container">
        {React.Children.map(children, (child) => (
            <>{child}</>
        ))}
      </ul>
    </div>
  );
}
