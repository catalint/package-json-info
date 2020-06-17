# GitHub Action to get info from package.json

This action outputs variables read from package.json.

## Inputs

### `path`

Sets the path to the package.json. Default './package.json'.

## Outputs

### `version`

The current package.json version

## Example usage

```
jobs:
  print-current-version:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
      with:
        fetch-depth: '0'
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
    - name: Get info from package.json
      uses: catalint/package-json-info@master
      id: package
    - name: Print current version
      run: echo ${{ steps.package.outputs.version }}
```
