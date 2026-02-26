import ToDo from "../models/toDo.class.js";
import {Types} from "mongoose";
import { writeFileSync } from 'node:fs';

function createDocument(content, name="Document") {
    writeFileSync(`${name}.json`, JSON.stringify(content, null, 2), 'utf8');
    console.log(name + ' created successfully');
}

export default class ToDoController{
    static async Create(req, res){
    }
}

export async function readTask(req, res){
    const {titulo, descricao, dataLimite, situacao} = req.body;
    if(!titulo, !descricao, !dataLimite, !situacao){
        res.status(422).json({message: "Todos os itens são obrigatórios"});
        return;
    }
}

export async function createTask(req, res){
    const {titulo, descricao, dataLimite, situacao} = req.body;
    console.log(typeof(req))
    console.log(typeof(res))
    createDocument(req, "Requisicao");
    createDocument(res, "Resposta");

    if(!titulo, !descricao, !dataLimite, !situacao){
        res.status(422).json({message: "Todos os itens são obrigatórios"});
        return;
    }
    const Task = new ToDo({
        titulo,
        descricao,
        dataLimite,
        situacao
    })
    try {
        const newTask = await Task.save();
        res.status(200).json({message: "Tarefa Inserida com Sucesso", newTask});
    } catch( error ) {
        res.status(500).json({message: "Problema ao inserir a tarefa", error});
    }
}

export async function updateTask(req, res){
    
}

export async function deleteTask(req, res){
    
}