const { setOutput, setFailed } = require('@actions/core');
const path = require('path');

const run = async () => {
   
    const packagePath = path.join(process.env.GITHUB_WORKSPACE, process.env.INPUT_PATH);
    console.log("Trying to read:",packagePath);
    
   
    const package = require(packagePath);
    setOutput('version', package.version);
}

run().catch(error => {
    setFailed(error.message);
});
