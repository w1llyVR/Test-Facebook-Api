const bizSdk = require('facebook-nodejs-business-sdk');

const accessToken = '<ACCESS_TOKEN>';
const accountId = 'act_<AD_ACCOUNT_ID>';

const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
const AdAccount = bizSdk.AdAccount;
const Campaign = bizSdk.Campaign;

const account = new AdAccount(accountId);
var campaigns;

account.read([Campaign.Fields.name])
    .then((account) => {
        return account.getCampaigns([Campaign.Fields.name], { limit: 10 });
    })
    .then((result) => {
        campaigns = result;
        campaigns.forEach((campaign) => {
            console.log(campaign.name);
        });
    }).catch(console.error)