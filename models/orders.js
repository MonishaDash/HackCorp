
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('orders', {
		orderNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		orderDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		requiredDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		shippedDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false
		},
		comments: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		customerNumber: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customers',
				key: 'customerNumber'
			}
		}
	},
        {
            classMethods: {
                getOrdersData: function (callback) {
                    var _Orders = this;

                    _Orders.findAll().then(function (orders) {
                        //return order
                        callback(orders);
                    }).error(function (error) {
                        console.log("Error!");
                        callback(null);
                    });
                }
            }
        });
};
