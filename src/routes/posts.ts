const router = require('express').Router()

router.get('/', (_: any, res: any) => {
  res.send('posts router')
})

module.exports = router

export {}
