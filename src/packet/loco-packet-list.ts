import { LocoRequestPacket, LocoResponsePacket } from "./loco-packet-base";
import { PacketGetConfReq, PacketGetConfRes } from "./packet-get-conf";
import { PacketCheckInReq, PacketCheckInRes } from "./packet-check-in";
import { PacketLoginReq, PacketLoginRes } from "./packet-login";
import { PacketMessageRes, PacketMessageWriteReq, PacketMessageWriteRes } from "./packet-message";
import { PacketMessageReadRes } from "./packet-message-read";
import { PacketKickoutRes } from "./packet-kickout";
import { PacketInvoiceRes } from "./packet-invoice";
import { PacketNewMemberRes } from "./packet-new-member";
import { PacketLeftRes, PacketLeaveReq, PacketLeaveRes } from "./packet-leave";
import { PacketChatMemberReq, PacketChatMemberRes } from "./packet-chat-member";
import { PacketChatInfoReq, PacketChatInfoRes } from "./packet-chatinfo";
import { PacketChanJoinRes } from "./packet-chan-join";
import { PacketGetMemberRes, PacketGetMemberReq } from "./packet-get-member";
import { DefaultBsonRequestPacket, DefaultBsonResponsePacket } from "./loco-bson-packet";
import { PacketGetMetaReq, PacketGetMetaRes, PacketGetMetasReq, PacketGetMetasRes } from "./packet-get-meta";
import { PacketGetChannelBoardMetaReq, PacketGetMoimMetaRes } from "./packet-get-channel-board-meta";
import { PacketSyncLinkReq, PacketSyncLinkRes } from "./packet-sync-link";
import { PacketRewriteReq, PacketRewriteRes } from "./packet-rewrite";
import { PacketKickMemberReq, PacketKickMemberRes } from "./packet-kick-member";
import { PacketDeleteLinkReq, PacketDeleteLinkRes } from "./packet-delete-link";
import { PacketDeleteChatRes } from "./packet-delete-chat";
import { PacketMemberRes, PacketMemberReq } from "./packet-member";
import { PacketPingRes, PacketPingReq } from "./packet-ping";
import { PacketInfoLinkRes, PacketInfoLinkReq } from "./packet-info-link";
import { PacketCreateChatRes, PacketCreateChatReq } from "./packet-create-chat";
import { PacketSyncJoinOpenchatRes } from "./packet-sync-join-openchat";
import { PacketDeleteMemberRes } from "./packet-delmem";
import { PacketMessageNotiReadReq, PacketMessageNotiReadRes } from "./loco-noti-read";
import { PacketJoinInfoReq, PacketJoinInfoRes } from "./packet-join-info";
import { PacketSetMemTypeRes, PacketSetMemTypeReq } from "./packet-set-mem-type";
import { PacketLinkKickedRes } from "./packet-link-kicked";
import { PacketJoinLinkRes, PacketJoinLinkReq } from "./packet-join-link";
import { PacketUpdateOpenchatProfileReq, PacketUpdateOpenchatProfileRes } from "./packet-update-openchat-profile";
import { PacketSyncMemberTypeRes } from "./packet-sync-member-type";
import { PacketChatOnRoomReq, PacketChatOnRoomRes } from "./packet-chat-on-room";
import { PacketSyncProfileRes } from "./packet-sync-profile";
import { PacketSyncDeleteMessageRes } from "./packet-sync-delete-message";
import { PacketSyncMessageReq, PacketSyncMessageRes } from "./packet-sync-message";

