const router = require('express').Router();
const { Answer, Choice, User } = require('../../models');

//get all recorded answer instances from all users?
router.get('/', async (req, res) => {
    try {
      const allUserAnswers = await Answer.findAll({
        include: [
            {
                model: Choice
            },
            { 
                model: User,
                attributes: { 
                    exclude: ['password']
                }
            }
        ]
      });

      res.status(200).json(allUserAnswers);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
