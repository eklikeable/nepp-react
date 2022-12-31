import axios from 'axios';

axios.defaults.headers = {
  Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getPopular(page = 1) {
  const { data } = await axios.get('/movie/popular', {
    params: {
      // 자동으로 쿼리스트링 형식으로 url뒤에 붙는다
      language: 'ko-KR',
      page,
    },
  });

  return data.results;
}

export async function getDetail(id) {
  try {
    const { data } = await axios.get('movie/' + id, {
      params: {
        language: 'ko-KR',
      },
    });
    return data;
  } catch (e) {
    throw new Error('데이터를 불러오는데 실패했습니다');
  }
}
