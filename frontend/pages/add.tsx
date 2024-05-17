import { useRouter } from 'next/router';
import { Box, Heading } from '@chakra-ui/react';
import EmployeeForm from '../components/EmployeeForm';
import { Employee } from '../types';

const AddEmployee = () => {
  const router = useRouter();

  const handleSubmit = (data: Employee) => {
    fetch('/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(() => router.push('/'));
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Adicionar Funcionário</Heading>
      <EmployeeForm onSubmit={handleSubmit} />
    </Box>
  );
};

export default AddEmployee;
