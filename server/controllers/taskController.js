const { getTasksByUser } = require("../models/taskmodels");

const getUserTasks = async(req, res) => {
    try{
        const userId = req.user.id;
        const tasks = await getTasksByUser(userId);
        res.status(200).json(tasks);
    }catch(err){
        res.status(500).json({
            message: "Erreur serveur"
        });
    }
};

module.exports = { getUserTasks };