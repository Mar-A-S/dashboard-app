import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String, required: true },
  hireDate: { type: Date, required: true }
});

const Employee = model('Employee', employeeSchema);
export default Employee;
