const pool = require("../config/db.config");

exports.getEmployees = async (req, res) => {
  try {
    const { search, department } = req.query;

    let query = "SELECT * FROM emp_table";
    const conditions = [];
    const values = [];
    let paramIndex = 1;

    if (search) {
      conditions.push(
        `(name ILIKE $${paramIndex})`
      );
      values.push(`%${search.trim()}%`);
      paramIndex++;
    }

    if (department) {
      conditions.push(`department ILIKE $${paramIndex}`);
      values.push(department.trim());
      paramIndex++;
    }

    if (conditions.length > 0) {
      query += " WHERE " + conditions.join(" AND ");
    }

    query += " ORDER BY id ASC";

    const result = await pool.query(query, values);
    const employees = result.rows;

    return res.status(200).json(employees);
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error"
    });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const name = req.body.name || "";
    const salary = req.body.salary || "";
    const department = req.body.department || "";
    
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        status: false,
        message: "Name is required"
      });
    }

    if (!salary) {
      return res.status(400).json({
        status: false,
        message: "Salary is required"
      });
    }

    if (!department || typeof department !== "string" || !department.trim()) {
      return res.status(400).json({
        status: false,
        message: "Department is required"
      });
    }

    const insertQuery = `
      INSERT INTO emp_table (name, department, salary)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const queryParams = [name,department,salary ];

    const result = await pool.query(insertQuery, queryParams);

    return res.status(201).json({
      status: true,
      message: "Employee created successfully",
      data : result.rows[0]
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: "Internal server error"
    });
  }
};
