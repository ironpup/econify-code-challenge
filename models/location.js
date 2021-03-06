import Sequelize from 'sequelize';

export default function (sequelize) {
  const Location = sequelize.define('Location', {
    name: {
      type: Sequelize.STRING,
      unique: true
    },
    address: Sequelize.STRING,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
  })

  Location.associate = (models) => {
    Location.belongsTo(models.Organization)    
  }
}
