import fs from 'fs';
import connection from '../../src/models/connection';

export default async function createDB() {
  try {
    const pathDB = './Trybesmith.sql';
    const fileDB = fs.readFileSync(pathDB).toString();
    const queries = fileDB.split(';').filter((query) => query.trim());
    for (let i = 0; i < queries.length; i += 1) { 
      const query = queries[i];
      await connection.query(query);
    }
    console.log('Banco criado com sucesso!');
  } catch (error) {
    console.log('Algo deu errado!', error);
  }
}

