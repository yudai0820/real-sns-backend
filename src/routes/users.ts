const router = require('express').Router()
const User = require('../models/User')

// CRUD
// ユーザ情報の更新
router.put('/:id', async (req: any, res: any) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      res.status(200).json('ユーザ情報が更新されました')
    } catch (err) {
      return res.status(500).json(err)
    }
  } else {
    return res.status(403).json('権限がありません')
  }
})

// ユーザ情報の削除
// ユーザ情報の取得

module.exports = router

export {}
