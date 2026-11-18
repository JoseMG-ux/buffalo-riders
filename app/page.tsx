import HeroBanner from '@/components/banner';
import { title, subtitle } from '@/components/primitives';
import { Card, Label, Separator } from '@heroui/react';

export default function Home() {
  return (
    <div className='flex flex-col gap-12 pb-10'>
      <HeroBanner
        image='/images/les-gets-dh-2021-llanta.avif'
        className='h-[50vh] min-h-[420px] -mt-16'
      >
        <h1>
          <span className={title()}>BUFFALO&nbsp;</span>
          <span className={title({ color: 'yellow' })}>RIDERS</span>
        </h1>
        <div className={subtitle({ class: 'text-white/90 mt-4' })}>
          Velocidad en la bajada, control en cada curva
        </div>
        <div className={subtitle({ class: 'text-white/90' })}>
          Altura en los saltos, estilo en el aire
        </div>
      </HeroBanner>

      <section className='flex flex-col items-center justify-center gap-4'>
        <div className='flex flex-wrap gap-8 justify-center'>
          <Card className='w-[300px] gap-2'>
            <Card.Header>
              <Card.Title>
                <div className='flex gap-2 items-center'>
                  <Label className='font-bold text-3xl'>00</Label>
                  <Label className='text-base leading-none'>
                    Participantes registrados
                  </Label>
                </div>
              </Card.Title>
              <Card.Description>Lista de salida completa</Card.Description>
            </Card.Header>
          </Card>
          <Card className='w-[300px] gap-2'>
            <Card.Header>
              <Card.Title>
                <div className='flex gap-2 items-center'>
                  <Label className='font-bold text-3xl'>00</Label>
                  <Label className='text-base leading-none'>En carrera</Label>
                </div>
              </Card.Title>
              <Card.Description>Cronometros activos</Card.Description>
            </Card.Header>
          </Card>
          <Card className='w-[300px] gap-2'>
            <Card.Header>
              <Card.Title>
                <div className='flex gap-2 items-center'>
                  <Label className='font-bold text-3xl'>00</Label>
                  <Label className='text-base leading-none'>Finalizaron</Label>
                </div>
              </Card.Title>
              <Card.Description>Tiempos registrados</Card.Description>
            </Card.Header>
          </Card>
        </div>

        <Separator className='my-8' />

        <div className='inline-block max-w-xl text-center justify-center'>
          <span className={title()}>Patrocinadores</span>
        </div>
      </section>
    </div>
  );
}
