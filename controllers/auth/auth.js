const UserModels = require("../../models/mongodb/scheme/User");
const Cryptr = require("cryptr");
const CryptrNew = new Cryptr("fj5");
const JWT = require("jsonwebtoken");

const Register = async (req, res, next) => {
  const { username, password, email } = req.body;
  try {
    let getUser = await UserModels.findOne({
      username: username,
    });

    if (getUser) {
      res.status(400).send({
        message: "Data is exists, please create another one!",
        statusCode: 400,
      });
    } else {
      let dataPassingToDB = {
        username: username,
        password: CryptrNew.encrypt(password),
        email: email,
      };

      let createData = await UserModels.create(dataPassingToDB);

      if (!createData) {
        res.status(400).send({
          message: "wrong username or password",
          statusCode: 400,
        });
      } else {
        res.send({
          message: "succesfull to create data users!",
          statusCode: 200,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

// const Login = async (req, res, next) => {
//   const getUser = await UserModels.findOne({
//     username: req.body.username,
//   });

//   if (!getUser) {
//     res.status(400).send({
//       message: "Data is not exist!",
//       statusCode: 400,
//     });
//   } else {
//     let passwordUser = CryptrNew.decrypt(getUser.password);
//     if (req.body.password !== passwordUser) {
//       res.status(400).send({
//         message: "Username or Password is wrong!",
//         statusCode: 400,
//       });
//     } else {
//       let expiredToken = Math.floor(Date.now() / 1000) + 60 * 60;
//       let createAccessToken = JWT.sign(
//         {
//           exp: expiredToken,
//           data: {
//             user: getUser.username,
//             email: getUser.email,
//             no: getUser.id,
//           },
//         },
//         "fj5"
//       );

//       let dataPassingClient = {
//         access_token: createAccessToken, // expired 1 day
//         refresh_token: createAccessToken, // refresh 1 month
//         expired_date: expiredToken,
//         username: getUser.username,
//         no: getUser.id,
//       };
//       res.status(200).send({
//         message: "Successfull to login user!",
//         statusText: "Successfull to login user!",
//         statusCode: 200,
//         data: dataPassingClient,
//       });
//     }
//   }
// };

const Login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    let getUser = await UserModels.aggregate([
      {
        $match: {
          $or: [{ username: username }, { email: username }],
        },
      },
    ]);

    if (getUser.length < 1) {
      res.status(400).send({
        message: "Data is not exists!",
        statusCode: 400,
      });
    } else {
      let passwordUser = CryptrNew.decrypt(getUser[0].password);
      if (req.body.password !== passwordUser) {
        res.status(400).send({
          message: "Username or Password is wrong!",
          statusCode: 400,
        });
      } else {
        let expiredToken = Math.floor(Date.now() / 1000) + 60 * 60;
        let createAccessToken = JWT.sign(
          {
            exp: expiredToken,
            data: {
              user: getUser[0].username,
              email: getUser[0].email,
              no: getUser[0].id,
            },
          },
          "fj5"
        );

        let dataPassingClient = {
          access_token: createAccessToken, // expired 1 day
          refresh_token: createAccessToken, // refresh 1 month
          expired_date: expiredToken,
          username: getUser[0].username,
          no: getUser[0].id,
        };
        res.status(200).send({
          message: "Successfull to login user!",
          statusText: "Successfull to login user!",
          statusCode: 200,
          data: dataPassingClient,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = {
  Register,
  Login,
};
