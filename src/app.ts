import Discord from "./discord/client.js"
import cfg from "../config.json" assert { type: 'json'}
import API from "./api/oauth.js"
import "reflect-metadata"
Discord.login(cfg.discord_token)
API.listen(3000)