<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Transport](./sip.js.transport.md) &gt; [on](./sip.js.transport.on.md)

## Transport.on() method

> Warning: This API is now obsolete.
> 
> Use `onConnected`<!-- -->, `onDisconnected` and/or `stateChange`<!-- -->.
> 

Add listener for connection events.

<b>Signature:</b>

```typescript
on(event: "connected" | "connecting" | "disconnecting" | "disconnected", listener: () => void): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | <code>&quot;connected&quot; &#124; &quot;connecting&quot; &#124; &quot;disconnecting&quot; &#124; &quot;disconnected&quot;</code> |  |
|  listener | <code>() =&gt; void</code> |  |

<b>Returns:</b>

`this`

