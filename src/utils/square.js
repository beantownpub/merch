const LOCATION_ID = process.env.SQUARE_LOCATION_ID

const TOKENS = {
    development: process.env.SQUARE_ACCESS_TOKEN_DEV,
    production: process.env.SQUARE_ACCESS_TOKEN_PROD
}

const accessToken = TOKENS[process.env.NODE_ENV]
const url = process.env.SQUARE_URL

function squareRequestBody(params) {
    return {
        source_id: params.nonce,
        location_id: LOCATION_ID,
        amount_money: {
            amount: params.total,
            currency: 'USD'
        },
        idempotency_key: params.idempotency_key
    }
}

module.exports = { accessToken, squareRequestBody, url }
