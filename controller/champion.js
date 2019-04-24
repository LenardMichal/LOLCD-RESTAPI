const Champion = require('../model/champion');

exports.getChampion = async (req, res, next) => {
  let name = req.params.name;
  let champion = await Champion.find({ name });
  res.status('200').json(champion);
};

exports.createChampion = async (req, res, next) => {
  try {
    let championData = {
      ...req.body.champion,
    };

    let champion = await new Champion(championData);
    let status = await champion.save();
    res.status('201').json({
      data: status,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getChampionList = async (req, res, next) => {
  let allChampions = await Champion.find({}, 'name');

  res.json(allChampions);
};
