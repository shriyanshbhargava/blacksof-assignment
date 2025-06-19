import { CarouselCategory } from '@/lib/types/carousel';

export const carouselShowcaseData: CarouselCategory[] = [
  {
    id: 'passenger',
    title: 'Passenger vehicles',
    description: 'Revving up nonwoven innovation from interior to exterior.',
    videoSrc: '/carouselSection/PassengerAlpha01.mp4',
    bottomControlsData: [
      {
        name: 'Complete Body',
        image: '/icons/complete-body.png',
        video: '/carouselSection/CommercialAlpha01.mp4',
      },
      {
        name: 'Front',
        image: '/icons/front-body.png',
        video: '/carouselSection/PassengerFront.mp4',
      },
      {
        name: 'Cabin',
        image: '/icons/cabin.png',
        video: '/carouselSection/PassengerCabin.mp4',
      },
      {
        name: 'Trunk',
        image: '/icons/trunk.png',
        video: '/carouselSection/PassengerTrunk.mp4',
      },
      {
        name: 'Exterior',
        image: '/icons/exterior.png',
        video: '/carouselSection/PassengerExterior.mp4',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial vehicles',
    description: 'Driving efficiency and durability for commercial applications.',
    videoSrc: '/carouselSection/CommercialAlpha01.mp4',
    bottomControlsData: [
      {
        name: 'Complete Body',
        image: '/icons/commercial-body.svg',
        video: '/carouselSection/CommercialAlpha01.mp4',
      },
      {
        name: 'Front',
        image: '/icons/commercial-engine.svg',
        video: '/carouselSection/CommercialEngine.mp4',
      },
      {
        name: 'Cabin',
        image: '/icons/commercial-cabin.svg',
        video: '/carouselSection/CommercialCabin.mp4',
      },
    ],
  },
];