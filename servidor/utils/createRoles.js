const Role = require("../models/role.models");

async function createRoles() {
  const rolesEnum = ["User", "Subadmin", "Admin"];

  for (const roleName of rolesEnum) {
    const existingRole = await Role.findOne({ name: roleName });

    if (!existingRole) {
      await Role.create({ name: roleName });
    } else {
      console.log(`El rol "${roleName}" ya existe.`);
    }
  }

  console.log("Roles creados correctamente.");
}

module.exports = createRoles;
