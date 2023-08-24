// Objects and functions for setting up Square API environment

const TOKENS = {
    development: process.env.SQUARE_ACCESS_TOKEN_DEV,
    production: process.env.SQUARE_ACCESS_TOKEN_PROD
}

const URLS = {
    development: "https://connect.squareupsandbox.com",
    production: "https://connect.squareup.com"
}

const accessToken = TOKENS[process.env.NODE_ENV]
const url = URLS[process.env.NODE_ENV]

function squareRequestBody(params) {
    const locationId = process.env.SQUARE_LOCATION_ID
    return {
        source_id: params.source_id,
        location_id: locationId,
        amount_money: {
            amount: params.amount_money.amount,
            currency: 'USD'
        },
        idempotency_key: params.idempotency_key
    }
}

function parseError(error) {
    if (error.errors.length === 1) {
        return error.errors[0].code
    }
}

export { accessToken, squareRequestBody, url, parseError }
