const express = require('express')
const { PrismaClient } = require('@prisma/client')

const router = express.Router()

const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  res.json(await prisma.pet.findMany())
})

module.exports = app => app.use('/pets', router)