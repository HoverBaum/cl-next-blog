import Image from 'next/image'
import HendriksPortraitPicture from '../public/images/assets/Hendrik_Excellency.png'

export const PortraitHendrik = ({ className }: { className?: string }) => (
  <Image
    src={HendriksPortraitPicture}
    alt="Portrait picture of Hendrik"
    className={`border border-border dark:border-border-dark shadow-[4px_6px_0_0] shadow-primary dark:shadow-primary-dark ${className}`}
    priority
  />
)
