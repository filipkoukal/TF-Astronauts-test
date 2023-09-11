const { sequelize } = require('./models')

async function main(){
    await sequelize.sync({force:true}) //force => přepsání schématu tabulky | alter => vytvoří novou tabulku
}

main()

// toto pozdeji smazat