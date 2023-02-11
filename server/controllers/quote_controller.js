

// quotes.get('/', (req,res) => {

// })

const quotes = require('express').Router()
const db = require('../models')
const { Quote } = db
const { Op } = require('sequelize')


// Index - Find all Quotes
quotes.get('/', async(req,res) => {
    try{
        const foundQuotes = await quotes.findAll()
    }
    catch(error){
        res.status(500).json(error)
    }
})

// Create a Quote
quotes.post('/', async (req,res) => {
    try{
        const newQuote = await Quote.create(req.body)
        res.status(200).json({
            message: `Successfully inserted a new quote`,
            data: newQuote
        })
    }
    catch(error){
        res.status(500).json(error)
    }
})

// Update a Quote
quotes.put('/:id', async (req,res) => {
    try{
        const updateQuote = await Quote.update(req.body, {
            where:{
                quote_id: req.paramas.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateQuote} quote(s)`
        })
    }
    catch(error){
        res.status(500).json(error)
    }
})

// Delete a Quote
quotes.delete('/:id', async (req,res) => {
    try{
        const deleteQuote = await Quote.destroy({
            where: {
                quote_id: req.paramas.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deleteQuote} quote(s)`
        })
    }
    catch(error){
        res.status(500).json(error)
    }
})