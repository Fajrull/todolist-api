const TodoListModels = require("../../models/mongodb/scheme/TodoList");
const ReadTodoList = async (req, res, next) => {
  try {
    let getDataTodoList = await TodoListModels.find();
    console.log(getDataTodoList);
    res.send({
      message: "Successfully to get all data todo!",
      statusText: "Successfully to get all data todo!",
      statusCode: 200,
      data: getDataTodoList,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const ReadDetailTodoList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getDetailDataTodoList = await TodoListModels.findOne({ _id: id });

    if (!getDetailDataTodoList) {
      res.status(404).json({
        message: "Todo not found",
        statusText: "Todo not found",
        statusCode: 404,
      });
    } else {
      res.json({
        message: "Successfully to get detail data todo!",
        statusText: "Successfully to get detail data todo!",
        statusCode: 200,
        data: getDetailDataTodoList,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      statusText: "Internal server error",
      statusCode: 500,
    });
  }
};

const CreateTodoList = async (req, res, next) => {
  const { task } = req.body;

  try {
    let createDataPassing = {
      userId: req.tokenUser.data.user,
      task: task,
      created_date: new Date(),
      updated_date: new Date(),
    };

    let createData = await TodoListModels.create(createDataPassing);

    if (!createData) {
      res.status(400);
    } else {
      res.send({
        message: "Successfully to create data todo!",
        statusText: "Successfully to create data todo!",
        statusCode: 200,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const UpdateTodoList = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    const updateTodoListData = {
      task: task,
      updated_date: new Date(),
    };

    const updatedTodoList = await TodoListModels.findByIdAndUpdate(
      id,
      updateTodoListData,
      { new: true }
    );

    if (!updatedTodoList) {
      res.status(404).json({
        message: "Task not found",
        statusText: "Task not found",
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: "Successfully updated todo",
        statusText: "Successfully updated todo",
        statusCode: 200,
        data: updatedTodoList,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      statusText: "Internal server error",
      statusCode: 500,
    });
  }
};

const DeleteTodoList = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteTodoListData = await TodoListModels.findByIdAndDelete(id);

    if (!deleteTodoListData) {
      res.status(404).json({
        message: "Task not found",
        statusText: "Task not found",
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: "Successfully deleted todo",
        statusText: "Successfully deleted todo",
        statusCode: 200,
        data: deleteTodoListData,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
      statusText: "Internal server error",
      statusCode: 500,
    });
  }
};

const DeleteAllTodoList = async (req, res, next) => {
  try {
    let deleteAllData = await TodoListModels.deleteMany({});
    // console.log(getDataTodoList);
    res.send({
      message: "Successfully to deleted all data todo!",
      statusText: "Successfully to deleted all data todo!",
      statusCode: 200,
      data: deleteAllData,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = {
  ReadTodoList,
  ReadDetailTodoList,
  CreateTodoList,
  UpdateTodoList,
  DeleteTodoList,
  DeleteAllTodoList,
};
