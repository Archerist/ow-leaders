import { EntitySchema } from "typeorm"

interface BnetPlayer{
    discord_id: number,
    bnet_access_token: string,
    bnet_token_expires_in: number,
    bnet_tag: number,
    bnet_id: number,

}

const BnetPlayerEntity = new EntitySchema<BnetPlayer>({
    name:"overwatch_player",
    columns:{
        discord_id:{
            type: Number,
            primary: true
        },
        bnet_access_token:{
            type: String
        },
        bnet_token_expires_in:{
            type: Number,
        },
        bnet_tag:{
            type: String
        },
        bnet_id:{
            type: Number
        }
    }
})