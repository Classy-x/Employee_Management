const API_URL = 'http://localhost:8080/api/employee';

export const employeeService = {
  async getEmployees(search = '', department = '') {
    const params = new URLSearchParams();

    if (search && search.trim()) {
      params.append('search', search.trim());
    }

    if (department && department !== 'ALL') {
      params.append('department', department.trim());
    }

    const queryString = params.toString();
    const url = queryString ? `${API_URL}?${queryString}` : API_URL;

    const response = await fetch(url);
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to fetch employees');
    }

    return Array.isArray(result) ? result : [];
  },

  async createEmployee(data) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to create employee');
    }

    return result;
  },
};
