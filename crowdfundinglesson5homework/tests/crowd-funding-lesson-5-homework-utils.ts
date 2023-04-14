import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CampaignBidLog,
  CampaignLog
} from "../generated/CrowdFundingLesson5Homework/CrowdFundingLesson5Homework"

export function createCampaignBidLogEvent(
  campaignId: BigInt,
  sender: Address,
  amount: BigInt
): CampaignBidLog {
  let campaignBidLogEvent = changetype<CampaignBidLog>(newMockEvent())

  campaignBidLogEvent.parameters = new Array()

  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  campaignBidLogEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return campaignBidLogEvent
}

export function createCampaignLogEvent(
  campaignId: BigInt,
  receiver: Address,
  goal: BigInt
): CampaignLog {
  let campaignLogEvent = changetype<CampaignLog>(newMockEvent())

  campaignLogEvent.parameters = new Array()

  campaignLogEvent.parameters.push(
    new ethereum.EventParam(
      "campaignId",
      ethereum.Value.fromUnsignedBigInt(campaignId)
    )
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  campaignLogEvent.parameters.push(
    new ethereum.EventParam("goal", ethereum.Value.fromUnsignedBigInt(goal))
  )

  return campaignLogEvent
}
