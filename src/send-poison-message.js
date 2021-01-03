const AWS = require('aws-sdk')
AWS.config.update({
    region: 'us-east-1'
})
const sqs = new AWS.SQS();
(async () => {
  //poison message é uma mensagem que nao é "compreendida"  pela fila e vai pra dlq após algumas tentativas
    await sqs.sendMessage({
        MessageBody: `<?xml version="1.0" encoding="UTF-8" ?>
        <root>
          <conta_origem>
            <agencia>1</agencia>
            <numero_conta>123456-7</numero_conta>
          </conta_origem>
          <conta_destino>
            <agencia>1</agencia>
            <numero_conta>765432-1</numero_conta>
          </conta_destino>
          <valor>1000</valor>
          <moeda>BRL</moeda>
        </root>`,
        QueueUrl: 'url da fila'
    }).promise();
    console.log('mensagem envenenada enviada com sucesso!')
})();