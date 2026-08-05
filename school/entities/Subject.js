const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Subject",
    tableName: "SUBJECT",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
            nullable: false,
        },
        name: {
            type: "varchar",
            length: 50,
            nullable: false,
        },
    },
});
