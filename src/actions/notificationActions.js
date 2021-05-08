import { notifConstants } from "../constants/ActionTypes";

const notificationSuccess = (payload) => ({
  type: notifConstants.ADD_NOTIFS_SUCCESS, payload
});

const notificationFailure = (error) => ({
  type: notifConstants.ADD_NOTIFS_FAILURE, payload: error,
});

export const notification = (notifs) => async (dispatch) => {
  try {
    if (notifs) {
      dispatch(notificationSuccess(notifs));
    }
  } catch (error) {
    dispatch(notificationFailure(error));
  }
};

const linkNotifSuccess = (payload) => ({
  type: notifConstants.LINK_NOTIFS_SUCCESS, payload,
});

const linkNotifFailure = (error) => ({
  type: notifConstants.LINK_NOTIFS_FAILURE, payload: error,
});

export const linkNotif = (notifs) => async (dispatch) => {
  try {
    if (notifs) {
      dispatch(linkNotifSuccess(notifs));
    }
    if (notifs) {
      dispatch(linkNotifSuccess(notifs));
    }
    if (notifs) {
      dispatch(linkNotifSuccess(notifs));
    }
  } catch (error) {
    dispatch(linkNotifFailure(error));
  }
};

const accountLinkingSuccess = (payload) => ({
  type: notifConstants.NOTIF_ACCLINK_SUCCESS, payload,
});

const accountLinkingFailure = (error) => ({
  type: notifConstants.NOTIF_ACCLINK_FAILURE, payload: error,
});

export const accountLinking = (notifs) => async (dispatch) => {
  try {
    if (notifs) {
      dispatch(accountLinkingSuccess(notifs));
    }
  } catch (error) {
    dispatch(accountLinkingFailure(error));
  }
};

const accountLinkingCompleteStart = (payload) => ({
  type: notifConstants.COMPLETE_ACCLINK_START, payload,
});

const accountLinkingCompleteSuccess = (payload) => ({
  type: notifConstants.COMPLETE_ACCLINK_SUCCESS, payload,
});

const accountLinkingCompleteFailure = (error) => ({
  type: notifConstants.COMPLETE_ACCLINK_FAILURE, payload: error,
});

export const accountLinkingComplete = (notifs) => async (dispatch) => {
  dispatch(accountLinkingCompleteStart({}));

  try {
    if (notifs) {
      dispatch(accountLinkingCompleteSuccess(notifs));
    }
  } catch (error) {
    dispatch(accountLinkingCompleteFailure(error));
  }
};

export const notificationReadSuccess = (payload) => ({
  type: notifConstants.NOTIFS_READ_SUCCESS, payload,
});

export const notificationRead = (item) => (dispatch) => {
  dispatch(notificationReadSuccess(item));
};
