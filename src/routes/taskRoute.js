import { Router } from "express";
import Tasks from '../model/Tasks'

//Initialization
const router = Router()

//routes
router.get('/', async (req, res) => {
  try {
    const tasks = await Tasks.find().lean()
    res.render('index', {tasks : tasks})
  } catch (error) {
    console.error(error)
  }
})

router.post('/task/add', async (req, res) => {
  try {
    const newTask = Tasks(req.body)
    await newTask.save()
    res.redirect('/')
  } catch (error) {
    console.log(error)
  }
})

export default router