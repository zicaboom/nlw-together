import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiveComplimentsService{
    async execute(user_id: string){
        const complimentsRepository = getCustomRepository(ComplimentsRepositories)

        const compliments = complimentsRepository.find({
            user_receiver: user_id
        })

        return compliments

    }
}

export { ListUserReceiveComplimentsService }