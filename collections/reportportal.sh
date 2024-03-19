#!/bin/bash

helpFunction() {
	echo ""
	echo "Usage: $0 -c collection -e environment "
	echo -e "\t-c Collection file .json"
	echo -e "\t-e Enviroment file .json"
	exit 1 # Exit script after printing help
}

while getopts "c:e:" opt; do
	case "$opt" in
	c) collection="$OPTARG" ;;
	e) environment="$OPTARG" ;;
	?) helpFunction ;; # Print helpFunction in case parameter is non-existent
	esac
done

# Print helpFunction in case parameters are empty
if [ -z "$collection" ] || [ -z "$environment" ]; then
	echo "Some or all of the parameters are empty"
	helpFunction
fi

# Begin script in case all parameters are correct
echo "$collection"
echo "$environment"

newman run "$collection" -e "$environment" \
	-r @reportportal/agent-js-postman \
	--reporter-@reportportal/agent-js-postman-endpoint="http://localhost:8080/api/v1" \
	--reporter-@reportportal/agent-js-postman-api-key="postman_zZRGmHSwTKWSfCRBsBvR5dc12A0L6s2VdLLX1Tj3r0RMfmsRIsS365DnkfRmhOAa" \
	--reporter-@reportportal/agent-js-postman-launch="postman" \
	--reporter-@reportportal/agent-js-postman-project="postman" \
	--reporter-@reportportal/agent-js-postman-description="Automating Postman" \
	-x
