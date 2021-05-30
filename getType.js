
// export default 기본통로로 데이터가 나간다 . 즉 함수이름 삭제 가능  기본통로에서는 하나의 파일에서 하나의 데이터를  내보낼수 있다.
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

// export default 123 만약 이것을 사용하면 에러가 뜬다 