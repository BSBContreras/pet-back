const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()

const prisma = new PrismaClient()

router.get('/', async (req, res) => {

  const users = await prisma.user.findMany()

  res.json(users)

})

router.post('/store', async (req, res) => {

  const createdUser = await prisma.user.create({ data: req.body })

  res.json(createdUser)

})



module.exports = app => app.use('/users', router)