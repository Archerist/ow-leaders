import { BlizzAPI, RegionIdOrName } from "blizzapi"
import cfg from "../../config.json"

class Oauth{
    clientId = cfg.blizzard_client_id
    clientSecret = cfg.blizzard_client_secret
    #authorizeURI = new URL("https://oauth.battle.net/authorize")
    #tokenURI = new URL("https://oauth.battle.net/token")
    #client : BlizzAPI | undefined

    public getClient(region:RegionIdOrName){
        if(this.#client) return this.#client

        let token

        this.#client = new BlizzAPI({
            region:region
        })

    }
}