import initialState from "./initialState";
import { notifConstants, accountConstants } from "../constants/ActionTypes";

const notificationReducer = (state = initialState.notifications, action) => {
  switch (action.type) {
    case notifConstants.ADD_NOTIFS_SUCCESS:
      return {
        ...state,
        socket: [...state.socket, action.payload],
      };
    case notifConstants.ADD_NOTIFS_FAILURE:
      return { ...state };
    case notifConstants.NOTIF_ACCLINK_SUCCESS:
      return {
        ...state,
        linkStatus: [...state.linkStatus, action.payload],
      };
    case notifConstants.NOTIF_ACCLINK_FAILURE:
      return { ...state };
    case accountConstants.LINK_ACCOUNT_START:
      return {
        ...state,
        linkStatus: [],
        linkProgress: "0",
        linkComplete: {},
      };
    case accountConstants.LINK_ACCOUNT_ENDS:
      return {
        ...state,
        linkStatus: [],
        linkProgress: "0",
        linkComplete: {},
      };
    case notifConstants.LINK_NOTIFS_SUCCESS:
      return {
        ...state,
        linkProgress: action.payload.message,
      };

    case notifConstants.LINK_NOTIFS_FAILURE:
      return { ...state };

    case notifConstants.LINK_NOTIFS_STARTED:
      return {
        ...state,
        assessmentStarted: true,
        assessmentComplete: false,
      };
    case notifConstants.LINK_NOTIFS_COMPLETE:
      return {
        ...state,
        assessmentStarted: false,
        assessmentComplete: true,
      };
    case notifConstants.COMPLETE_ACCLINK_SUCCESS:
      return {
        ...state,
        linkComplete: action.payload,
      };
    case notifConstants.COMPLETE_ACCLINK_FAILURE:
      return { ...state };
    case notifConstants.NOTIFS_READ_SUCCESS:
      return {
        ...state,
        socket: [
          ...state.socket.map((notification) => {
            const notificationItem =
              notification.assessmentId === action.payload.assessmentId
                ? { ...notification, isRead: true }
                : notification;

            return notificationItem;
          }),
        ],
      };

    default:
      return state;
  }
};

export default notificationReducer;
