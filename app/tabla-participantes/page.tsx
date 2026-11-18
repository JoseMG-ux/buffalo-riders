import HeroBanner from '@/components/banner';
import { title, subtitle } from '@/components/primitives';
import TableRiders from '@/components/tabla-participantes/table';
import Image from 'next/image';

export default function RidersTablePage() {
  return (
    <div className='flex flex-col gap-12'>
      <HeroBanner
        image='/images/les-gets-dh-2021-raices.avif'
        className='h-64 md:h-96 -mt-24 md:-mt-[6.5rem]'
        align='bottom'
      >
        <h1 className='text-3xl md:text-5xl font-bold uppercase'>
          Tabla de participantes
        </h1>
        <p className='mt-2 text-base md:text-lg text-white/80'>
          Consulta los resultados de los Riders
        </p>
      </HeroBanner>

      <TableRiders data={[]} />
    </div>
  );
}
