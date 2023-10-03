const db = require("../config/db.js")

class Todos {
    static async getTodos(req, res) {
        try { //koneksi untuk query
            const result = await db.query(`select * from todos`)

            // console.log(result, "<< result");

            // res.status(200).json(result.rows)
            res.render("home", { data: result.rows})
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    static async addTodos(req, res) {
        try { 
            const {
                title
            } = req.body
            await db.query(`insert into todos (title, checked) values ($1, $2)`, [title, false])
            // res.status(200)
            res.redirect("/")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    static async deleteTodos(req, res) {
        try {

            const { todoId } = req.params

            await db.query(`delete from todos where id = $1`, [todoId])
            
            res.end()
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = Todos