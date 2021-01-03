const AWS = require('aws-sdk')
AWS.config.update({
    region: 'us-east-1'
})
const sqs = new AWS.SQS();

(async () => {
    await sqs.sendMessage({
        //a fila so entende string
        //a mensagem é uma simulacao de uma transferencia bancaria
        MessageBody: JSON.stringify({
            conta_origem: {
                agencia: 0001,
                numero_conta: '123456-7',
            },
            conta_destino: {
                agencia: 0002,
                numero_conta: '765432-1'
            },
            valor: 3000,
            moeda: 'BRL'
        }),
        QueueUrl: 'url da fila'
    }).promise();
    console.log('mensagem enviada com sucesso!')
})();