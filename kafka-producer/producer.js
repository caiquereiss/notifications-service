const { Kafka } = require('kafkajs')
const { randomUUID } = require('node:crypto');


async function handleKafkaProducer() {
  const kafka = new Kafka({
    clientId: 'test-kafka-producer',
    brokers: ['easy-tortoise-5648-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'ZWFzeS10b3J0b2lzZS01NjQ4JJ8Tgw8L1Z8lJa1rCWW9xkOqA0ratUPDyXP52vY',
      password: 'Lsd2J6ilRWAmcx9T-CDY0Y2knbkmxNFjqzlp9OTLQ0YAIQtniwCZwl_ahE-HtblB2NfW0g==',
    },
    ssl: true,
  })
  const producer = kafka.producer();

  await producer.connect()
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          recipientId: randomUUID(),
          content: 'Garanta aquela geladinha no precinho e ainda ganhe cashback',
          category: 'sextou',
        })
      }
    ]
  })
  await producer.disconnect()
}

handleKafkaProducer()
