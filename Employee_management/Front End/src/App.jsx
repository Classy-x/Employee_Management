import React, { useState, useEffect } from 'react';
import EmployeeTable from './Table';
import SearchAndFilter from './searchBar';
import Form from './Form.jsx';
import { employeeService } from './servercalls/employee_api';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('HR');
  const [salary, setSalary] = useState('');
  const [search, setSearch] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('ALL');

  const fetchEmployees = async () => {
    try {
      const data = await employeeService.getEmployees(search, departmentFilter);
      setEmployees(data);
    } catch (err) {
      console.error('Error fetching employees:', err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchEmployees();
    }, 500);

    return () => clearTimeout(timer);
  }, [search, departmentFilter]);

  const handleAddEmployee = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert('Name is required');
      return;
    }
    if (!salary) {
      alert('Salary is required');
      return;
    }
    if (!department.trim()) {
      alert('Department is required');
      return;
    }

    try {
      const res = await employeeService.createEmployee({
        name: name.trim(),
        department: department.trim(),
        salary: salary,
      });

      alert(res.message || 'Employee added successfully!');
      setName('');
      setDepartment('HR');
      setSalary('');
      fetchEmployees();
    } catch (err) {
      console.error('Error creating employee:', err);
      alert(err.message || 'Server error occurred while adding employee');
    }
  };

  return (
    <div
      style={{
        maxWidth: '750px',
        margin: '30px auto',
        padding: '0 15px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>
        Employee Management
      </h2>

      <Form
        name={name}
        setName={setName}
        department={department}
        setDepartment={setDepartment}
        salary={salary}
        setSalary={setSalary}
        handleAddEmployee={handleAddEmployee}
      />

      <SearchAndFilter
        search={search}
        onSearchChange={setSearch}
        department={departmentFilter}
        onDepartmentChange={setDepartmentFilter}
      />

      <EmployeeTable employees={employees} />
    </div>
  );
}

export default App;
