#!/usr/bin/env node

import * as path from 'path'
import {exec} from 'child_process'
const jsonminify = require('jsonminify')

interface CloudformOptions {
    shouldMinify: boolean
    templatePath?: string
}

const options: CloudformOptions = {
    shouldMinify: false,
    templatePath: undefined
}

let shouldShowUsageInfo = true

function parseParam(idx: number) {
    const param = process.argv[idx]

    if (param.startsWith('-')) {
        if (param === '-m' || param === '--minify') {
            options.shouldMinify = true
        } else {
            console.warn(`Invalid option ${param}`)
        }
    } else {
        shouldShowUsageInfo = !param
        options.templatePath = param
    }
}

// poor man's CLI arguments reader
parseParam(2)

if (!options.templatePath) {
    parseParam(3)
}

if (shouldShowUsageInfo) {
    console.warn(`cloudform - TypeScript-based imperative way to define AWS CloudFormation templates

usage: cloudform [-m|--minify] <path>
    <path> should point to the TypeScript file containing entrypoint of the CloudFormation definition, including ".ts" suffix.

options:
    -m, --minify    Minify JSON output, default: false

example: cloudform aws/template.ts > generated.template`)
    process.exit(1)
}

// console.info(`Compiling AWS CloudForm template from ${process.argv[2]}...`)

const resolvedTemplatePath = path.resolve(options.templatePath!).replace(/\\/g, "\\\\");

exec('npm bin', (err, npmBin) => {
    if (err) {
        console.error(err)
        return
    }

    const tsNodePath = path.join(npmBin.trim(), 'ts-node')
    exec(`${tsNodePath} -e "import t from '${path.resolve(resolvedTemplatePath)}'; console.log(t)"`, (err, template, stderr) => {
        if (err) {
            console.error(err)
            return
        }
        if (stderr) {
            console.error(stderr)
            return
        }

        if (options.shouldMinify) {
            console.log(jsonminify(template))
        } else {
            console.log(template)
        }
    })

})

