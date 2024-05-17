import { Table, Thead, Tbody, Tr, Th, Td, Button } from '@chakra-ui/react';
import { Employee } from '../types';

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees, onEdit, onDelete }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Cargo</Th>
          <Th>Departamento</Th>
          <Th>Ações</Th>
        </Tr>
      </Thead>
      <Tbody>
        {employees.map(employee => (
          <Tr key={employee._id}>
            <Td>{employee.name}</Td>
            <Td>{employee.position}</Td>
            <Td>{employee.department}</Td>
            <Td>
              <Button onClick={() => onEdit(employee._id!)} mr={2}>Editar</Button>
              <Button onClick={() => onDelete(employee._id!)}>Excluir</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default EmployeeTable;
