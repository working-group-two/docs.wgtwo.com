package com.wgtwo.examples.thirdpartydev.webterminal;

import com.wgtwo.api.common.Environment;
import com.wgtwo.api.common.v0.PhoneNumberProto.PhoneNumber;
import com.wgtwo.api.util.auth.BearerToken;
import com.wgtwo.api.util.auth.Channels;
import com.wgtwo.api.webterminal.v0.Offer;
import com.wgtwo.api.webterminal.v0.WebTerminalMessage;
import com.wgtwo.api.webterminal.v0.WebTerminalServiceGrpc;
import com.wgtwo.api.webterminal.v0.WebTerminalServiceGrpc.WebTerminalServiceStub;
import io.grpc.ManagedChannel;
import io.grpc.stub.StreamObserver;
import java.util.UUID;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class InitiateCall {

  private static ManagedChannel channel = Channels.createChannel(Environment.SANDBOX);
  private static BearerToken credentials = new BearerToken(() -> "MY_ACCESS_TOKEN"); // Add your _client credentials_ access token (not user access token)
  private static WebTerminalServiceStub stub = WebTerminalServiceGrpc.newStub(channel)
      .withCallCredentials(credentials);

  public static void main(String args[]) throws InterruptedException {

    // your calles's MSISDN goes here
    String to = "1234567890";

    // your SDP goes here
    String sdp = "";

    // Pipe() ignores callId, but it's mandatory for MultiPipe()
    String callId = UUID.randomUUID().toString();

    // building Offer
    PhoneNumber toPhone = PhoneNumber.newBuilder().setE164(to).build();
    WebTerminalMessage offer = WebTerminalMessage.newBuilder()
        .setCallId(callId)
        .setOffer(
            Offer.newBuilder().setMsisdn(toPhone).setSdp(sdp).build()
        ).build();

    CountDownLatch latch = new CountDownLatch(1);
    StreamObserver<WebTerminalMessage> requests = stub.pipe(new StreamObserver<WebTerminalMessage>() {
      @Override
      public void onNext(WebTerminalMessage message) {
        System.out.printf("got message %s%n", message);
      }

      @Override
      public void onError(Throwable t) {
        System.out.printf("got error %s%n", t);
        latch.countDown();
      }

      @Override
      public void onCompleted() {
        System.out.printf("stream closed%n");
        latch.countDown();
      }
    });

    // pushing offer
    requests.onNext(offer);

    // your message emitting/receiving may continue here
    // ...

    // wait for some messages to be printed out..
    latch.await(1, TimeUnit.MINUTES);
  }
}
