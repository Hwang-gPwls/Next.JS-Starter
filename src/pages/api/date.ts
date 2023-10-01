export default function handler(req: any, res: any) {
  let today = new Date();

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1; // 월
  let date = today.getDate(); // 날짜

  return res.status(200).json({ curTime: `${year} / ${month} / ${date}` });
}
