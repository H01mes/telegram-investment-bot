import * as api from 'telegraf'
import { addInvestor } from '../helpers/invest'

export default class InvestMessage {
  public static async send(ctx: api.ContextMessageUpdate): Promise<void> {
    let chatId = ctx.from.id
    let username = ctx.from.username
    let fullName = ctx.from.first_name
    
    // Составляем имя в зависимости от наличия фамилии
    if (ctx.from.last_name !== undefined) {
      fullName = `${ctx.from.first_name} ${ctx.from.last_name}`
    }
    
    await addInvestor(chatId, username, fullName)
    
    // Вывод заготовленного текста с инфой куда присылать деньги + уникальный идентификатор платежа paymentId
    
    await ctx.reply('Функция в разработке')
  }
}