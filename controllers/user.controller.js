const { query } = require('express')
const { request, response } = require('express')

const getUsers = (req = request, res = response) => {
     // url/api/users/?name_hamilton&date=2022-11-09 -> query
  const { name, date } = req.query

  req.res.status(200).json({
    msg: 'post API - controller',
    name,
    date,
  })
}

const getUserById = (req = request, res = response) => {
   // url/api/users/25 -> segmento:el 25 entra en el id
  const id = req.params.id
  res.json({
    msg: 'usuario por id - controller',
    id,
  })
}

const createUser = (req = request, res = response) => {
  // url/api/users/ -> body: es el objeto en json
  const data = req.body

  res.status(201).json({
    msg: 'post API - controller',
    data,
  })
}

const updateUser = (req = request, res = response) => {
  const id = req.params.id
  const body = query.body
  res.json({
    msg: 'put API - controller',
    id,
  })
}

const deleteUser = (req = request, res = response) => {
  const id = req.params.id
  res.json({
    msg: 'delete API - Controller',
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
