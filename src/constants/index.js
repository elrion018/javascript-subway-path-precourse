const stations = ['교대', '강남', '역삼', '남부터미널', '양재', '매봉', '양재시민의숲'];

const courses = {
  교대: [
    ['강남', 2, 3],
    ['남부터미널', 3, 2],
  ],
  강남: [
    ['역삼', 2, 3],
    ['교대', 2, 3],
    ['양재', 2, 8],
  ],
  역삼: [['강남', 2, 3]],
  남부터미널: [
    ['교대', 3, 2],
    ['양재', 6, 5],
  ],
  양재: [
    ['남부터미널', 6, 5],
    ['매봉', 1, 1],
    ['강남', 2, 8],
    ['양재시민의숲', 10, 3],
  ],
  매봉: [['양재', 1, 1]],
  양재시민의숲: [['양재', 10, 3]],
};

const message = {
  TITLE: '🚇 지하철 길찾기',
  START_STATION: '출발역',
  END_STATION: '도착역',
  SHORTEST_DISTANCE: '최단거리',
  MINIMUN_TIME: '최소시간',
  SEARCH: '길 찾기',
  RESULT: '결과',
  ENTIRE_DISTANCE: '총 거리',
  ENTIRE_TIME: '총 소요 시간',
  KM: 'km',
  MINUTES: '분',
};

export { courses, stations, message };
