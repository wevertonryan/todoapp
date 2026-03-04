import React, { useState } from 'react';
import {useNavigate, type NavigateFunction} from 'react-router-dom';
import { createToDo } from '../api/todoapi';



export default function todoForm(){
    const [titulo, setTitulo] = useState<String>("");
    const [descricao, setDescricao] = useState<String>("");
    const [dataLimite, setDataLimite] = useState<Date>(new Date());
    const [situacao, setSituacao] = useState<String>("");
    const [saving, setSaving] = useState<Boolean>(false);

    const navigate:NavigateFunction = useNavigate();

    const handleSubmit = async()=>{}
    return (
        <form>
            <h1>Criar Tarefa</h1>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" />
            <label htmlFor="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao" />
        </form>
    )

}