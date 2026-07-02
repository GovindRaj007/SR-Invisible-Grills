import serviceInvisibleGrills2 from '@/assets/service-invisible-grills-2.jpg';
import serviceInvisibleGrills3 from '@/assets/service-invisible-grills-3.jpg';
import serviceInvisibleGrills4 from '@/assets/service-invisible-grills-4.jpg';
import serviceInvisibleGrills5 from '@/assets/service-invisible-grills-5.jpg';
import serviceInvisibleGrills6 from '@/assets/service-invisible-grills-6.jpg';
import heroInvisibleGrills from '@/assets/hero-invisible-grills.jpg';
import serviceWindowGrills from '@/assets/service-window-grills.jpg';
import serviceWindowGrills2 from '@/assets/service-window-grills-2.jpg';
import serviceWindowGrills3 from '@/assets/service-window-grills-3.jpg';
import heroSafetyNets from '@/assets/hero-safety-nets.jpg';
import serviceBalconyNets2 from '@/assets/service-balcony-nets-2.jpg';
import serviceBalconyNets3 from '@/assets/service-balcony-nets-3.jpg';
import heroCeilingHangers from '@/assets/hero-ceiling-hangers.jpg';
import serviceCeilingHangers2 from '@/assets/service-ceiling-hangers-2.jpg';
import serviceCeilingHangers3 from '@/assets/service-ceiling-hangers-3.jpg';
import heroSportsNets from '@/assets/hero-sports-nets.jpg';
import servicePigeonNets from '@/assets/service-pigeon-nets.jpg';
import servicePigeonNets2 from '@/assets/service-pigeon-nets-2.jpg';
import servicePigeonNets3 from '@/assets/service-pigeon-nets-3.jpg';
import serviceMonkeyNets from '@/assets/service-monkey-nets.jpg';
import serviceMonkeyNets2 from '@/assets/service-monkey-nets-2.jpg';
import serviceDuctNets from '@/assets/service-duct-nets.jpg';
import serviceDuctNets2 from '@/assets/service-duct-nets-2.jpg';
import serviceDuctNets3 from '@/assets/service-duct-nets-3.jpg';
import serviceSportsNets2 from '@/assets/service-sports-nets-2.jpg';
import serviceSportsNets3 from '@/assets/service-sports-nets-3.jpg';
import serviceSportsNets4 from '@/assets/service-sports-nets-4.jpg';
import serviceTerraceCricket from '@/assets/service-terrace-cricket.jpg';
import serviceTerraceCricket3 from '@/assets/service-terrace-cricket-3.jpg';


export const heroImages: Record<string, string> = {
  'invisible-grills': serviceInvisibleGrills4,
  'safety-nets': heroSafetyNets,
  'ceiling-hangers': heroCeilingHangers,
  'sports-nets': heroSportsNets,
};

export const serviceImages: Record<string, string[]> = {
  'invisible-grills/installation': [heroInvisibleGrills,serviceInvisibleGrills5, serviceInvisibleGrills3],
  'invisible-grills/balconies': [serviceInvisibleGrills4, serviceInvisibleGrills3,serviceInvisibleGrills6],
  'invisible-grills/windows': [serviceWindowGrills,serviceWindowGrills2 , serviceWindowGrills3],
  'safety-nets/child-safe-balcony': [serviceBalconyNets3,heroSafetyNets, serviceBalconyNets2],
  'safety-nets/pigeon-nets': [servicePigeonNets, servicePigeonNets3, servicePigeonNets2],
  'safety-nets/monkey-nets': [serviceMonkeyNets, servicePigeonNets, serviceMonkeyNets2],
  'safety-nets/duct-area': [serviceDuctNets, serviceDuctNets2, serviceDuctNets3],
  'ceiling-hangers/installation': [serviceCeilingHangers3,heroCeilingHangers, serviceCeilingHangers2],
  'sports-nets/practice-nets': [serviceSportsNets2, serviceSportsNets3, heroSportsNets],
  'sports-nets/terrace-cricket': [serviceTerraceCricket, serviceTerraceCricket3, serviceSportsNets4],
};

export const categoryCardImages: Record<string, string> = {
  'invisible-grills': heroInvisibleGrills,
  'safety-nets': heroSafetyNets,
  'ceiling-hangers': heroCeilingHangers,
  'sports-nets': heroSportsNets,
};

export const serviceCardImages: Record<string, string> = {
  'invisible-grills/installation': serviceInvisibleGrills2,
  'invisible-grills/balconies': serviceInvisibleGrills5,
  'invisible-grills/windows': serviceWindowGrills2,
  'safety-nets/child-safe-balcony': heroSafetyNets,
  'safety-nets/pigeon-nets': servicePigeonNets,
  'safety-nets/monkey-nets': serviceMonkeyNets2,
  'safety-nets/duct-area': serviceDuctNets,
  'ceiling-hangers/installation': heroCeilingHangers,
  'sports-nets/practice-nets': heroSportsNets,
  'sports-nets/terrace-cricket': serviceTerraceCricket,
};
