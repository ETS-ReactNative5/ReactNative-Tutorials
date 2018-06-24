import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import firebase, { RNFirebase } from 'react-native-firebase';

export default class NotificationScreen extends Component {
  componentDidMount() {
    // GET TOKEN
    firebase.messaging().getToken()
      .then(fcmToken => {
        if (fcmToken) {
          // user has a device token
          console.log('Token: ', fcmToken);
        } else {
          // user doesn't have a device token yet
        }
      });

    // CHECK PERMISSION
    firebase.messaging().hasPermission()
      .then(enabled => {
        if (enabled) {
          // user has permissions
          console.log('hasPermission', enabled)
        } else {
          // user doesn't have permission
          // REQUEST PERMISSION
          firebase.messaging().requestPermission()
            .then(() => {
              // User has authorised  
            })
            .catch(error => {
              // User has rejected permissions  
              console.log('requestPermission', error)
            });
        }
      });

    // DEFAULT CHANNEL
    const channel = new firebase.notifications.Android.Channel('default', 'Default Channel', firebase.notifications.Android.Importance.Max);
    channel.setDescription('My default channel');
    // Create the channel
    firebase.notifications().android.createChannel(channel);

    // data-only messages from FCM
    // https://rnfirebase.io/docs/v4.2.x/messaging/receiving-messages
    this.messageListener = firebase.messaging().onMessage((message) => {
      // Process your message as required
      console.log('onMessage', message);
    });

    // LOCAL NOTIFICATION: FOREGROUND
    this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
      // Process your notification as required
      // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
      console.log('onNotificationDisplayed', notification);
    });


    this.notificationListener = firebase.notifications().onNotification((notification) => {
      // Process your notification as required
      console.log('onNotification', notification);
      notification.android.setChannelId('default');
      firebase.notifications().displayNotification(notification);
    });


    // APP FOREGROUND / BACKGROUND
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      // Get the action triggered by the notification being opened
      const action = notificationOpen.action;
      console.log('onNotificationOpened - action', action);
      // Get information about the notification that was opened
      const notification = notificationOpen.notification;
      console.log('onNotificationOpened - notification', notification)
    });


    // APP CLOSED
    firebase.notifications().getInitialNotification()
      .then((notificationOpen) => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          console.log('getInitialNotification - action', action);
          // Get information about the notification that was opened
          const notification = notificationOpen.notification;
          console.log('getInitialNotification - notification', notification);
        }
      });

  }

  componentWillUnmount() {
    this.messageListener();

    this.notificationDisplayedListener();
    this.notificationListener();
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Local message" onPress={() => {

          const notification = new firebase.notifications.Notification();
          notification.setNotificationId('id_' + new Date().getTime().toString());
          notification.setTitle('My local notification title');
          notification.setSubtitle('My local notification subtitle');
          notification.setBody('My local notification body');
          notification.setData({
            key1: 'value1',
            key2: 'value2',
          });
          notification.setSound('default');
          notification.android.setColor('green');
          notification.android.setAutoCancel(true);
          notification.android.setPriority(firebase.notifications.Android.Priority.Max);
          notification.android.setChannelId('default');
          notification.android.setSmallIcon('ic_launcher');
          notification.android.setLocalOnly(true);
          notification.android.setUsesChronometer(true);
          notification.android.setBigText('Show when notification is expanded');
          notification.android.setClickAction('ACTION');
          notification.android.setShowWhen(true);

          firebase.notifications().displayNotification(notification);
        }} />

        <Button title="Schedule message" onPress={() => {
          const notification = new firebase.notifications.Notification();
          notification.setNotificationId('id_' + new Date().getTime().toString());
          notification.setTitle('My schedule notification title');
          notification.setBody('My schedule otification body');
          notification.setData({
            key1: 'value1',
            key2: 'value2',
          });
          notification.setSound('default');
          notification.android.setColor('green');
          notification.android.setAutoCancel(true);
          notification.android.setPriority(firebase.notifications.Android.Priority.Max);
          notification.android.setChannelId('default');
          notification.android.setSmallIcon('ic_launcher');
          notification.android.setLocalOnly(true);
          notification.android.setUsesChronometer(true);
          notification.android.setBigText('Show when notification is expanded');
          notification.android.setClickAction('ACTION');
          notification.android.setShowWhen(true);
          // Schedule the notification for 1 minute in the future
          const date = new Date();
          date.setSeconds(date.getSeconds() + 30);

          firebase.notifications().cancelAllNotifications();

          firebase.notifications().scheduleNotification(notification, {
            fireDate: date.getTime(),
          });

          firebase.notifications().getScheduledNotifications().then(notifications => {
            notifications.map((item, idex) => {
              var d = new Date();
              d.setTime(item.schedule.fireDate);
              console.log(d.toTimeString());
            })
          });

          firebase.notifications().removeAllDeliveredNotifications();
        }} />
      </View>
    );
  }
}