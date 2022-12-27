import axios from 'axios';
import config from '../config';


const getSearchResult = async (name) => {
          try {
                    let response = await axios.get(config.search + "?name=" + name);  
                    if (response.status === 200) {
                              return response;
                    }
          } catch (error) {
                    throw error;
          }
}

export default CharecterServices = { getSearchResult };

