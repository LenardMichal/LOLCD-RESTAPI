const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const championSchema = new Schema({
  name: String,
  cost0: Array,
  cost1: Array,
  cost2: Array,
  cost3: Array,
  cooldown0: Array,
  cooldown1: Array,
  cooldown2: Array,
  cooldown3: Array,
  costType0: String,
  costType1: String,
  costType2: String,
  costType3: String,
  tags: Array,
  recharge: Array,
  disc: String,
});

const Champion = mongoose.model('Champion', championSchema);

module.exports = Champion;
