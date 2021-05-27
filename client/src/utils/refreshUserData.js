import API from "./API";
import {
  UPDATE_USERNAME,  UPDATE_HOUSEHOLD,  UPDATE_MEMBERS,  UPDATE_CHORES, UPDATE_REPETITIONS,
} from './actions';
 function refreshUserData(dispatch) {
  API.getUserData()
    .then(response => {
      dispatch({
        type: UPDATE_USERNAME,
        username: response.data.name,
        userId: response.data.id
      }); })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_USERNAME, username: "", userId: null }); })
   API.getHouseholdInfo()
    .then(response => {
      console.log(response);
      dispatch({
        type: UPDATE_HOUSEHOLD,
        household: response.data.name,
        inviteCode: response.data.invite_code,  });
      dispatch({
        type: UPDATE_MEMBERS,
        members: response.data.members,  });  })
    .catch(err => {
      console.log(err);
      dispatch({
        type: UPDATE_HOUSEHOLD,
        household: null,
        inviteCode: null, });
      dispatch({
        type: UPDATE_MEMBERS,
        members: [], });  })
API.getAllHouseholdChores()
    .then(res => {
      dispatch({ type: UPDATE_CHORES, chores: res.data });  })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_CHORES, chores: [] });  });
  API.getAllRepetitions()
    .then(res => {
      dispatch({ type: UPDATE_REPETITIONS, repetitions: res.data });  })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_REPETITIONS, repetitions: [] }); });}
export default refreshUserData;