package com.wgtwo.examples.thirdpartydev.sipbreakout;

import com.wgtwo.api.common.Environment;
import com.wgtwo.api.v0.sipbreakout.*;
import com.wgtwo.api.v0.sipbreakout.SipBreakoutServiceGrpc.SipBreakoutServiceStub;
import com.wgtwo.api.util.auth.BearerToken;
import com.wgtwo.api.util.auth.Channels;
import io.grpc.ManagedChannel;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class SipBreakout {

  private static ManagedChannel channel = Channels.createChannel(Environment.SANDBOX);
  private static BearerToken credentials = new BearerToken(() -> "MY_ACCESS_TOKEN"); // Add your _client credentials_ access token (not user access token)
  private static SipBreakoutServiceStub stub = SipBreakoutServiceGrpc.newStub(channel)
      .withCallCredentials(credentials);

  public static void main(String args[]) throws InterruptedException {

    // building RegistrationRequest
    Registration registration = Registration.newBuilder()
            .setSipUri("sips:example.com:8888")
            .setMobileOriginatingPrefix("11")
            .setMobileTerminatingPrefix("22")
            .setRouteType(RouteType.ROUTE_TYPE_LOOP) // or ROUTE_TYPE_FORK
            .build();

    UpsertRegistrationRequest upsertRegistrationRequest = UpsertRegistrationRequest.newBuilder()
            .setRegistration(registration)
            .build();

    DeleteRegistrationRequest deleteRegistrationRequest = DeleteRegistrationRequest.newBuilder()
            .setRegistration(registration)
            .build();

    CountDownLatch latch = new CountDownLatch(2);
    stub.upsertRegistration(upsertRegistrationRequest, new StreamObserver<UpsertRegistrationResponse>() {
      @Override
      public void onNext(UpsertRegistrationResponse response) {
        System.out.printf("upsert: got response %s%n", response);
      }

      @Override
      public void onError(Throwable t) {
        System.out.printf("upsert: got error %s%n", t);
      }

      @Override
      public void onCompleted() {
        System.out.printf("upsert: completed");
        latch.countDown();
      }
    });

    stub.deleteRegistration(deleteRegistrationRequest, new StreamObserver<DeleteRegistrationResponse>() {
      @Override
      public void onNext(DeleteRegistrationResponse response) {
        System.out.printf("delete: got response %s%n", response);
      }

      @Override
      public void onError(Throwable t) {
        System.out.printf("delete: got error %s%n", t);
      }

      @Override
      public void onCompleted() {
        System.out.printf("delete: completed");
        latch.countDown();
      }
    });

    // wait for some messages to be printed out..
    latch.await(1, TimeUnit.MINUTES);
  }
}
