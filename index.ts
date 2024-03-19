import dotenv from 'dotenv'

import {
    env,
} from "./src/env/parseEnv"

console.log('NODE_ENV')
const environment = env('NODE_ENV')

console.log(`environment from terminal ${environment}`)

dotenv.config({ path: env('COMMON_CONFIG_FILE')})
dotenv.config({ path: `${env('ENV_PATH')}${environment}.env` })
