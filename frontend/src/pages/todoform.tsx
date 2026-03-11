import React, { useState } from 'react';
import {useNavigate, type NavigateFunction} from 'react-router-dom';
import { createToDo } from '../api/todoapi';



export default function TodoForm(){
    const [titulo, setTitulo] = useState<String | null>(null);
    const [descricao, setDescricao] = useState<String | null>(null);
    const [dataLimite, setDataLimite] = useState<Date | null>(null);
    const [situacao, setSituacao] = useState<String | null>(null);
    const [saving, setSaving] = useState<Boolean>(false);

    //const navigate:NavigateFunction = useNavigate();

    const handleSubmit = async(e:any)=>{
        e.preventDefault()
        
        if(titulo && descricao && dataLimite && situacao){
            const obj = {
                titulo: titulo, 
                descricao: descricao, 
                dataLimite: dataLimite, 
                situacao: situacao
            }
            const json = JSON.stringify(obj)
            setSaving(true);
            const result = await createToDo(json);
            console.log(result);
            setSaving(false)
        }
        return
    }
    return (
        <form>
            <p>{saving ? "Salvando" : ""}</p>
            <h1>Criar Tarefa</h1>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" id="titulo" onChange={e => setTitulo(e.target.value)}/><br />
            <label htmlFor="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao" onChange={e => setDescricao(e.target.value)} /><br />
            <label htmlFor="dataLimite">Data Limite</label>
            <input type="date" name="dataLimite" id="dataLimite" onChange={e => {
                const data = new Date(e.target.value);
                if(!isNaN(data.getTime())){
                    setDataLimite(data);
                }
            }} /><br />
            <label htmlFor="situacao">Situação</label>
            <input type="text" name="situacao" id="situacao" onChange={e => setSituacao(e.target.value)} /><br />
            <button type="submit" onClick={handleSubmit}>Criar Tarefa</button>
        </form>
    )

}