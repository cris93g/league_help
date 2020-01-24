const { getChampInfo, getSummonerName, matchHistory, currentGame, leagueStatus } = require('../controller/automation');
module.exports = (app) => {
	app.get(`/api/get_champ_json`, getChampInfo);
	app.get(`/api/get_summoner`, getSummonerName);
	app.get(`/api/get_history`, matchHistory);
	app.get(`/api/get_game`, currentGame);
	app.get(`/api/get_status`, leagueStatus);
};
