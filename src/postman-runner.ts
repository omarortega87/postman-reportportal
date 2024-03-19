const newman = require("newman");
import {env} from './env/parseEnv'
import dotenv from 'dotenv'

dotenv.config({path: env('COMMON_CONFIG_FILE')})
dotenv.config({path: env('NODE_ENV')})

const collection = env('COLLECTION')
const environment = env('ENVIRONMENT')

console.log(`This is the env ${environment}`)

console.log(collection)

newman.run(
    {
        collection: collection,
        environment: environment,
        reporters: "@reportportal/agent-js-postman",
        reporter: {
            "@reportportal/agent-js-postman": {
                apiKey: "postman_DOZkazsKSgmsRYlv53tHtM-OFGVFRROk4DMXI3gBMfAXNbIPWpUKfaRppTW8KEGm",
                endpoint: "http://localhost:8080/api/v1",
                launch: "POSTMAN",
                project: "postman",
                description: "test",
                mode: 'DEFAULT',
                debug: false
            }
        }
    },
    function (err) {
        if (err) {
            throw err;
        }
        console.log("collection run complete!");
    }
);

// To run several collections
// Note, this will create multiple launches that you can merge into one manually via the UI
/*
fs.readdir('./collections_folder_path', (err, files) => {
  if (err) {
    throw err;
  }
  files.forEach((file) => {
    // setup newman.run()
  });
});
 */
