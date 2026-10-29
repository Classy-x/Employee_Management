export default function Form({
    name,
    setName,
    department,
    setDepartment,
    salary,
    setSalary,
    handleAddEmployee,
}) {
    return (
        <form
            onSubmit={handleAddEmployee}
            style={{
                border: '1px solid #ccc',
                padding: '15px',
                marginBottom: '20px',
                borderRadius: '4px',
                backgroundColor: '#fafafa',
            }}
        >
            <h4 style={{ margin: '0 0 10px 0' }}>Add Employee</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '8px', flex: 1, minWidth: '150px' }}
                />
                <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    style={{ padding: '8px' }}
                >
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                </select>
                <input
                    type="number"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    style={{ padding: '8px', width: '130px' }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '8px 18px',
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    Add
                </button>
            </div>
        </form>
    );
}
