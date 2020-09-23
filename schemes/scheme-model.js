const db = require("../data/db-config.js");

function find() {
    return db("users");
}

function findById() {
    return db("users").where({ id }).first();
}

function add(user) {
    return db("users").insert(user, id);
}

function findPosts(id) {
    return db("posts as p")
        .join("users as u")
        .select("p.id", "u.username", "p.contents")
        .where({ id });
}

function update(id, changes) {
    return db("users").where({ id }).update(changes);
}

function remove(id) {
    return db("users").where({ id }).del();
}

module.exports = {
    find,
    add,
    findById,
    findPosts,
    update,
    remove,
};
