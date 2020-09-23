const db = require("../data/db-config.js");

function find() {
    return db("schemes");
}

function findById() {
    return db("schemes").where({ id }).first();
}

function add(scheme) {
    return db("schemes").insert(scheme, id);
}

function findSteps(id) {
    return db("steps as s")
        .where({ id })
        .join("schemes as sc")
        .orderBy("s.step_number");
}

function update(id, changes) {
    return db("schmes").where({ id }).update(changes);
}

function remove(id) {
    return db("schemes").where({ id }).del();
}

module.exports = {
    find,
    add,
    findById,
    findSteps,
    update,
    remove,
};
