const { setOutput, setFailed } = require('@actions/core');

const run = async () => {
   
    const package = require(path.join((process.cwd(),process.env['INPUT_PATH'] || 'package.json'));
    setOutput('version', package.version);
}

run().catch(error => {
    setFailed(error.message);
});
