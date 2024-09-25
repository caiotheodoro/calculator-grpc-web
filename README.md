# gRPC Rust Server with React Client

This project demonstrates a gRPC implementation using a Rust server and a React client.

## Overview

The project consists of two main components:
1. A gRPC server implemented in Rust
2. A React client that communicates with the server using gRPC-Web

## Prerequisites

- Rust (latest stable version)
- Node.js (v14 or later)
- npm or yarn
- Protocol Buffers compiler (protoc)
- gRPC-Web plugin for protoc

## Server (Rust)

### Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Build the server:
   ```
   cargo build --release
   ```

3. Run the server:
   ```
   cargo run --release
   ```

The server will start on `localhost:50051` by default.

## Client (React)

### Setup

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

3. Start the development server:
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

The client will be available at `http://localhost:3000`.

## Protocol Buffers

The gRPC service is defined in `proto/service.proto`. To generate the necessary code:

1. For the Rust server:
   ```
   protoc -I proto service.proto --rust_out=server/src --grpc_out=server/src --plugin=protoc-gen-grpc=`which grpc_rust_plugin`
   ```

2. For the React client:
   ```
   protoc -I proto service.proto --js_out=import_style=commonjs:client/src --grpc-web_out=import_style=typescript,mode=grpcwebtext:client/src
   ```
