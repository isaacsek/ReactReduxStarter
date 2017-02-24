import axios from 'axios';
import { browserHistory } from 'react-router';
import promise from "redux-promise";
import {
  LOAD_DATA
} from './types';

export function loadData() {
    console.log("loading data...");
    return {
      type: LOAD_DATA,
      payload: "This is data."
  }
}
