const express = require('express')
const path = require('path')

const controllers = {
    main: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/home.html'))
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname + '/../views/about.html'))
    }
}

module.exports = controllers;