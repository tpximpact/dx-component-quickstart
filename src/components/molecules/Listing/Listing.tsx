import React, { ReactElement, ReactNode } from 'react';
import './listing.scss';

export interface ListingProps {
  children: ReactNode;
}

export default function Listing({ children }: ListingProps): ReactElement {
  return <ul className="listing">{children}</ul>;
}
