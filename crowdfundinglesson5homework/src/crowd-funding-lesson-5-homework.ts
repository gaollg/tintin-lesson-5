import {
  CampaignBidLog as CampaignBidLogEvent,
  CampaignLog as CampaignLogEvent
} from '../generated/CrowdFundingLesson5Homework/CrowdFundingLesson5Homework';
import { CampaignBidLog, CampaignLog } from '../generated/schema';

export function handleCampaignBidLog(event: CampaignBidLogEvent): void {
  let entity = new CampaignBidLog(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.campaignId = event.params.campaignId;
  entity.sender = event.params.sender;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCampaignLog(event: CampaignLogEvent): void {
  let entity = new CampaignLog(event.transaction.hash.concatI32(event.logIndex.toI32()));
  entity.campaignId = event.params.campaignId;
  entity.receiver = event.params.receiver;
  entity.goal = event.params.goal;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
