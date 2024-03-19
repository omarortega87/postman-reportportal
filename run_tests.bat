set env=%1

set COMMON_CONFIG_FILE=env/common.env

set NODE_ENV=env/%env%.env

yarn run test
