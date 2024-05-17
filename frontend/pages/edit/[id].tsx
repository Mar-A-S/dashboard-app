import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Heading } from '@chakra-ui/react';
import EmployeeForm from '../../components/EmployeeForm';
import { Employee } from '../../types';
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const EditEmployee = () => {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`${backendUrl}/api/employees/${id}`)
        .then(response => response.json())
        .then(data => setEmployee(data));
    }
  }, [id]);

  const handleSubmit = (data: Employee) => {
    fetch(`${backendUrl}/api/employees/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => router.push('/'));
  };

  if (!employee) return <p>Carregando...</p>;

  return (
    <Box p={5}>
      <Heading mb={5}>Editar Funcionário</Heading>
      <EmployeeForm initialData={employee} onSubmit={handleSubmit} />
    </Box>
  );
};

export default EditEmployee;
