"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class PublicDnsNamespace extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::ServiceDiscovery::PublicDnsNamespace', properties);
    }
}
exports.default = PublicDnsNamespace;