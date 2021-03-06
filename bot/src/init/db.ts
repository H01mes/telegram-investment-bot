import mongoose from 'mongoose'
import IConfig from '../interfaces/IConfig'
import Logger from './logger'

// Config
const config: IConfig = require('../../config/config.json')

export default class DB {
  private static url: string
  
  public static connect(): void {
    // Проверка окружения и смена url базы данных
    this.url = process.env.NODE_ENV === 'production' ? config.prod.dbUrl : config.dev.dbUrl
    
    // Подключение к базе данных
    mongoose.connect(this.url, {
      useNewUrlParser: true,
      keepAlive: true,
      useCreateIndex: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1e4 // 10 seconds
    }, (err: any) => {
      if (err) {
        Logger.fatal(`XXX Возникла ошибка при подключении к MongoDB! Текст ошибки: \n${err.message}`)
        process.exit(1)     // Выход из приложения
      }
      Logger.trace('>>> База данных подключена')
    })
  }
}