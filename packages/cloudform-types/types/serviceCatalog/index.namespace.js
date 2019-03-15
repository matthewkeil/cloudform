"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.28.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const portfolioShare_1 = require("./portfolioShare");
const tagOptionAssociation_1 = require("./tagOptionAssociation");
const launchTemplateConstraint_1 = require("./launchTemplateConstraint");
const tagOption_1 = require("./tagOption");
const portfolioPrincipalAssociation_1 = require("./portfolioPrincipalAssociation");
const cloudFormationProvisionedProduct_1 = require("./cloudFormationProvisionedProduct");
const launchRoleConstraint_1 = require("./launchRoleConstraint");
const cloudFormationProduct_1 = require("./cloudFormationProduct");
const portfolioProductAssociation_1 = require("./portfolioProductAssociation");
const portfolio_1 = require("./portfolio");
const acceptedPortfolioShare_1 = require("./acceptedPortfolioShare");
const launchNotificationConstraint_1 = require("./launchNotificationConstraint");
var ServiceCatalog;
(function (ServiceCatalog) {
    ServiceCatalog.PortfolioShare = portfolioShare_1.default;
    ServiceCatalog.TagOptionAssociation = tagOptionAssociation_1.default;
    ServiceCatalog.LaunchTemplateConstraint = launchTemplateConstraint_1.default;
    ServiceCatalog.TagOption = tagOption_1.default;
    ServiceCatalog.PortfolioPrincipalAssociation = portfolioPrincipalAssociation_1.default;
    ServiceCatalog.CloudFormationProvisionedProduct = cloudFormationProvisionedProduct_1.default;
    ServiceCatalog.LaunchRoleConstraint = launchRoleConstraint_1.default;
    ServiceCatalog.CloudFormationProduct = cloudFormationProduct_1.default;
    ServiceCatalog.PortfolioProductAssociation = portfolioProductAssociation_1.default;
    ServiceCatalog.Portfolio = portfolio_1.default;
    ServiceCatalog.AcceptedPortfolioShare = acceptedPortfolioShare_1.default;
    ServiceCatalog.LaunchNotificationConstraint = launchNotificationConstraint_1.default;
})(ServiceCatalog = exports.ServiceCatalog || (exports.ServiceCatalog = {}));