// import * as AWS from "@aws-sdk/client-secrets-manager"
// const client = new AWS.SecretsManagerClient({ region: process.env.AWS_DEFAULT_REGION })
// const input = {
//   SecretId: process.env.AWS_SECRET_NAME
// }

// const getSecretValue = new AWS.GetSecretValueCommand(input)
// async function asyncCall(command) {
//   const data = await client.send(command)
//   return JSON.parse(data.SecretString)
// }
// const appSecret = await asyncCall(getSecretValue)

// export { appSecret }
