import React, { ReactElement, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Carousel.scss';

export interface CarouselProps {
  children: ReactNode;
}

export default function Carousel({ children }: CarouselProps): ReactElement {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {React.Children.map(children, (child) => (
          <div className="embla__slide">{child}</div>
        ))}
      </div>
    </div>
  );
}
