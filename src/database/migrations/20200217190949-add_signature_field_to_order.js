'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'orders',
        'signature_id',
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'files',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true
        });
  },

  down: queryInterface => queryInterface.removeColumn('orders', 'signature_id'),
};
