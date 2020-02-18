var orm = require("../config/orm");

var burger = {
    allBurgers: function(callback) {
        orm.all("*", "burger", function(result) {
            callback(result);
        });
    },
    create: function(colVal, callback) {
        orm.create("burger", colVal, function(result) {
            callback(result);
        });
    },
    update: function(deVal, idVal, callback) {
        orm.update("burger", deVal, idVal, function(result) {
            callback(result);
        });
    },
    delete: function(colVal, callback) {
        orm.delete("burger", [colVal], function(result) {
            callback(result);
        })
    }
}

module.exports = burger;