/*
 * Created on Wed Oct 30 2019
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

export class LocoPacketList {

    private static requestPacketMap: Map<string, new() => LocoRequestPacket>;
    private static responsePacketMap: Map<string, new(status: number) => LocoResponsePacket>;

    private static defaultBodyReqPacketMap: Map<number, new(packetName: string) => LocoRequestPacket>;
    private static defaultBodyResPacketMap: Map<number, new(status: number, packetName: string) => LocoResponsePacket>;

    static init() {
        LocoPacketList.initReqMap();
        LocoPacketList.initResMap();
    }

    protected static initReqMap() {
        LocoPacketList.requestPacketMap = new Map();
        LocoPacketList.defaultBodyReqPacketMap = new Map();

        LocoPacketList.defaultBodyReqPacketMap.set(0, DefaultBsonRequestPacket);

        LocoPacketList.requestPacketMap.set('GETCONF', PacketGetConfReq);
        LocoPacketList.requestPacketMap.set('CHECKIN', PacketCheckInReq);
        LocoPacketList.requestPacketMap.set('LOGINLIST', PacketLoginReq);

        LocoPacketList.requestPacketMap.set('WRITE', PacketMessageWriteReq);
        LocoPacketList.requestPacketMap.set('MEMBER', PacketChatMemberReq);
        LocoPacketList.requestPacketMap.set('CHATINFO', PacketChatInfoReq);

        LocoPacketList.requestPacketMap.set('GETMETA', PacketGetMetaReq);
        LocoPacketList.requestPacketMap.set('GETMETAS', PacketGetMetasReq);
        LocoPacketList.requestPacketMap.set('GETMEM', PacketGetMemberReq);
        LocoPacketList.requestPacketMap.set('MEMBER', PacketMemberReq);
        LocoPacketList.requestPacketMap.set('GETMOMETA', PacketGetChannelBoardMetaReq);

        LocoPacketList.requestPacketMap.set('SYNCLINK', PacketSyncLinkReq);
        
        LocoPacketList.requestPacketMap.set('REWRITE', PacketRewriteReq);
        
        LocoPacketList.requestPacketMap.set('CREATE', PacketCreateChatReq);

        LocoPacketList.requestPacketMap.set('KICKMEM', PacketKickMemberReq);
        LocoPacketList.requestPacketMap.set('DELETELINK', PacketDeleteLinkReq);
        LocoPacketList.requestPacketMap.set('INFOLINK', PacketInfoLinkReq);
        LocoPacketList.requestPacketMap.set('JOININFO', PacketJoinInfoReq);
        LocoPacketList.requestPacketMap.set('SETMEMTYPE', PacketSetMemTypeReq);
        LocoPacketList.requestPacketMap.set('JOINLINK', PacketJoinLinkReq);
        LocoPacketList.requestPacketMap.set('UPLINKPROF', PacketUpdateOpenchatProfileReq);

        LocoPacketList.requestPacketMap.set('SYNCMSG', PacketSyncMessageReq);

        LocoPacketList.requestPacketMap.set('DELETEMSG', PacketDeleteLinkReq);

        LocoPacketList.requestPacketMap.set('NOTIREAD', PacketMessageNotiReadReq);
        LocoPacketList.requestPacketMap.set('CHATONROOM', PacketChatOnRoomReq);

        LocoPacketList.requestPacketMap.set('PING', PacketPingReq);

        LocoPacketList.requestPacketMap.set('LEAVE', PacketLeaveReq);
    }

    protected static initResMap() {
        LocoPacketList.responsePacketMap = new Map();
        LocoPacketList.defaultBodyResPacketMap = new Map();

        LocoPacketList.defaultBodyResPacketMap.set(0, DefaultBsonResponsePacket);
        LocoPacketList.defaultBodyResPacketMap.set(8, DefaultBsonResponsePacket); // ??

        LocoPacketList.responsePacketMap.set('GETCONF', PacketGetConfRes);
        LocoPacketList.responsePacketMap.set('CHECKIN', PacketCheckInRes);

        LocoPacketList.responsePacketMap.set('LOGINLIST', PacketLoginRes);

        LocoPacketList.responsePacketMap.set('MSG', PacketMessageRes);
        LocoPacketList.responsePacketMap.set('WRITE', PacketMessageWriteRes);
        LocoPacketList.responsePacketMap.set('NOTIREAD', PacketMessageNotiReadRes);
        LocoPacketList.responsePacketMap.set('DECUNREAD', PacketMessageReadRes);
        LocoPacketList.responsePacketMap.set('MEMBER', PacketChatMemberRes);
        LocoPacketList.responsePacketMap.set('CHATINFO', PacketChatInfoRes);

        LocoPacketList.responsePacketMap.set('GETMETA', PacketGetMetaRes);
        LocoPacketList.responsePacketMap.set('GETMETAS', PacketGetMetasRes);
        LocoPacketList.responsePacketMap.set('GETMEM', PacketGetMemberRes);
        LocoPacketList.responsePacketMap.set('MEMBER', PacketMemberRes);
        LocoPacketList.responsePacketMap.set('GETMOMETA', PacketGetMoimMetaRes);

        LocoPacketList.responsePacketMap.set('JOININFO', PacketJoinInfoRes);

        LocoPacketList.responsePacketMap.set('KICKMEM', PacketKickMemberRes);

        LocoPacketList.responsePacketMap.set('CREATE', PacketCreateChatRes);

        LocoPacketList.responsePacketMap.set('NEWMEM', PacketNewMemberRes);
        LocoPacketList.responsePacketMap.set('LEFT', PacketLeftRes);
        LocoPacketList.responsePacketMap.set('LEAVE', PacketLeaveRes);
        LocoPacketList.responsePacketMap.set('SYNCJOIN', PacketChanJoinRes);

        LocoPacketList.responsePacketMap.set('SYNCLINK', PacketSyncLinkRes);
        LocoPacketList.responsePacketMap.set('INFOLINK', PacketInfoLinkRes);
        LocoPacketList.responsePacketMap.set('DELETELINK', PacketDeleteLinkRes);
        LocoPacketList.responsePacketMap.set('REWRITE', PacketRewriteRes);
        LocoPacketList.responsePacketMap.set('SETMEMTYPE', PacketSetMemTypeRes);
        LocoPacketList.responsePacketMap.set('LINKKICKED', PacketLinkKickedRes);
        LocoPacketList.responsePacketMap.set('JOINLINK', PacketJoinLinkRes);
        LocoPacketList.responsePacketMap.set('UPLINKPROF', PacketUpdateOpenchatProfileRes);

        LocoPacketList.responsePacketMap.set('SYNCLINKPF', PacketSyncProfileRes);

        LocoPacketList.responsePacketMap.set('CHATONROOM', PacketChatOnRoomRes);

        LocoPacketList.responsePacketMap.set('SYNCMEMT', PacketSyncMemberTypeRes);

        LocoPacketList.responsePacketMap.set('INVOICE', PacketInvoiceRes);

        LocoPacketList.responsePacketMap.set('DELETEMSG', PacketDeleteChatRes);
        LocoPacketList.responsePacketMap.set('SYNCDLMSG', PacketSyncDeleteMessageRes);

        LocoPacketList.responsePacketMap.set('SYNCLINKCR', PacketSyncJoinOpenchatRes);

        LocoPacketList.responsePacketMap.set('SYNCMSG', PacketSyncMessageRes);

        LocoPacketList.responsePacketMap.set('DELMEM', PacketDeleteMemberRes);

        LocoPacketList.responsePacketMap.set('PING', PacketPingRes);

        LocoPacketList.responsePacketMap.set('KICKOUT', PacketKickoutRes);
    }

    static hasReqPacket(name: string): boolean {
        return LocoPacketList.requestPacketMap && LocoPacketList.requestPacketMap.has(name);
    }

    static hasResPacket(name: string): boolean {
        return LocoPacketList.responsePacketMap && LocoPacketList.responsePacketMap.has(name);
    }

    static hasReqBodyType(type: number): boolean {
        return LocoPacketList.defaultBodyReqPacketMap && LocoPacketList.defaultBodyReqPacketMap.has(type);
    }

    static hasResBodyType(type: number): boolean {
        return LocoPacketList.defaultBodyResPacketMap && LocoPacketList.defaultBodyResPacketMap.has(type);
    }

    static getReqPacketByName(name: string): LocoRequestPacket {
        if (!LocoPacketList.hasReqPacket(name)) {
            throw new Error(`${name} is not valid loco request packet`);
        }

        return new (LocoPacketList.requestPacketMap.get(name)!)();
    }

    static getResPacketByName(name: string, status: number): LocoResponsePacket {
        if (!LocoPacketList.hasResPacket(name)) {
            throw new Error(`${name} is not valid loco response packet`);
        }

        return new (LocoPacketList.responsePacketMap.get(name)!)(status);
    }

    static getDefaultReqPacket(bodyType: number, packetName: string): LocoRequestPacket {
        if (!LocoPacketList.hasReqBodyType(bodyType)) {
            throw new Error(`${bodyType} is not valid loco packet type`);
        }

        return new (LocoPacketList.defaultBodyReqPacketMap.get(bodyType)!)(packetName);
    }

    static getDefaultResPacket(bodyType: number, packetName: string, status: number): LocoResponsePacket {
        if (!LocoPacketList.hasResBodyType(bodyType)) {
            throw new Error(`${bodyType} is not valid loco packet type`);
        }

        return new (LocoPacketList.defaultBodyResPacketMap.get(bodyType)!)(status, packetName);
    }


}

LocoPacketList.init();