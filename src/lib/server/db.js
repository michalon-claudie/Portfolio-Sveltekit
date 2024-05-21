import {createConnection} from 'mysql2/promise';
import {SECRET_DB_HOST} from '$env/static/private';
import {SECRET_DB_USER} from '$env/static/private';
import {SECRET_DB_PASSWORD} from '$env/static/private';
import {SECRET_DB_NAME} from '$env/static/private';

export async function connectToDatabase(){
    try{
        const connection = await createConnection({
            host: SECRET_DB_HOST,
            user: SECRET_DB_USER,
            password: SECRET_DB_PASSWORD,
            database:SECRET_DB_NAME
        })
        console.log('Connexion à la base de données réussie')
        return connection
    } catch(error){
        console.error('Erreur lors de la connection à la base de données', error)
        throw error;
    }
}