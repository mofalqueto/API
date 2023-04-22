import Tarefas from "../models/tasksModels.js";


function findAll(req, res) {
  Tarefas.findAll().then((result) => res.json(result));
}

function getTask(req, res) {
  try {
      Tarefas.findByPk(req.params.id).then((result) => res.json(result));
  } catch (err){
    return console.err("Erro na busca: ", err);
  }

}

function postTask(req, res) {
  try{  Tarefas.create({
        title: req.body.title});
        return res.json({Obs: `Tarefa "${req.body.title}" criada com sucesso!`});
  } catch (err) {
        return console.err('Erro na criação', err);
  } 
}

async function putTask(req, res) {
  try { await Tarefas.update(
      {title: req.body.title },
      {where: {id: req.params.id}});
      return res.json({Obs: `A tarefa nº ${req.params.id} foi atualizada com sucesso!`});
   } catch (err) {
        return res.json({Obs: `A tarefa nº ${req.params.id} não foi atualizada`}, err);            
    }
}

async function deleteTask(req, res) {
  try { await Tarefas.destroy({
        where: { id: req.params.id }});
        return res.json({Obs: `Exclusão de tarefa de ID ${req.params.id} feita com sucesso!`});
  } catch (err) {
    return console.err({Obs: `Erro na exclusão da tarefa de ID ${req.params.id}`}, err);
}//finally {
  //if(connection != null) {
   //   connection.disconnect();
 // }
//}
}



export default { findAll, postTask, getTask, putTask, deleteTask };

