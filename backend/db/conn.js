import mongoose from "mongoose";

async function main(){
    //await mongoose.connect("mongodb://localhost::27017/ToDo");
    await mongoose.connect("mongodb://127.0.0.1:27012/ToDo");

    console.log("Conectou MongoDB");
}
main.catch((err)=>{console.log("Erro na conexão com o Banco: " + err)})
export default mongoose;