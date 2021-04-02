import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);
    
    //이 설정을 넣으면 쿠키가 생성된다 fetcher를 다양하게만들어야한다
export default fetcher;
