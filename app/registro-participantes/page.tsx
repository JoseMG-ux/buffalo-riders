import { title } from '@/components/primitives';
import FormRegisterRunner from '@/components/registro/form/FormRegisterRider';

export default function RidersTablePage() {
  return (
    <div className='flex flex-col gap-12'>
      <div>
        <h1 className={title()}>Registro de participantes</h1>
      </div>
      <FormRegisterRunner />
    </div>
  );
}
