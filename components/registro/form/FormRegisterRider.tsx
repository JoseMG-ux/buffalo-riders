'use client';

import {
  TextField,
  Label,
  Input,
  FieldError,
  Button,
  Card,
} from '@heroui/react';
import { Formik } from 'formik';

const initialValues = {
  name: '',
  lastName: '',
  email: '',
  category: '',
};

const FormRegisterRunner = () => {
  const onSubmit = async (request: RegisterRunnerRequest) => {
    //consulta para registar participante
  };

  return (
    <Card className='flex  flex-col gap-8 rounded-xl bg-surface p-4 shadow-sm text-left'>
      <Card.Header className='gap-2'>
        <Card.Title className='text-2xl font-bold'>
          Nuevo participante
        </Card.Title>
        <Card.Description>Agrega un Rider a la competencia</Card.Description>
      </Card.Header>
      <Card.Content className='gap-8'>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <TextField
                isRequired
                name='name'
                type='text'
              >
                <Label>Nombre</Label>
                <Input
                  id='name'
                  autoCapitalize='characters'
                  value={values.name}
                  onChange={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder='Introduce un nombre'
                />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name='lastName'
                type='text'
              >
                <Label>Apellidos</Label>
                <Input
                  id='lastName'
                  autoCapitalize='characters'
                  value={values.lastName}
                  onChange={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  placeholder='Introduce un Apellido'
                />
                <FieldError />
              </TextField>
              <TextField
                isRequired
                name='category'
                type='text'
              >
                <Label>Categoria</Label>
                <Input
                  id='category'
                  autoCapitalize='characters'
                  value={values.category}
                  onChange={handleChange('category')}
                  onBlur={handleBlur('category')}
                  placeholder='Introduce un Categoria'
                />
                <FieldError />
              </TextField>
              <TextField
                name='email'
                type='email'
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return 'Introduce un correo correcto';
                  }
                  return null;
                }}
              >
                <Label>Correo</Label>
                <Input placeholder='john@example.com' />
                <FieldError />
              </TextField>
              <div className='flex gap-2 mt-4'>
                <Button
                  fullWidth
                  type='submit'
                >
                  Crear
                </Button>
              </div>
            </>
          )}
        </Formik>
      </Card.Content>
    </Card>
  );
};

export default FormRegisterRunner;
