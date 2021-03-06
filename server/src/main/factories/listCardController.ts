import { ListCardService } from "@/data/services/listAllCard";
import { MysqlcardRepository } from "@/infra/repositories/mysqlCardRepository";
import { IController } from "@/presentation/contracts/controller";
import { ListCardController } from "@/presentation/controllers/listCardController";

export const makeListCardController = (): IController => {
    const repo = new MysqlcardRepository()

    const list = new ListCardService(repo)

    return new ListCardController(list)
}