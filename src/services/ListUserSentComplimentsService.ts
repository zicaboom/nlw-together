import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserSentComplimentsService{
    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories)

        const compliments = complimentsRepository.find({
            user_sender: user_id
        })

        return compliments

    }
}

export {ListUserSentComplimentsService}