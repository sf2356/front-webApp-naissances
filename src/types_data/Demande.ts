import type { Profile } from "./Profile"

export type Demande = {
     id: string | number,
        picture: string,
        comment: string,
        status: string,
        registered: string,
        child:Profile,
        parent: Profile,
        email: string,
        phone: string
}