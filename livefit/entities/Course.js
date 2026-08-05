const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
    name: "Course",
    tableName: "COURSE",
    columns: {
        id: {
            type: "uuid",
            primary: true,
            generated: "uuid",
            nullable: false,
        },
        name: {
            type: "varchar",
            length: 100,
            nullable: false,
        },
        description: {
            type: "text",
            nullable: false,
        },
        start_at: {
            type: "timestamp",
            nullable: false,
        },
        end_at: {
            type: "timestamp",
            nullable: false,
        },
        max_participants: {
            type: "int",
            nullable: false,
        },
        meeting_url: {
            type: "varchar",
            length: 2048,
            nullable: true,
        },
        created_at: {
            type: "timestamp",
            createDate: true,
            nullable: false,
        },
        updated_at: {
            type: "timestamp",
            updateDate: true,
            nullable: false,
        },
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            joinColumn: {
                name: "user_id",
            },
        },
        skill: {
            type: "many-to-one",
            target: "Skill",
            joinColumn: {
                name: "skill_id",
            },
        },
    },
});
