import * as AWS from "@aws-sdk/client-secrets-manager"
const client = new AWS.SecretsManagerClient({ region: process.env.AWS_DEFAULT_REGION })
const input = {
  SecretId: process.env.AWS_SECRET_NAME
}
const app_input = {
  SecretId: process.env.AWS_APP_SECRET_NAME
}
const getSecretValue = new AWS.GetSecretValueCommand(input)
const getAppSecretValue = new AWS.GetSecretValueCommand(app_input)
async function asyncCall(command) {
  const data = await client.send(command)
  return JSON.parse(data.SecretString)
}
const secret = await asyncCall(getSecretValue)
const appSecret = await asyncCall(getAppSecretValue)

export { secret, appSecret }
