const { Activity } = require("../db");

const postActivities  = async (req, res) => {

try {

  return res.status(200).json( 'message : anda')

} catch (error) {
  
  return res.status(500).json({ error: error.message });
  
}}
  
module.exports = postActivities ;