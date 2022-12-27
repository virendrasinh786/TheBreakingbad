import axios from 'axios';
import config from '../config';


const getAllCharecters = async (payload) => {
          try {
                    let response = await axios.get(config.characters + "?limit=" + payload?.limit + "&skip=" + payload?.skip);
                    if (response.status === 200) {
                              return response;
                    }
          } catch (error) {
                    throw error;
          }
}

export default CharecterServices = { getAllCharecters };

