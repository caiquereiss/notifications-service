import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from '@nestjs/microservices';


@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy {
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['easy-tortoise-5648-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'ZWFzeS10b3J0b2lzZS01NjQ4JJ8Tgw8L1Z8lJa1rCWW9xkOqA0ratUPDyXP52vY',
          password: 'Lsd2J6ilRWAmcx9T-CDY0Y2knbkmxNFjqzlp9OTLQ0YAIQtniwCZwl_ahE-HtblB2NfW0g==',
        },
        ssl: true,
      }
    });
  }
  async onModuleDestroy() {
    await this.close();
  }

}
