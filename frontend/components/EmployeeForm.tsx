import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, Stack } from '@chakra-ui/react';
import { Employee } from '../types';

interface EmployeeFormProps {
  initialData?: Employee;
  onSubmit: (data: Employee) => void;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Employee>(initialData || {
    name: '',
    position: '',
    department: '',
    hireDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Nome</FormLabel>
          <Input name="name" value={formData.name} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Cargo</FormLabel>
          <Input name="position" value={formData.position} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Departamento</FormLabel>
          <Input name="department" value={formData.department} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Data de Admissão</FormLabel>
          <Input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} />
        </FormControl>
        <Button type="submit">Salvar</Button>
      </Stack>
    </form>
  );
};

export default EmployeeForm;
