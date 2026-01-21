export type CategoryProperty = 'Residential' | 'Commercial' | 'Agriculture' | 'Industrial';

export interface FilterCardProperty {
    id: number;
    category:CategoryProperty;
    img: string;
    details: string;
    details2:string;
    
}

export const properties: FilterCardProperty[] = [
  { id: 1, category: 'Commercial', img: '/assets/images/Filter/filter2.jpg', details: 'Featured',details2:'3D' },
  { id: 2, category: 'Agriculture', img: '/assets/images/Filter/filter3.jpg', details: 'Featured',details2:'3D' },
  { id: 3, category: 'Industrial', img: '/assets/images/Filter/filter1.jpg', details: 'Featured',details2:'3D' },
];

export interface CardProps {
    img: string;
    details:string;
    details2:string;
}
