import "reflect-metadata";

import app from "./app";

import {AppDataSource} from './database';

async function main(){
    try {
        await AppDataSource.initialize();
        app.listen(3000, ()=> console.log("Server is running..."));
    } catch (error) {
        console.log("Server error:", error);
    }
}

main();