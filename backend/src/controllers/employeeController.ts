import { Request, Response } from 'express';
import Employee from '../models/Employee';

// Get all employees
export const getAllEmployees = async (req: Request, res: Response) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single employee by ID
export const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new employee
export const createEmployee = async (req: Request, res: Response) => {
  const employee = new Employee(req.body);
  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an employee
export const updateEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an employee
export const deleteEmployee = async (req: Request, res: Response) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (employee == null) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
