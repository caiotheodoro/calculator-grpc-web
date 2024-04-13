export interface RpcOptions {
  /**
   * Meta data for the call.
   *
   * RPC meta data are simple key-value pairs that usually translate
   * directly to HTTP request headers.
   *
   * If a key ends with `-bin`, it should contain binary data in base64
   * encoding, allowing you to send serialized messages.
   */
  meta?: RpcMetadata;
  /**
   * Timeout for the call in milliseconds.
   * If a Date object is given, it is used as a deadline.
   */
  timeout?: number | Date;
  /**
   * Interceptors can be used to manipulate request and response data.
   * The most common use case is adding a "Authorization" header.
   */
  interceptors?: RpcInterceptor[];
  /**
   * Options for the JSON wire format.
   *
   * To send or receive `google.protobuf.Any` in JSON format, you must
   * provide `jsonOptions.typeRegistry` so that the runtime can discriminate
   * the packed type.
   */
  jsonOptions?: Partial<JsonReadOptions & JsonWriteOptions>;
  /**
   * Options for the binary wire format.
   */
  binaryOptions?: Partial<BinaryReadOptions & BinaryWriteOptions>;
  /**
   * A signal to cancel a call. Can be created with an [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).
   * The npm package `abort-controller` provides a polyfill for Node.js.
   */
  abort?: AbortSignal;
  /**
   * A `RpcTransport` implementation may allow arbitrary
   * other options.
   */
  [extra: string]: unknown;
}

export interface RpcMetadata {
  [key: string]: string | string[];
}


export interface RpcInterceptor {
  interceptUnary?(next: NextUnaryFn, method: MethodInfo, input: object, options: RpcOptions): UnaryCall;
  interceptServerStreaming?(next: NextServerStreamingFn, method: MethodInfo, input: object, options: RpcOptions): ServerStreamingCall;
  interceptClientStreaming?(next: NextClientStreamingFn, method: MethodInfo, options: RpcOptions): ClientStreamingCall;
  interceptDuplex?(next: NextDuplexStreamingFn, method: MethodInfo, options: RpcOptions): DuplexStreamingCall;
}