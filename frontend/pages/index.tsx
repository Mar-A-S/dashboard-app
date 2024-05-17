import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import EmployeeTable from '../components/EmployeeTable';
import { Employee } from '../types';

const Home = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data));
  }, []);

  const handleEdit = (id: string) => {
    router.push(`/edit/${id}`);
  };

  const handleDelete = (id: string) => {
    fetch(`/api/employees/${id}`, { method: 'DELETE' })
      .then(() => setEmployees(employees.filter(employee => employee._id !== id)));
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.position.toLowerCase().includes(search.toLowerCase()) ||
    employee.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={5}>
      <Heading mb={5}>Dashboard de Funcionários</Heading>
      <Input
        placeholder="Buscar funcionário..."
        mb={5}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button mb={5} onClick={() => router.push('/add')}>Adicionar Funcionário</Button>
      <EmployeeTable employees={filteredEmployees} onEdit={handleEdit} onDelete={handleDelete} />
    </Box>
  );
};

export default Home;
