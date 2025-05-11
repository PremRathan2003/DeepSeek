import mangoose from "mangoose";

let cached = global.mangoose || {conn: null, promise:null};

export default async function connectDB() {
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise = mangoose.connect(process.env.MONGODB_URI).then((mangoose) => mangoose);

    }
    try{
        cached.conn = await cached.promise;
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error)
    }
    return cached.conn
}