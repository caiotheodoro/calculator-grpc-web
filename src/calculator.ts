// @generated by protobuf-ts 2.9.3
// @generated from protobuf file "calculator.proto" (package "calculator", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message calculator.CalculationRequest
 */
export interface CalculationRequest {
    /**
     * @generated from protobuf field: int64 a = 1;
     */
    a: bigint;
    /**
     * @generated from protobuf field: int64 b = 2;
     */
    b: bigint;
}
/**
 * @generated from protobuf message calculator.CalculationResponse
 */
export interface CalculationResponse {
    /**
     * @generated from protobuf field: int64 result = 1;
     */
    result: bigint;
}
/**
 * @generated from protobuf message calculator.GetCountRequest
 */
export interface GetCountRequest {
}
/**
 * @generated from protobuf message calculator.CounterResponse
 */
export interface CounterResponse {
    /**
     * @generated from protobuf field: uint64 count = 1;
     */
    count: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class CalculationRequest$Type extends MessageType<CalculationRequest> {
    constructor() {
        super("calculator.CalculationRequest", [
            { no: 1, name: "a", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "b", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CalculationRequest>): CalculationRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.a = 0n;
        message.b = 0n;
        if (value !== undefined)
            reflectionMergePartial<CalculationRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CalculationRequest): CalculationRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 a */ 1:
                    message.a = reader.int64().toBigInt();
                    break;
                case /* int64 b */ 2:
                    message.b = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CalculationRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 a = 1; */
        if (message.a !== 0n)
            writer.tag(1, WireType.Varint).int64(message.a);
        /* int64 b = 2; */
        if (message.b !== 0n)
            writer.tag(2, WireType.Varint).int64(message.b);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message calculator.CalculationRequest
 */
export const CalculationRequest = new CalculationRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CalculationResponse$Type extends MessageType<CalculationResponse> {
    constructor() {
        super("calculator.CalculationResponse", [
            { no: 1, name: "result", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CalculationResponse>): CalculationResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.result = 0n;
        if (value !== undefined)
            reflectionMergePartial<CalculationResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CalculationResponse): CalculationResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 result */ 1:
                    message.result = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CalculationResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 result = 1; */
        if (message.result !== 0n)
            writer.tag(1, WireType.Varint).int64(message.result);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message calculator.CalculationResponse
 */
export const CalculationResponse = new CalculationResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetCountRequest$Type extends MessageType<GetCountRequest> {
    constructor() {
        super("calculator.GetCountRequest", []);
    }
    create(value?: PartialMessage<GetCountRequest>): GetCountRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetCountRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetCountRequest): GetCountRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GetCountRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message calculator.GetCountRequest
 */
export const GetCountRequest = new GetCountRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CounterResponse$Type extends MessageType<CounterResponse> {
    constructor() {
        super("calculator.CounterResponse", [
            { no: 1, name: "count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<CounterResponse>): CounterResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.count = 0n;
        if (value !== undefined)
            reflectionMergePartial<CounterResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CounterResponse): CounterResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 count */ 1:
                    message.count = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CounterResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 count = 1; */
        if (message.count !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.count);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message calculator.CounterResponse
 */
export const CounterResponse = new CounterResponse$Type();
/**
 * @generated ServiceType for protobuf service calculator.Calculator
 */
export const Calculator = new ServiceType("calculator.Calculator", [
    { name: "Add", options: {}, I: CalculationRequest, O: CalculationResponse },
    { name: "Divide", options: {}, I: CalculationRequest, O: CalculationResponse },
    { name: "Subtract", options: {}, I: CalculationRequest, O: CalculationResponse },
    { name: "Multiply", options: {}, I: CalculationRequest, O: CalculationResponse }
]);
/**
 * @generated ServiceType for protobuf service calculator.Admin
 */
export const Admin = new ServiceType("calculator.Admin", [
    { name: "GetRequestCount", options: {}, I: GetCountRequest, O: CounterResponse }
]);