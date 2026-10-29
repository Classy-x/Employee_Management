export default function EmployeeTable({ employees }) {
    return (
        <table
            style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '10px',
            }}
        >
            <thead>
                <tr style={{ backgroundColor: '#f2f2f2', textAlign: 'left' }}>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>S.No</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Department</th>
                    <th style={{ border: '1px solid #ddd', padding: '8px' }}>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.length === 0 ? (
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                textAlign: 'center',
                                padding: '12px',
                                border: '1px solid #ddd',
                                color: '#666',
                            }}
                        >
                            No employees found
                        </td>
                    </tr>
                ) : (
                    employees.map((emp, index) => (
                        <tr key={emp.id || index}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {index + 1}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {emp.name}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {emp.department}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                {emp.salary}
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
}