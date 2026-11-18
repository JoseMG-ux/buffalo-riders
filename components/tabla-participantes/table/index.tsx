'use client';

import { Pagination, Table } from '@heroui/react';
import { useMemo, useState } from 'react';

const columns = [
  { id: 'position', name: 'Posición' },

  { id: 'name', name: 'Nombre' },
  { id: 'category', name: 'Categoria' },
  { id: 'time', name: 'Tiempo' },
];

const users = [
  {
    id: 1,
    name: 'Kate Moore',
    position: 1,
    category: 'Rigida',
    time: '00:00:00',
  },
  {
    id: 2,
    name: 'John Smith',
    position: 2,
    category: 'Novato',
    time: '00:00:00',
  },
  {
    id: 3,
    name: 'Sara Johnson',
    position: 3,
    category: 'E-BIKE Abierta',
    time: '00:00:00',
  },
  {
    id: 4,
    name: 'Michael Brown',
    position: 4,
    category: 'Juvenil',
    time: '00:00:00',
  },
  {
    id: 6,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 7,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 8,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 9,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 10,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 11,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
  {
    id: 12,
    name: 'Emily Davis',
    position: 5,
    category: 'Downhill',
    time: '00:00:00',
  },
];

const ROWS_PER_PAGE = 10;

const RidersTable = ({ data }: { data: any }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(users.length / ROWS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * ROWS_PER_PAGE;

    return users.slice(start, start + ROWS_PER_PAGE);
  }, [page]);

  const start = (page - 1) * ROWS_PER_PAGE + 1;
  const end = Math.min(page * ROWS_PER_PAGE, users.length);

  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content
          aria-label='Table with pagination'
          className='min-w-[600px]'
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column isRowHeader={column.id === 'name'}>
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={paginatedItems}>
            {(user) => (
              <Table.Row>
                <Table.Collection items={columns}>
                  {(column) => (
                    <Table.Cell>
                      {user[column.id as keyof typeof user]}
                    </Table.Cell>
                  )}
                </Table.Collection>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
      <Table.Footer>
        <Pagination size='sm'>
          <Pagination.Summary>
            {start} a {end} de {users.length} resultados
          </Pagination.Summary>
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                onPress={() => setPage((p) => Math.max(1, p - 1))}
              >
                <Pagination.PreviousIcon />
                Anterior
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link
                  isActive={p === page}
                  onPress={() => setPage(p)}
                >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}
                onPress={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Siguiente
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
    </Table>
  );
};

export default RidersTable;
