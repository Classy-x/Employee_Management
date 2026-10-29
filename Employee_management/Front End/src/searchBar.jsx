export default function SearchAndFilter({ search, onSearchChange, department, onDepartmentChange }) {
    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{
                    flex: 1,
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <select
                value={department}
                onChange={(e) => onDepartmentChange(e.target.value)}
                style={{
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                }}
            >
                <option value="ALL">All Departments</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
            </select>
        </div>
    );
}