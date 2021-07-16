import { MikroORM } from "@mikro-orm/core"

const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'reddit-clone',
        user: 'postgres',
        password: 'password',
        debug: process.env.NODE_ENV !== 'production',
        type: 'postgresql'
    })
    console.log("Hello World")
}

main();