// const express = require('express')
const axios = require('axios')
const asyncHandler = require('express-async-handler')

const URL_1 = "https://api.football-data.org/v4/competitions/DED/standings";
const URL_2 = "https://api.football-data.org/v4/competitions/DED/matches";
const URL_3 = "https://api.football-data.org/v4/competitions/DED/teams";
const URL_4 = "https://api.football-data.org/v4/competitions/DED/scorers";


const getFootballData = asyncHandler(async (req, res) => {

try {
   const headers = {
      headers: {
        "X-Auth-Token": process.env.VITE_API_FOOTBALL_KEY,
      },
    };

    //axios.all replaced with Promise.all
    const response = await Promise.all([
      axios.get(URL_1, headers),
      axios.get(URL_2, headers),
      axios.get(URL_3, headers),
      axios.get(URL_4, headers),
    ]);
   

    const allData = { standings: response[0].data, matches: response[1].data, topScorers: response[3].data, teams: response[2].data};

    return res.status(200).json(allData);
} catch (error) {
  console.log(error)
}
})

module.exports = getFootballData